/**
 * Cloudflare Worker — host canonicalization + locale cannibal 301s before static assets.
 * Canonical site: https://squadhacks.net (matches brand.url)
 *
 * Locale 301s cannot live in public/_redirects (Workers cap: 100 rules).
 * They are generated into functions/cannibal-redirects.json on prebuild.
 *
 * Requires DNS: CNAME `www` → `squadhacks.net` (proxied) AND
 * Workers custom domain `www.squadhacks.net` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'squadhacks.net';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/** Extra hosts that should 301 to the canonical apex. www is handled below. */
const LEGACY_HOSTS = new Set<string>();

const PATH_REDIRECTS = CANNIBAL_REDIRECTS as Record<string, string>;

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	if (PATH_REDIRECTS[pathname]) return PATH_REDIRECTS[pathname];
	if (pathname.endsWith('.xml/')) return pathname.slice(0, -1);
	return null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const mappedPath = pathRedirect(url.pathname);

		const hostTarget = canonicalUrl(request);
		if (hostTarget) {
			if (mappedPath) {
				hostTarget.pathname = mappedPath;
			}
			return Response.redirect(hostTarget.toString(), 301);
		}

		if (mappedPath) {
			return Response.redirect(new URL(mappedPath + url.search, CANONICAL_ORIGIN).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};

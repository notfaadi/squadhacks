import { siteConfig } from './site';
import { squadImages } from './squad';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	squadImages.espWallhack,
	squadImages.aimbotCombat,
	squadImages.aimbotSkeleton,
	squadImages.playerEsp,
	squadImages.cheatsCombat,
	'/images/squad-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/squad-hacks-hero-1536w.webp',
	'squad-esp': squadImages.playerEsp,
	'squad-aimbot': squadImages.aimbotCombat,
	features: squadImages.aimbotSkeleton,
	pricing: squadImages.cheatsCombat,
	setup: squadImages.playerEsp,
	updates: '/images/squad-hacks-hero-1024w.webp',
	faq: squadImages.aimbotSkeleton,
	support: squadImages.cheatsCombat,
	undetected: squadImages.espWallhack,
	wallhack: squadImages.espWallhack,
	radar: squadImages.playerEsp,
	eac: squadImages.aimbotCombat,
	'cheats-2026': '/images/squad-hacks-hero-1024w.webp',
	hacks: squadImages.cheatsCombat,
	'cheat-download': squadImages.cheatsCombat,
	'mod-menu': squadImages.playerEsp,
	'soft-aim': squadImages.aimbotSkeleton,
	'best-cheats': '/images/squad-hacks-hero-1024w.webp',
	'aimbot-hack': squadImages.aimbotSkeleton,
	'esp-hack': squadImages.espWallhack,
	'unlock-all': squadImages.playerEsp,
	privacy: squadImages.aimbotCombat,
	refund: squadImages.cheatsCombat,
	terms: squadImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;

#!/usr/bin/env node
/**
 * Completes escape-from-squad-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'squad-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'squad-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'squad-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'squad-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-squad-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'squad-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'squad-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'squad-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/squad-squad/g, 'squad'],
	[/eac-bypass-squad/g, 'eac-bypass'],
	[/Squad/g, 'Squad'],
	[/Squad/g, 'Squad'],
	[/Call of Duty/g, 'Squad'],
	[/Squad Wallhack/g, 'Squad Wallhack'],
	[/Squad Radar Hack/g, 'Squad Radar Hack'],
	[/Squad Cheat Features/g, 'Squad Cheat Features'],
	[/Squad Cheat Pricing/g, 'Squad Cheat Pricing'],
	[/Squad Cheat Setup/g, 'Squad Cheat Setup'],
	[/Squad Cheat Status/g, 'Squad Cheat Status'],
	[/Squad Cheat Support/g, 'Squad Cheat Support'],
	[/Squad squad fight/g, 'Squad squad fight'],
	[/Squad squad builder/g, 'Squad loadout builder'],
	[/Squad store header/g, 'Squad header'],
	[/Squad wasteland combat/g, 'Squad battle royale combat'],
	[/Squad loadout builder/g, 'Squad loadout builder'],
	[/Squad pricing/g, 'Squad pricing'],
	[/Squad Easy Anti-Cheat/g, 'Squad Easy Anti-Cheat'],
	[/on Squad/g, 'on Squad'],
	[/for Squad/g, 'for Squad'],
	[/Squad guides/g, 'Squad guides'],
	[/Squad guide/g, 'Squad guide'],
	[/Squad hileleri/g, 'Squad hileleri'],
	[/Squad hile/g, 'Squad hile'],
	[/Squad hileleri/g, 'Squad hileleri'],
	[/cheatów Squad/g, 'cheatów Squad'],
	[/cheat Squad/g, 'cheat Squad'],
	[/cheats Squad/g, 'cheats Squad'],
	[/trucos Squad/g, 'trucos Squad'],
	[/triche Squad/g, 'triche Squad'],
	[/trucchi Squad/g, 'trucchi Squad'],
	[/Wallhack Squad/g, 'Squad Wallhack'],
	[/cheat Squad undetected/g, 'cheat Squad undetected'],
	[/cheats Squad undetected/g, 'cheats Squad undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-squad-hacks/g, 'escape-from-squad-hacks'],
	[/squad/g, 'squad'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Squad'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Squad anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Squad Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Squad guides/g, 'Squad guides');
	content = content.replace(/Squad guide/g, 'Squad guide');
	content = content.replace(/Squad hileleri/g, 'Squad hileleri');
	content = content.replace(/Squad hile/g, 'Squad hile');
	content = content.replace(/cheat Squad/g, 'cheat Squad');
	content = content.replace(/cheats Squad/g, 'cheats Squad');
	content = content.replace(/trucos Squad/g, 'trucos Squad');
	content = content.replace(/triche Squad/g, 'triche Squad');
	content = content.replace(/trucchi Squad/g, 'trucchi Squad');
	content = content.replace(/cheatów Squad/g, 'cheatów Squad');
	content = content.replace(/читов Squad/g, 'читов Squad');
	content = content.replace(/читів Squad/g, 'читів Squad');
	content = content.replace(/Squadチート/g, 'Squadチート');
	content = content.replace(/Squad 치트/g, 'Squad 치트');
	content = content.replace(/Squad作弊/g, 'Squad作弊');
	content = content.replace(/Squad rehberleri/g, 'Squad rehberleri');
	content = content.replace(/Squad gidsen/g, 'Squad gidsen');
	content = content.replace(/Squad průvodce/g, 'Squad průvodce');
	content = content.replace(/Squad guider/g, 'Squad guider');
	content = content.replace(/Squad related/g, 'Squad related');
	content = content.replace(/Squad ガイド/g, 'Squad ガイド');
	content = content.replace(/Squad 가이드/g, 'Squad 가이드');
	content = content.replace(/Squad指南/g, 'Squad指南');
	content = content.replace(/Squad गाइड/g, 'Squad गाइड');
	content = content.replace(/Squad panduan/g, 'Squad panduan');
	content = content.replace(/Squad คู่มือ/g, 'Squad คู่มือ');
	content = content.replace(/Squad hướng dẫn/g, 'Squad hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Squad Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');

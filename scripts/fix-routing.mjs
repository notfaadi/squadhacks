#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Squad source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['squad-esp', 'squad-esp'],
	['squad-aimbot', 'squad-aimbot'],
	['eac', 'eac'],
	['undetected-squad-hacks', 'undetected-squad-hacks'],
	['squad-wallhack', 'squad-wallhack'],
	['squad-radar-hack', 'squad-radar-hack'],
	['squad-hacks-2026', 'squad-hacks-2026'],
	['eac-bypass', 'eac-bypass'],
	['squadhacks.net', 'squadhacks.net'],
	['trucos-squad', 'trucos-squad'],
	['triche-squad', 'triche-squad'],
	['squad-hacks', 'escape-from-squad-hacks'],
	['cheats-squad', 'cheats-squad'],
	['trucchi-squad', 'trucchi-squad'],
	['cheaty-squad', 'cheaty-squad'],
	['chity-squad', 'chity-squad'],
	['chitov-squad', 'chitov-squad'],
	['chitiv-squad', 'chitiv-squad'],
	['cheatow-squad', 'cheatow-squad'],
	['hile-squad', 'hile-squad'],
	['squad-hile', 'squad-hile'],
	['squad-esp-chity', 'squad-esp-chity'],
	['squad-aimbot-chity', 'squad-aimbot-chity'],
	['unentdeckte-squad-hacks', 'unentdeckte-escape-from-squad-hacks'],
	['cheats-squad-indetectaveis', 'cheats-squad-indetectaveis'],
	['trucchi-squad-indetectabili', 'trucchi-squad-indetectabili'],
	['niewykrywalne-cheats-squad', 'niewykrywalne-cheats-squad'],
	['nedecektiruemye-chity-squad', 'nedecektiruemye-chity-squad'],
	['tespit-edilemeyen-squad-hileleri', 'tespit-edilemeyen-squad-hileleri'],
	['nedecektovani-chity-squad', 'nedecektovani-chity-squad'],
	['cheats-squad-nedetectabile', 'cheats-squad-nedetectabile'],
	['basta-squad-hacks', 'basta-escape-from-squad-hacks'],
	['eac-bypass-trucos-squad', 'eac-bypass-trucos-squad'],
	['eac-bypass-triche-squad', 'eac-bypass-triche-squad'],
	['eac-bypass-cheats-squad', 'eac-bypass-cheats-squad'],
	['eac-bypass-chity-squad', 'eac-bypass-chity-squad'],
	['eac-bypass-squad', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-squad-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-squad-hacks-hero.webp',
	'squad-esp': '/images/escape-from-squad-hacks-esp-wallhack.webp',
	'squad-aimbot': '/images/escape-from-squad-hacks-aimbot-combat.webp',
	features: '/images/escape-from-squad-hacks-package.webp',
	pricing: '/images/escape-from-squad-hacks-cover.webp',
	setup: '/images/squad-loadout-builder.webp',
	updates: '/images/squad-header-art.webp',
	faq: '/images/squad-squad-fight.webp',
	support: '/images/escape-from-squad-hacks-package.webp',
	undetected: '/images/squad-battle-royale-combat.webp',
	wallhack: '/images/escape-from-squad-hacks-esp-wallhack.webp',
	radar: '/images/squad-player-esp.webp',
	'eac': '/images/squad-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-squad-hacks-hero.webp',
	privacy: '/images/escape-from-squad-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-squad-hacks-cover.webp',
	terms: '/images/escape-from-squad-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'squad-esp', 'squad-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'squad-esp' | 'squad-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/rallyFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();

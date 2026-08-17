#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Squad source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['squad-esp', 'squad-esp'],
	['squad-aimbot', 'squad-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-squad-hacks', 'undetected-squad-hacks'],
	['squad-wallhack', 'squad-wallhack'],
	['squad-radar-hack', 'squad-radar-hack'],
	['squad-hacks-2026', 'squad-hacks-2026'],
	['escape-from-squad-hacks', 'escape-from-squad-hacks'],
	['squad', 'squad'],
	['Squad', 'Squad'],
	['Squad', 'Squad'],
	['Squad Hacks', 'Squad Hacks'],
	['Squad hacks', 'Squad hacks'],
	['Squad hack', 'Squad hack'],
	['Squad ESP', 'Squad ESP'],
	['Squad Aimbot', 'Squad Aimbot'],
	['Squad wallhack', 'Squad wallhack'],
	['Squad radar', 'Squad radar'],
	['Squad firefights', 'Squad firefights'],
	['Squad combat', 'Squad combat'],
	['Squad patches', 'Squad patches'],
	['Squad updates', 'Squad updates'],
	['Squad setup', 'Squad setup'],
	['Squad license', 'Squad license'],
	['Squad licenses', 'Squad licenses'],
	['Squad sessions', 'Squad sessions'],
	['in Squad', 'in Squad'],
	['for Squad', 'for Squad'],
	['Squad on', 'Squad on'],
	['Squad or', 'Squad or'],
	['Squad\'s', 'Squad\'s'],
	['Squad ', 'Squad '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@squadhacks.net', 'support@squadhacks.net'],
	['Yehorivka, Goose Bay, and Streets of Squad', 'Yehorivka, Goose Bay, and Streets of Squad'],
	['Yehorivka, Goose Bay and Streets of Squad', 'Yehorivka, Goose Bay and Streets of Squad'],
	['rally fights', 'rally fights'],
	['rally fight', 'rally fight'],
	['raid rounds', 'raid rounds'],
	['rally', 'rally'],
	['infantry', 'players'],
	['operator', 'player'],
	['infantry', 'Players'],
	['Operator', 'Player'],
	['rally timer', 'rally timer'],
	['infantry and vehicle matches', 'infantry and vehicle matches'],
	['infantry and vehicle matches', 'infantry and vehicle matches'],
	['infantry & vehicle', 'infantry & vehicle'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Squad combat pace'],
	['COD', 'Squad'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Squad Hacks',
	game: 'Squad',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Yehorivka, Goose Bay, and Streets of Squad'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');

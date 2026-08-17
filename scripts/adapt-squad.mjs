#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Squad Hacks.
 * Domain: squadhacks.net
 * Run from project root: node scripts/adapt-squad.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot-hack', 'squad-aimbot-hack'],
	['tarkov-esp-hack', 'squad-esp-hack'],
	['tarkov-radar-hack', 'squad-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-squad-hacks'],
	['tarkov-cheats-2026', 'squad-hacks-2026'],
	['best-tarkov-cheats', 'best-squad-hacks'],
	['tarkov-cheat-download', 'squad-cheat-download'],
	['tarkov-mod-menu', 'squad-mod-menu'],
	['tarkov-soft-aim', 'squad-soft-aim'],
	['tarkov-unlock-all', 'squad-unlock-all'],
	['tarkov-wallhack', 'squad-wallhack'],
	['tarkov-cheats', 'squad-hacks'],
	['tarkov-aimbot', 'squad-aimbot'],
	['tarkov-esp', 'squad-esp'],
	['battleye-bypass', 'eac-bypass'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.tarkovcheats.org', 'https://www.squadhacks.net'],
	['https://tarkovcheats.org', 'https://squadhacks.net'],
	['www.tarkovcheats.org', 'www.squadhacks.net'],
	['support@tarkovcheats.org', 'support@squadhacks.net'],
	['tarkovcheats.org', 'squadhacks.net'],
	['besttarkovcheats.com', 'squadhacks.net'],
	['project-name=besttarkovcheats', 'project-name=squadhacks'],
	['project-name=tarkovcheats', 'project-name=squadhacks'],
	['name = "besttarkovcheats"', 'name = "squadhacks"'],
	['name = "tarkovcheats"', 'name = "squadhacks"'],
	['"name": "tarkov-cheats"', '"name": "squad-hacks"'],
	['%2Fproducts%2Fescape-from-tarkov', '%2Fproducts%2Fsquad'],
	['/products/escape-from-tarkov', '/products/squad'],
	['tarkov-esp-player-tags', 'squad-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'squad-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'squad-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'squad-aimbot-skeleton'],
	['tarkov-esp-radar', 'squad-esp-radar'],
	['tarkov-cheats-combat', 'squad-hacks-combat'],
	['tarkov-cheats-logo', 'squad-hacks-logo'],
	['tarkov-hero-banner', 'squad-hero-banner'],
	['tarkov-hero-ghost', 'squad-hero-ghost'],
	['tarkov-hero-source', 'squad-hero-source'],
	['undetected-tarkov-cheats', 'undetected-squad-hacks'],
	['best-tarkov-cheats', 'best-squad-hacks'],
	['tarkov-cheat-download', 'squad-cheat-download'],
	['tarkov-cheats-2026', 'squad-hacks-2026'],
	['tarkov-radar-hack', 'squad-radar-hack'],
	['tarkov-aimbot-hack', 'squad-aimbot-hack'],
	['tarkov-esp-hack', 'squad-esp-hack'],
	['tarkov-unlock-all', 'squad-unlock-all'],
	['tarkov-soft-aim', 'squad-soft-aim'],
	['tarkov-mod-menu', 'squad-mod-menu'],
	['tarkov-wallhack', 'squad-wallhack'],
	['tarkov-cheats', 'squad-hacks'],
	['tarkov-aimbot', 'squad-aimbot'],
	['tarkov-esp', 'squad-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'squad-hacks'],
	['Escape from Tarkov', 'Squad'],
	['escape-from-tarkov', 'squad'],
	['Tarkov Cheats', 'Squad Hacks'],
	['Tarkov cheats', 'Squad hacks'],
	['Tarkov cheat', 'Squad hack'],
	['Tarkov hacks', 'Squad hacks'],
	['Tarkov hack', 'Squad hack'],
	['TarkovCheatsSite', 'SquadHacksSite'],
	['Tarkov Intel', 'Squad Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov hacks', 'squad hacks'],
	['tarkov cheats', 'squad hacks'],
	['tarkov hack', 'squad hack'],
	['tarkov cheat', 'squad hack'],
	['PMC raids and Scav runs', 'infantry and vehicle matches'],
	['PMC raids and Scav run', 'infantry and vehicle matches'],
	['PMC and Scav ESP', 'infantry and vehicle ESP'],
	['PMC and Scav', 'infantry and vehicle'],
	['PMCs and Scavs', 'infantry and vehicles'],
	['PMC raids', 'matches'],
	['Scav runs', 'vehicle matches'],
	['Scav run', 'vehicle match'],
	['PMCs', 'infantry'],
	['PMC', 'infantry'],
	['Scavs', 'vehicles'],
	['Scav', 'vehicle'],
	['Customs, Woods, and Streets of Squad', 'Yehorivka, Goose Bay, and Fallujah'],
	['Customs, Woods and Streets of Squad', 'Yehorivka, Goose Bay and Fallujah'],
	['Streets of Squad', 'Fallujah'],
	['before you raid', 'before you play'],
	['before every raid', 'before every match'],
	['during a raid', 'during a match'],
	['in raids', 'in matches'],
	['early raids', 'early matches'],
	['Squad raids', 'Squad matches'],
	['raids felt', 'matches felt'],
	['Loot ESP', 'Vehicle ESP'],
	['loot ESP', 'vehicle ESP'],
	['Loot markers', 'HAB and vehicle markers'],
	['loot markers', 'HAB and vehicle markers'],
	['extract markers', 'rally markers'],
	['Extract markers', 'Rally markers'],
	['near extracts', 'near rallies'],
	['extracts', 'rally points'],
	['extract', 'rally'],
	['this wipe', 'this season'],
	['last wipe', 'last season'],
	['on Customs', 'on Yehorivka'],
	['on Woods', 'on Goose Bay'],
	['on Factory', 'on Narva'],
	['in dorms', 'on urban layers'],
	['dorms', 'urban layers'],
	['Customs', 'Yehorivka'],
	['Woods', 'Goose Bay'],
	['Factory', 'Narva'],
	['tarkovImages', 'squadImages'],
	["from './tarkov'", "from './squad'"],
	["from '../data/tarkov'", "from '../data/squad'"],
	["from '../../data/tarkov'", "from '../../data/squad'"],
	['fetch-tarkov-images', 'fetch-squad-images'],
	['tarkov-hack-overlays', 'squad-hack-overlays'],
	['trucos-tarkov', 'trucos-squad'],
	['triche-tarkov', 'triche-squad'],
	['cheats-tarkov', 'cheats-squad'],
	['trucchi-tarkov', 'trucchi-squad'],
	['cheaty-tarkov', 'cheaty-squad'],
	['chity-tarkov', 'chity-squad'],
	['chitov-tarkov', 'chitov-squad'],
	['chitiv-tarkov', 'chitiv-squad'],
	['cheatow-tarkov', 'cheatow-squad'],
	['hile-tarkov', 'hile-squad'],
	['tarkov-hile', 'squad-hile'],
	['Buy Tarkov Cheats', 'Buy Squad Hacks'],
	['Tarkov', 'Squad'],
	['tarkov', 'squad'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-squad.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameTarkovTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'squad.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → squad.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-squad-images.mjs'],
		['tarkov-hack-overlays.mjs', 'squad-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-squad-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'squad-aimbot': 'squad-aimbot',
		'squad-esp': 'squad-esp',
		'squad-wallhack': 'wallhack',
		'squad-radar-hack': 'radar',
		'undetected-squad-hacks': 'undetected',
		'squad-hacks-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'squad-hacks': 'hacks',
		'squad-cheat-download': 'cheat-download',
		'squad-mod-menu': 'mod-menu',
		'squad-soft-aim': 'soft-aim',
		'best-squad-hacks': 'best-cheats',
		'squad-aimbot-hack': 'aimbot-hack',
		'squad-esp-hack': 'esp-hack',
		'squad-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov-cheats/g, 'squad-hacks').replace(/tarkov/g, 'squad');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Squad Hacks (squadhacks.net)...\n');
	await renamePageDirs();
	await renameTarkovTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: polish brand.ts identity and npm run sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});

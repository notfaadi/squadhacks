#!/usr/bin/env node
/** Final pass: fix remaining Squad references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['squadImages', 'squadImages'],
	["from '../data/squad'", "from '../data/squad'"],
	["from './squad'", "from './squad'"],
	['/undetected-squad-hacks/', '/undetected-squad-hacks/'],
	['/squad-wallhack/', '/squad-wallhack/'],
	['/squad-radar-hack/', '/squad-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/squad-hacks-2026/', '/squad-hacks-2026/'],
	['/squad-aimbot/', '/squad-aimbot/'],
	['/squad-esp/', '/squad-esp/'],
	['/squad-hacks/', '/squad-esp/'],
	['Squad Hacks', 'Squad Hacks'],
	['Squad hacks', 'Squad hacks'],
	['Squad wallhack', 'Squad wallhack'],
	['Squad radar', 'Squad radar'],
	['Squad Aimbot', 'Squad Aimbot'],
	['Squad ESP', 'Squad ESP'],
	['Squad', 'Squad'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['squadhacks.net', 'squadhacks.net'],
	['operatorEsp', 'playerEsp'],
	['rallyFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}

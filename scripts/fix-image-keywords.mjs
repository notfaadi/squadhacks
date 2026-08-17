#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'squad hacks', espWallhack: 'squad hacks wallhack', aimbotCombat: 'squad hacks aimbot', squadFight: 'squad hacks', playerEsp: 'squad hacks esp', headerArt: 'squad hacks aimbot', cheatsPackage: 'squad hacks radar', rebootFight: 'squad hacks aimbot', battleRoyale: 'squad hacks', battleRoyaleIsland: 'squad hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Squad ESP player tags hack'", "imageAlt: 'squad hacks esp'"],
	["imageAlt: 'Squad ESP radar hack'", "imageAlt: 'squad hacks radar'"],
	["imageAlt: 'Squad aimbot sniper kill'", "imageAlt: 'squad hacks aimbot'"],
	["imageAlt: 'Squad aimbot skeleton targeting'", "imageAlt: 'squad hacks aimbot'"],
	["imageAlt: 'Squad hacks ADS combat'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks setup PC activation'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks updates Easy Anti-Cheat maintenance'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks FAQ ESP aimbot'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks support license help'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Undetected squad hacks ESP wallhack'", "imageAlt: 'undetected squad hacks'"],
	["imageAlt: 'Squad wallhack skeleton ESP'", "imageAlt: 'squad hacks wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass squad ESP aimbot'", "imageAlt: 'squad hacks eac'"],
	["imageAlt: 'Squad hacks 2026 ESP aimbot'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks combat aimbot'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hack download ESP aimbot'", "imageAlt: 'squad hacks download'"],
	["imageAlt: 'Squad mod menu ESP aimbot'", "imageAlt: 'squad hacks mod menu'"],
	["imageAlt: 'Squad soft aim aimbot settings'", "imageAlt: 'squad hacks soft aim'"],
	["imageAlt: 'Best squad hacks 2026 ESP'", "imageAlt: 'best squad hacks'"],
	["imageAlt: 'Squad aimbot hack combat'", "imageAlt: 'squad hacks aimbot'"],
	["imageAlt: 'Squad ESP hack wallhack'", "imageAlt: 'squad hacks esp'"],
	["imageAlt: 'Squad unlock all ESP aimbot guide'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks privacy policy'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks refund policy'", "imageAlt: 'squad hacks'"],
	["imageAlt: 'Squad hacks terms of use'", "imageAlt: 'squad hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Squad ${meta.altKeyword}`")
	.join("imageAlt: 'squad hacks'")
	.split("galleryTitle: `Squad Hacks ${topicName}`")
	.join("galleryTitle: 'squad hacks'")
	.split("imageAlt: `Squad hacks ${kind} policy`")
	.join("imageAlt: 'squad hacks'")
	.split("galleryTitle: `Squad Hacks ${kind} resources`")
	.join("galleryTitle: 'squad hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');

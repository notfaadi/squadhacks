#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Offworld Industries'"],
	['Activision\u2019', "Offworld Industries'"],
	['Activision services', 'Offworld Industries services'],
	['Activision service', 'Offworld Industries service'],
	['Activision platform', 'Offworld Industries platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Offworld Industries bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Squad Support'],
	['Activision Squad', 'Squad'],
	['Activision Support', 'Squad Support'],
	['Activision', 'Offworld Industries'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromsquad.com/support'],
	['www.epicgames.com/squad', 'www.escapefromsquad.com'],
	['www.squad.com/competitive', 'www.escapefromsquad.com'],
	['https://www.squad.com/', 'https://joinsquad.com/'],
	['Squad.com', 'Squad'],
	['Squad Competitive', 'Squad'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}

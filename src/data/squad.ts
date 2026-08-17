import { siteConfig } from './site';

/** Screenshots used across product pages — simple squad hacks keyword alts. */
export const squadImages = {
	hero: '/images/squad-hacks-hero-full.png',
	espWallhack: '/images/squad-hacks-wallhack.webp',
	aimbotCombat: '/images/squad-hacks-aimbot.webp',
	aimbotSkeleton: '/images/squad-hacks-aimbot-view.webp',
	playerEsp: '/images/squad-hacks-radar.webp',
	cheatsCombat: '/images/squad-hacks-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/squad-hacks-raid.webp',
	loadoutBuilder: '/images/squad-hacks-radar.webp',
	squadFight: '/images/squad-hacks-aimbot-view.webp',
	cheatsPackage: '/images/squad-hacks-radar.webp',
	headerArt: '/images/squad-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/squad-hacks-raid.webp',
	rallyFight: '/images/squad-hacks-aimbot.webp',
	rebootFight: '/images/squad-hacks-aimbot.webp',
	scavRunCombat: '/images/squad-hacks-wallhack.webp',
	scavRunMode: '/images/squad-hacks-esp.webp',
	battleRoyaleIsland: '/images/squad-hacks-esp.webp',
	raidMap: '/images/squad-hacks-esp.webp',
	product: [
		{ src: '/images/squad-hacks-esp.webp', alt: 'ESP player boxes in a Squad raid' },
		{ src: '/images/squad-hacks-wallhack.webp', alt: 'Wallhack outlines for infantry and vehicles' },
		{ src: '/images/squad-hacks-aimbot.webp', alt: 'Soft aim assist overlay for Squad' },
		{ src: '/images/squad-hacks-esp.webp', alt: 'Loot and rally ESP markers' },
		{ src: '/images/squad-hacks-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/squad-hacks-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/squad-hacks-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/squad-hacks-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/squad-hacks-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/squad-hacks-esp.webp', alt: 'Container and vehicle ESP pins' },
		{ src: '/images/squad-hacks-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/squad-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/squad-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/squad-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/squad-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/squad-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/squad-hacks-raid.webp', title: '', caption: '' },
	],
} as const;

/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Squad Hacks',
	/** Short product label if needed */
	shortName: 'Squad',
	/** Canonical origin — no trailing slash */
	url: 'https://squadhacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@squadhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsquad',

	/** Game this template instance targets */
	game: 'Squad',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/squad-hacks-logo.webp',
	logoRaster: '/images/squad-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Squad Hacks logo',
	defaultOgImage: '/images/squad-hacks-hero-1536w.webp',
	heroImage: '/images/squad-hacks-hero-1536w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#af0420',
		bg: '#10080c',
		soft: '#c21e3a',
		deep: '#98061f',
		hover: '#da7283',
		panel: '#181115',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'squad hacks',
		list: [
			'squad hacks',
			'squad cheats',
			'squad esp',
			'squad aimbot',
			'squad wallhack',
			'squad radar',
			'undetected squad hacks',
			'best squad hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Squad Hacks | Official Undetected Windows PC',
		homeDescription:
			'Official Squad Hacks site for Windows PC. Compare features, store plans, and live status — then buy ESP, Cloud DMA, and radar in one license.',
		featuresTitle: '{game} ESP Aimbot Radar Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, Cloud DMA, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store Monthly Lifetime Plans | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, radar, and Cloud DMA on both. Instant delivery after payment. Compare and buy.',
		statusTitle: '{game} Status After Patch Updates | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today. Stay updated.',
		previewTitle: 'Squad Hacks | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected squad hacks for Squad on Windows PC. ESP, soft aim, radar, and Cloud DMA in one license with Easy Anti-Cheat updates. Instant delivery.',
		setupTitle: '{game} Setup Guide for Windows PC | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support and License Help | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ on Delivery and Setup | {brand}',
		faqDescription:
			'Short answers about {brand} — Cloud DMA, delivery, setup, {antiCheat} updates, and refunds before you buy a Windows PC license today.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and Cloud DMA for Squad on Windows PC. Real feedback from license holders. Read them before you buy.',
		blogTitle: '{game} Intel Guides for Players | {brand}',
		blogDescription:
			'Guides and notes for {game} — match tips, ESP, aimbot, layer notes, and {antiCheat} update coverage for Windows PC players. Updated for 2026.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, radar, and Cloud DMA',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, radar, and Cloud DMA, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, radar, and Cloud DMA for Squad on Windows PC.',
		blogLabel: 'Squad Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Squad — ESP wallhack, soft aim, 2D radar, Cloud DMA, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, Cloud DMA, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, Cloud DMA, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Cloud DMA',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-18',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/squad-hacks-esp.webp',
				title: 'ESP overlay in Squad',
				caption: 'Player ESP boxes and distance readouts during a match',
			},
			{
				src: '/images/squad-hacks-wallhack.webp',
				title: 'Wallhack visibility for Squad matches',
				caption: 'Infantry and vehicle outlines through walls and terrain',
			},
			{
				src: '/images/squad-hacks-aimbot.webp',
				title: 'Soft aim assist for Squad',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/squad-hacks-aimbot-view.webp',
				title: 'Aimbot view in Squad Hacks',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/squad-hacks-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near rallies',
			},
			{
				src: '/images/squad-hacks-raid.webp',
				title: 'Squad Hacks license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}

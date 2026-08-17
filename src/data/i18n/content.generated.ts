import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'squad-esp' | 'squad-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected squad hacks 2026",
					subtitle: "Squad hacks with squad esp, radar hack and squad aimbot for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort: "Squad esp, radar & aimbot for PC",
					buyNow: "Buy Squad Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Squad Hacks — undetected squad hacks live for Squad on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected squad hacks",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Squad Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Squad Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Squad hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "Squad hacks for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Squad Hacks is the undetected squad hacks package for Windows PC — built for Squad on Windows PC. Squad esp wallhack, 2D radar, and squad aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "Squad Hacks homepage hero — ESP and aimbot for Squad",
					galleryTitle: "Squad Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Squad hacks in 2026",
							paragraphs: [
								"Squad rewards map awareness. Squad Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> and <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/squad-hacks/\">Squad hacks pillar</a>, <a href=\"/squad-esp/\">ESP guide</a>, <a href=\"/squad-aimbot/\">Aimbot controls</a>, and <a href=\"/squad-hacks/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Squad Hacks bundles player ESP wallhack, HAB and vehicle markers, 2D radar overlays, and Aimbot profiles in one undetected package built for infantry and vehicle matches.",
								"Browse the <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, <a href=\"/squad-esp/\">wallhack</a>, and <a href=\"/squad-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> for Offworld Industries service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/squad-hacks-esp.webp",
				},
				"squad-esp": {
					title: "Squad ESP 2026 | Player Boxes & Wallhack",
					description: "Squad ESP for Windows PC — player boxes, HAB and vehicle markers, and distance readouts. Part of our undetected squad hacks for Squad.",
					h1: "Squad ESP — Player Boxes & Wallhack",
					intro: "Squad esp visibility tools for raid and scav-run. Read enemy squads, infantry, vehicles, loot, and distance before you commit — toggleable squad esp wallhack overlays bundled in our squad hacks package.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP overlay visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Squad wallhack guide",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "What Squad ESP solves in matches",
							paragraphs: [
								"Squad maps punish incomplete information. Squad Hacks ESP wallhack helps you spot enemy squads early, spot infantry and vehicles before they push your angle, and mark high-value loot worth the detour.",
								"On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Squad’s live seasons and map updates are published by Offworld Industries (<a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and vehicle ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, rally cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports matches and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/squad-esp/\">wallhack page</a> and pair visibility with the <a href=\"/squad-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and rally awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Squad Hacks ESP wallhack is maintained for Squad with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/squad-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/squad-hacks/\">Squad hacks pillar</a> and <a href=\"/squad-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/squad-hacks-radar.webp",
				},
				"squad-aimbot": {
					title: "Squad Aimbot 2026 | Soft Aim for Windows PC",
					description: "Squad aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our squad hacks package.",
					h1: "Squad Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Squad firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot combat previews",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Squad combat pace",
							paragraphs: [
								"Squad mixes long-range AR fights with close-quarters SMG pushes. Squad Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and urban layers clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/squad-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/squad-esp/\">ESP wallhack</a> and <a href=\"/squad-radar-hack/\">2D radar</a> in the same Squad Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Aimbot",
							paragraphs: [
								"Squad Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major Squad patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot.webp",
				},
				features: {
					title: "Squad Hacks Features | ESP, Soft Aim & Radar",
					description: "Full squad hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Squad Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Squad Hacks package for Squad on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Squad Hacks feature gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and rally awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports matches and scav-runs. Deep-dive the <a href=\"/squad-esp/\">ESP page</a> and <a href=\"/squad-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid rally points, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Squad sessions. See <a href=\"/squad-radar-hack/\">radar</a> and <a href=\"/squad-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/squad-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@squadhacks.net.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/squad-hacks/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "Squad Hacks Pricing | $35/mo or $150 Life",
					description: "Squad hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Squad Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Squad Hacks — ESP wallhack, radar hack, and Aimbot for Squad on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Squad Hacks package visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Squad Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Squad Hacks package — ideal if you play Squad regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, HAB and vehicle markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Squad patches.",
								"Season calendars and client updates come from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/squad-hacks/\">Squad hacks</a>, <a href=\"/squad-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/squad-hacks-raid.webp",
				},
				setup: {
					title: "Squad Hacks Setup | Windows PC Guide",
					description: "Set up squad hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.",
					h1: "Squad Hacks Setup — Windows PC Guide",
					intro: "Install and configure Squad Hacks for Squad on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Squad Hacks setup visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Squad Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Squad.",
								"Also glance at <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> if Offworld Industries services look unstable on patch day — a platform outage is not a license fault.",
								"Squad Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for infantry, vehicles, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, and <a href=\"/squad-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/squad-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Squad or Easy Anti-Cheat patches",
							paragraphs: [
								"When Offworld Industries ships a major Squad update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/squad-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/squad-hacks-radar.webp",
				},
				updates: {
					title: "Squad Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description: "Squad hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Squad Hacks Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and Squad patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Squad patch and maintenance visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Squad and Easy Anti-Cheat receive frequent patches. Squad Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> for Offworld Industries platform health and this page for Squad Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/squad-hacks/\">undetected Squad hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/squad-hacks-esp.webp",
				},
				faq: {
					title: "Squad Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "Squad hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Squad Hacks FAQ — Common Questions",
					intro: "Answers about undetected Squad Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Squad compatibility on Windows PC.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "Squad Hacks FAQ visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Squad Hacks?",
							paragraphs: [
								"Squad Hacks is an undetected cheat package for Squad on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover raid and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/squad-esp/\">ESP</a> / <a href=\"/squad-aimbot/\">Aimbot</a> for module detail.",
								"Squad itself is published by Offworld Industries (<a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>). Cheats are third-party tools and may violate Offworld Industries' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Squad Hacks undetected in 2026?",
							paragraphs: [
								"Squad Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/squad-hacks/\">undetected Squad hacks</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@squadhacks.net or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot-view.webp",
				},
				support: {
					title: "Squad Hacks Support | Help & Contact",
					description: "Contact squad hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Squad Hacks Support — Contact Us",
					intro: "Get help with Squad Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Squad on Windows PC.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Squad Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Squad Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Offworld Industries bans.",
								"Account and game policy questions belong with Offworld Industries. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@squadhacks.net",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-raid.webp",
				},
				undetected: {
					title: "Undetected Squad Hacks 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected squad hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Squad Hacks — Easy Anti-Cheat Maintenance",
					intro: "How Squad Hacks stays maintained for Squad after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Squad Hacks visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Squad Hacks",
							paragraphs: [
								"Undetected Squad Hacks means the package is actively maintained against Easy Anti-Cheat and major Squad patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; Squad client updates ship through <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Squad updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass Squad guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/squad-hacks/\">Squad hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/squad-hacks-wallhack.webp",
				},
				wallhack: {
					title: "Squad Wallhack 2026 | ESP Boxes & Visibility",
					description: "Squad wallhack ESP with player boxes and HAB and vehicle markers for Windows PC. Undetected squad hacks — learn overlays and buy.",
					h1: "Squad Wallhack — ESP Boxes & Visibility",
					intro: "Squad wallhack ESP for Squad — see players, loot, bosses, and containers through toggleable wallhack overlays built for matches and scav-runs.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad wallhack ESP gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Squad ESP page",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Squad wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Squad Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and rally holds.",
								"For the broader ESP keyword page see <a href=\"/squad-esp/\">Squad ESP</a>; for combat assist see <a href=\"/squad-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/squad-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/squad-hacks/\">undetected Squad hacks</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/squad-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/squad-hacks-wallhack.webp",
				},
				radar: {
					title: "Squad Radar Hack 2026 | 2D Threat Overlay",
					description: "Squad radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our squad hacks package.",
					h1: "Squad Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Squad — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Squad radar hack visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Squad",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Squad Hacks radar complements <a href=\"/squad-esp/\">ESP wallhack</a> markers during squad pushes and rally camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight rally holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/squad-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/squad-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full Squad Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Squad patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/squad-hacks/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-radar.webp",
				},
				eac: {
					title: "Easy Anti-Cheat Bypass Squad | Squad Hacks Maintenance",
					description: "How squad hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Easy Anti-Cheat Bypass — Squad Hacks Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for Squad Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Squad security updates.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Offworld Industries' anti-cheat for Squad on PC (see <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Squad Hacks monitors Easy Anti-Cheat patch notes and Squad seasonal updates from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Offworld Industries service health on <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/squad-hacks/\">undetected Squad hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best squad hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected squad hacks with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "Squad Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Squad Hacks package for Squad — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026 gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why squad hacks buyers choose Squad Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Squad Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, HAB and vehicle markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/squad-hacks/\">Squad hacks pillar</a>, <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, <a href=\"/squad-esp/\">wallhack</a>, <a href=\"/squad-radar-hack/\">radar</a>, <a href=\"/squad-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/squad-hacks/\">Squad hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/squad-hacks/\">Squad hacks</a> checklist, <a href=\"/blog/squad-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@squadhacks.net via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-esp.webp",
				},
				hacks: {
					title: "Squad Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "Squad hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare squad hacks options and buy the full package.",
					h1: "Squad Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "Squad hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for squad hacks in 2026.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "What Squad hacks include in 2026",
							paragraphs: [
								"Players searching for Squad hacks usually want visibility and combat tools without stacking separate downloads. Squad Hacks bundles player ESP wallhack, HAB and vehicle markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called squad hacks.",
								"Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Squad hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/squad-hacks/\">squad hacks 2026</a> and <a href=\"/squad-hacks/\">Squad hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/squad-esp/\">Squad ESP</a>, <a href=\"/squad-aimbot/\">Squad Aimbot</a>, <a href=\"/squad-esp/\">wallhack</a>, <a href=\"/squad-radar-hack/\">radar hack</a>, and <a href=\"/squad-aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/squad-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-squad-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-squad-hacks-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "Squad hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Squad Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/squad-hacks/\">mod menu</a>, <a href=\"/squad-aimbot/\">aimbot</a>, <a href=\"/squad-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Squad hacks with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Undetected Squad hacks require rebuilds after Easy Anti-Cheat and major Squad patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/squad-hacks/\">undetected Squad hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/squad-hacks-raid.webp",
				},
				"cheat-download": {
					title: "Squad Hack Download 2026 | Instant Access",
					description: "Squad hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Squad Hack Download — Instant License Delivery",
					intro: "How Squad hack download works for Squad — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad hack download visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Squad hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, Squad Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Offworld Industries services are down, check <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Squad hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for matches and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Squad or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/squad-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/squad-hacks-raid.webp",
				},
				"mod-menu": {
					title: "Squad Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Squad mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected squad hacks package.",
					h1: "Squad Mod Menu — In-Client Control Panel",
					intro: "Squad mod menu controls for Squad — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Squad session on Windows PC.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad mod menu gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Squad mod menu controls",
							paragraphs: [
								"A Squad mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Squad Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, HAB and vehicle markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Squad.",
								"Control deep-dives: <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, <a href=\"/squad-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for matches and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and rally holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.squad} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/squad-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"Squad mod menu behavior is rebuilt when Easy Anti-Cheat or major Squad updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/squad-hacks-radar.webp",
				},
				"soft-aim": {
					title: "Squad Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Squad soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our squad hacks with ESP boxes.",
					h1: "Squad Soft Aim — Smooth Aimbot Controls",
					intro: "Squad soft aim settings for Squad — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad soft aim gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "What Squad soft aim means",
							paragraphs: [
								"Squad soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Squad Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/squad-aimbot/\">Squad Aimbot</a>. Alternate wording: <a href=\"/squad-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/squad-esp/\">ESP wallhack</a> and <a href=\"/squad-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Squad Hacks 2026 | Buyer Guide",
					description: "Best squad hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Squad Hacks — 2026 Buyer Guide",
					intro: "Compare the Squad hacks for Squad in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Best Squad hacks gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Squad hacks in 2026",
							paragraphs: [
								"The Squad hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Squad Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Squad hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, HAB and vehicle markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Squad patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/squad-hacks/\">undetected status</a>, and <a href=\"/squad-hacks/\">Squad hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/squad-esp/\">ESP</a>, <a href=\"/squad-aimbot/\">Aimbot</a>, <a href=\"/squad-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Squad hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Offworld Industries terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/squad-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack 2026 | Soft Aim Assist",
					description: "Squad aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our squad hacks package.",
					h1: "Squad Aimbot Hack — Soft Aim Assist",
					intro: "Squad aimbot hack tools for Squad — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad aimbot hack gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad aimbot hack vs visibility tools",
							paragraphs: [
								"A Squad aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Squad Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Squad combat pace across matches and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/squad-aimbot/\">soft aim</a>. Full settings: <a href=\"/squad-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid rally points.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/squad-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Squad ESP Hack 2026 | Player Boxes & Loot",
					description: "Squad ESP hack with player boxes and HAB and vehicle markers for Windows PC. Undetected squad hacks with — see overlays and buy.",
					h1: "Squad ESP Hack — Player Boxes Guide",
					intro: "Squad ESP hack overlays for Squad — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP hack gallery",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "What a Squad ESP hack shows",
							paragraphs: [
								"A Squad ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/squad-esp/\">Squad ESP</a>. Wallhack wording: <a href=\"/squad-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, HAB and vehicle markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports matches and scav-runs.",
								"POI and loot changes publish through <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Squad patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/squad-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/squad-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "Squad Unlock All 2026 | What It Really Means",
					description: "Squad unlock all explained vs real squad hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Squad Unlock All — What Players Search For",
					intro: "Squad unlock all is a common search term for Squad — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Squad Hacks actually provides on Windows PC.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad unlock all guide visuals",
					ctaPrimary: "Buy Squad Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Squad unlock all usually means",
							paragraphs: [
								"Squad unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Squad Hacks focuses on in-match awareness — player ESP, HAB and vehicle markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://joinsquad.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Squad</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/squad-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/squad-hacks/\">Squad hacks</a> and <a href=\"/squad-hacks/\">Squad hacks</a>.",
							],
						},
						{
							h2: "Buying Squad Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Squad on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/squad-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Squad Hacks",
					description: "Privacy policy for Squad Hacks. How we handle support emails, order data, and checkout for squad hacks licenses on squadhacks.net.",
					h1: "Privacy Policy",
					intro: "How Squad Hacks handles information when you browse squadhacks.net or contact support about a Squad license.",
					imageAlt: "Squad Hacks privacy policy page",
					galleryTitle: "Squad Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Squad Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@squadhacks.net with your request details.",
								"Policy updates publish on this page. Continued use of squadhacks.net after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Squad Hacks",
					description: "Refund policy for Squad Hacks. Digital delivery terms and eligibility for squad hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Squad Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Squad.",
					imageAlt: "Squad Hacks refund policy page",
					galleryTitle: "Squad Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Squad Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@squadhacks.net with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Squad Hacks Rules",
					description: "Terms of use for squadhacks.net and Squad Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of squadhacks.net and Squad Hacks licenses for Squad on Windows PC.",
					imageAlt: "Squad Hacks terms of use page",
					galleryTitle: "Squad Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Squad Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Squad on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Squad may violate Offworld Industries terms and result in account penalties. Squad Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/squad-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@squadhacks.net for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/squad-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Squad indetectables",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para Squad en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Squad PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Squad Hacks está activo para Squad en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Squad",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Squad Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Squad — checkout en Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Squad indetectables para Squad en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital",
					h1: "Squad Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Squad en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galería Squad Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Squad Hacks en 2026",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Cajas de jugador y wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Controles soft aim",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Funciones.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Precios.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Instalación.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Actualizaciones.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Soporte.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Trucos indetectables.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | Visibilidad ESP",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Squad 2026 | Guía del comprador",
					description: "Trucos Squad 2026: 2026 Squad hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Squad 2026",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Trucos Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Trucos Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Trucos Squad 2026",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. 2026 Squad hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Squad | Guía ESP y Aimbot",
					description: "Trucos Squad: the Squad hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Trucos Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Squad Hacks | Acceso instantáneo",
					description: "Descarga Squad Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Squad Hacks",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Descarga Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Descarga Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Squad Hacks",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Squad | Controles en partida",
					description: "Menú mod Squad: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Menú mod Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Menú mod Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Ajustes soft aim",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Squad | Lista de compra",
					description: "Mejores trucos Squad: what to compare before buying Squad hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Mejores trucos Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Mejores trucos Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. what to compare before buying Squad hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Asistencia soft aim",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. undetected Aimbot hack assist for Squad.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Cajas y loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | Qué significa",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Squad Hacks",
					description: "Política de privacidad for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Política de privacidad for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Squad Hacks",
					description: "Política de reembolso for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Política de reembolso for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Squad Hacks",
					description: "Términos de uso for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Términos de uso for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Squad Hacks ofrece ESP wallhack, radar hack y squad aimbot indetectables para Squad en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@squadhacks.net para solicitudes legales o de soporte.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Squad indétectables",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Squad sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Squad PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Squad Hacks est actif pour Squad sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Squad",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Squad Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Squad indétectables pour Squad sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison",
					h1: "Squad Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Squad sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galerie Squad Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Squad Hacks en 2026",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Boîtes joueur et wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Contrôles soft aim",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Fonctions.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Tarifs.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Installation.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: Easy Anti-Cheat patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Mises à jour.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Support.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Triches indétectables.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | Visibilité ESP",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Squad 2026 | Guide acheteur",
					description: "Triches Squad 2026: 2026 Squad hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Squad 2026",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Triches Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Triches Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Triches Squad 2026",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. 2026 Squad hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Squad | Guide ESP et Aimbot",
					description: "Triches Squad: the Squad hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Triches Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Squad Hacks | Accès instantané",
					description: "Téléchargement Squad Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Squad Hacks",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Téléchargement Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Téléchargement Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Squad Hacks",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Squad | Contrôles en jeu",
					description: "Menu mod Squad: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Menu mod Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Menu mod Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Réglages soft aim",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Squad | Checklist acheteur",
					description: "Meilleures triches Squad: what to compare before buying Squad hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Meilleures triches Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Meilleures triches Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. what to compare before buying Squad hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Assistance soft aim",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. undetected Aimbot hack assist for Squad.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boîtes et loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | Ce que ça signifie",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acheter Squad Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Squad Hacks",
					description: "Politique de confidentialité for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Politique de confidentialité for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Squad Hacks",
					description: "Politique de remboursement for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Politique de remboursement for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Squad Hacks",
					description: "Conditions d'utilisation for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Conditions d'utilisation for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Squad Hacks combine ESP wallhack, radar hack et squad aimbot indétectables pour Squad sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@squadhacks.net pour le support ou les demandes légales.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Squad Hacks",
					accentShort: "Squad Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Squad auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Squad PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Squad Hacks Paket ist live für Squad auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Squad Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Squad — Checkout über Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Squad Hacks für Squad auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Squad: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Squad Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Squad Hacks 2026 führt",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Spielerboxen & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft-Aim Steuerung",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Features.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Preise.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Setup.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Updates.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Support.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Undetected Cheats.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Sichtbarkeit",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Käuferleitfaden",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. 2026 Squad hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Sofortzugang",
					description: "Squad Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod-Menü | In-Game Toggles",
					description: "Squad Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Mod-Menü",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Mod-Menü.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod-Menü",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod-Menü",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Soft-Aim Einstellungen",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Squad Hacks | Käufer-Checkliste",
					description: "Beste Squad Hacks: what to compare before buying Squad hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Squad Hacks",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Beste Squad Hacks.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Beste Squad Hacks",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Squad Hacks",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. what to compare before buying Squad hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack | Soft-Aim Assist",
					description: "Squad Aimbot Hack: undetected Aimbot hack assist for Squad. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Aimbot Hack",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Aimbot Hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hack",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. undetected Aimbot hack assist for Squad.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hack | Boxen & Loot",
					description: "Squad ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad ESP Hack",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad ESP Hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hack",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | Was es bedeutet",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@squadhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Squad Hacks",
					description: "Datenschutz for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Datenschutz for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@squadhacks.net für Support und rechtliche Anfragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Squad Hacks",
					description: "Rückerstattung for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Rückerstattung for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@squadhacks.net für Support und rechtliche Anfragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Squad Hacks",
					description: "Nutzungsbedingungen for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Nutzungsbedingungen for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Squad Hacks bündelt ESP wallhack, radar hack und squad aimbot als undetected Paket für Squad auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@squadhacks.net für Support und rechtliche Anfragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Squad indetectáveis",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para Squad no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Squad PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Squad Hacks está ativo para Squad no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Squad",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Squad Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Squad indetectáveis para Squad no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital",
					h1: "Squad Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Squad no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galeria Squad Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Squad Hacks em 2026",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Caixas de jogador e wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Controles soft aim",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Recursos.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Preços.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Instalação.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Atualizações.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Suporte.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Cheats indetectáveis.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | Visibilidade ESP",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Squad 2026 | Guia do comprador",
					description: "Cheats Squad 2026: 2026 Squad hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Squad 2026",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Cheats Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheats Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheats Squad 2026",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. 2026 Squad hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Squad | Guia ESP e Aimbot",
					description: "Cheats Squad: the Squad hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Cheats Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Squad Hacks | Acesso instantâneo",
					description: "Download Squad Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Squad Hacks",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Download Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Download Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Squad Hacks",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Squad | Controles in-game",
					description: "Menu mod Squad: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Menu mod Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Menu mod Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Ajustes soft aim",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Squad | Checklist do comprador",
					description: "Melhores cheats Squad: what to compare before buying Squad hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Melhores cheats Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Melhores cheats Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. what to compare before buying Squad hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Assistência soft aim",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. undetected Aimbot hack assist for Squad.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Caixas e loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | O que significa",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Comprar Squad Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@squadhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Squad Hacks",
					description: "Política de privacidade for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Política de privacidade for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@squadhacks.net para suporte ou questões legais.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Squad Hacks",
					description: "Política de reembolso for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Política de reembolso for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@squadhacks.net para suporte ou questões legais.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Squad Hacks",
					description: "Termos de uso for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Termos de uso for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks reúne ESP wallhack, radar hack e squad aimbot indetectáveis para Squad no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@squadhacks.net para suporte ou questões legais.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Squad indetectable",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per Squad su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Squad PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Squad Hacks è attivo per Squad su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Squad",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Squad Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Squad indetectable per Squad su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale",
					h1: "Squad Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Squad su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galleria Squad Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Squad Hacks nel 2026",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Box giocatore e wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Controlli soft aim",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Funzioni.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Prezzi.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Setup.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: Easy Anti-Cheat patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Aggiornamenti.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Supporto.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Cheat indetectable.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | Visibilità ESP",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Squad 2026 | Guida acquirente",
					description: "Cheat Squad 2026: 2026 Squad hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Squad 2026",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Cheat Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheat Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat Squad 2026",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. 2026 Squad hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Squad | Guida ESP e Aimbot",
					description: "Cheat Squad: the Squad hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Cheat Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Squad Hacks | Accesso istantaneo",
					description: "Download Squad Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Squad Hacks",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Download Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Download Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Squad Hacks",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Squad | Toggle in-game",
					description: "Mod menu Squad: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Mod menu Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Mod menu Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Impostazioni soft aim",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Squad | Checklist acquirente",
					description: "Migliori cheat Squad: what to compare before buying Squad hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Migliori cheat Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Migliori cheat Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. what to compare before buying Squad hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Assist soft aim",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. undetected Aimbot hack assist for Squad.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Box e loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | Cosa significa",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Acquista Squad Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@squadhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Squad Hacks",
					description: "Informativa privacy for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Informativa privacy for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@squadhacks.net per supporto o richieste legali.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Squad Hacks",
					description: "Politica di rimborso for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Politica di rimborso for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@squadhacks.net per supporto o richieste legali.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Squad Hacks",
					description: "Termini di utilizzo for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Termini di utilizzo for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks unisce ESP wallhack, radar hack e squad aimbot indetectable per Squad su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@squadhacks.net per supporto o richieste legali.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Squad Hacks",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Squad op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Squad PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Squad Hacks pakket is live voor Squad op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback va Squad Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Squad hacks voor Squad op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Squad: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Squad Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Squad Hacks in 2026",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Functies.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Prijzen.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Setup.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Updates.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Support.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Undetected Cheats.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. 2026 Squad hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Instant Access",
					description: "Squad Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod Menu | In-Game Toggles",
					description: "Squad Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Mod Menu",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Mod Menu.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod Menu",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod Menu",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Squad Hacks | Buyer Checklist",
					description: "Beste Squad Hacks: what to compare before buying Squad hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Squad Hacks",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Beste Squad Hacks.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Beste Squad Hacks",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Squad Hacks",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. what to compare before buying Squad hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack | Soft Aim Assist",
					description: "Squad Aimbot Hack: undetected Aimbot hack assist for Squad. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Aimbot Hack",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Aimbot Hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hack",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. undetected Aimbot hack assist for Squad.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hack | Boxes & Loot",
					description: "Squad ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Squad ESP Hack",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad ESP Hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hack",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@squadhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Squad Hacks",
					description: "Privacybeleid for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Privacybeleid for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net voor support en juridische vragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Squad Hacks",
					description: "Restitutiebeleid for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Restitutiebeleid for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net voor support en juridische vragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Squad Hacks",
					description: "Gebruiksvoorwaarden for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Gebruiksvoorwaarden for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks bundelt ESP wallhack, radar hack en squad aimbot als undetected pakket voor Squad op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net voor support en juridische vragen.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Squad",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do Squad na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Squad PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Squad Hacks jest aktywny dla Squad na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Squad",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Squad Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Squad — checkout przez Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Squad dla Squad na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa",
					h1: "Squad Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Squad na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galeria Squad Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Squad Hacks w 2026",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Funkcje.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Cennik.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Instalacja.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: Easy Anti-Cheat patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Aktualizacje.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Wsparcie.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Cheaty undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Squad 2026 | Buyer Guide",
					description: "Cheaty Squad 2026: 2026 Squad hacks checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Squad 2026",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Cheaty Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheaty Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheaty Squad 2026",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. 2026 Squad hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Squad | ESP Aimbot Guide",
					description: "Cheaty Squad: the Squad hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Cheaty Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Squad Hacks | Instant Access",
					description: "Pobieranie Squad Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Squad Hacks",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Pobieranie Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Pobieranie Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Squad Hacks",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Squad | In-Game Toggles",
					description: "Mod menu Squad: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Mod menu Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Mod menu Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Squad | Buyer Checklist",
					description: "Najlepsze cheaty Squad: what to compare before buying Squad hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Najlepsze cheaty Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Najlepsze cheaty Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. what to compare before buying Squad hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Soft Aim Assist",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. undetected Aimbot hack assist for Squad.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boxes & Loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Kup Squad Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Squad Hacks",
					description: "Polityka prywatności for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Polityka prywatności for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Squad Hacks",
					description: "Polityka zwrotów for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Polityka zwrotów for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Squad Hacks",
					description: "Warunki użytkowania for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Warunki użytkowania for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks łączy ESP wallhack, radar hack i squad aimbot jako pakiet undetected dla Squad na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Squad",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для Squad на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Squad PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Squad Hacks активен для Squad на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Squad Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Squad — оплата через Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Squad для Squad на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая",
					h1: "Squad Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Squad на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Галерея Squad Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Squad Hacks в 2026",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Боксы игроков и wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Управление soft aim",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Функции.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Цены.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Установка.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: Easy Anti-Cheat patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Обновления.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Поддержка.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Undetected читы.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | Видимость ESP",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Squad 2026 | Гайд покупателя",
					description: "Читы Squad 2026: 2026 Squad hacks checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Squad 2026",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Читы Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Читы Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Читы Squad 2026",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. 2026 Squad hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Squad | Гайд ESP и Aimbot",
					description: "Читы Squad: the Squad hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Читы Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Squad Hacks | Мгновенный доступ",
					description: "Скачать Squad Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Squad Hacks",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Скачать Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Скачать Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Squad Hacks",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Squad | Игровые переключатели",
					description: "Мод-меню Squad: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Мод-меню Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Мод-меню Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Настройки soft aim",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Squad | Чеклист покупателя",
					description: "Лучшие читы Squad: what to compare before buying Squad hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Лучшие читы Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Лучшие читы Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. what to compare before buying Squad hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Squad | Soft aim ассист",
					description: "Хак aimbot Squad: undetected Aimbot hack assist for Squad. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Хак aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. undetected Aimbot hack assist for Squad.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Squad | Боксы и лут",
					description: "Хак ESP Squad: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Хак ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Хак ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Хак ESP Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | Что это значит",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купить Squad Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@squadhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Squad Hacks",
					description: "Политика конфиденциальности for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Политика конфиденциальности for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net для поддержки и юридических вопросов.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Squad Hacks",
					description: "Политика возврата for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Политика возврата for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net для поддержки и юридических вопросов.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Squad Hacks",
					description: "Условия использования for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Условия использования for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks объединяет ESP wallhack, radar hack и squad aimbot в undetected пакете для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net для поддержки и юридических вопросов.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Squad hileleri",
					accentShort: "Squad Hacks",
					subtitle: "Squad Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Squad PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Squad Hacks paketi Squad Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Squad Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Squad için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "Squad için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "Squad Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "Squad Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Squad Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Squad Hacks",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and Easy Anti-Cheat questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. SSS.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Destek.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: undetected maintenance after Easy Anti-Cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: how Easy Anti-Cheat updates are handled for Squad hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Easy Anti-Cheat bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hileleri 2026 | Buyer Guide",
					description: "Squad Hileleri 2026: 2026 Squad hacks checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Hileleri 2026",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Hileleri 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hileleri 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hileleri 2026",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. 2026 Squad hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hileleri | ESP Aimbot Guide",
					description: "Squad Hileleri: the Squad hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Hileleri",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Hileleri.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hileleri",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hileleri",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. the Squad hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Hile İndir | Instant Access",
					description: "Squad Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Hile İndir",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Hile İndir.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Hile İndir",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Hile İndir",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod Menü | In-Game Toggles",
					description: "Squad Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Mod Menü",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Mod Menü.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod Menü",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod Menü",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Squad Hileleri | Buyer Checklist",
					description: "En İyi Squad Hileleri: what to compare before buying Squad hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Squad Hileleri",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. En İyi Squad Hileleri.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "En İyi Squad Hileleri",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Squad Hileleri",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. what to compare before buying Squad hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hilesi | Soft Aim Assist",
					description: "Squad Aimbot Hilesi: undetected Aimbot hack assist for Squad. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Aimbot Hilesi",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Aimbot Hilesi.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hilesi",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hilesi",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. undetected Aimbot hack assist for Squad.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hilesi | Boxes & Loot",
					description: "Squad ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad ESP Hilesi",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad ESP Hilesi.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hilesi",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hilesi",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@squadhacks.net.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Squad Hacks",
					description: "Gizlilik politikası for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Gizlilik politikası for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@squadhacks.net.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Squad Hacks",
					description: "İade politikası for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. İade politikası for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@squadhacks.net.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Squad Hacks",
					description: "Kullanım şartları for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Kullanım şartları for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks, Squad için Windows PC üzerinde ESP wallhack, radar hack ve squad aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@squadhacks.net.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Squad غير مكتشف",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Squad على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Squad PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Squad Hacks نشطة لـ Squad على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Squad Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Squad — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش Squad undetected لـ Squad على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "Squad Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Squad على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "معرض Squad Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Squad Hacks في 2026",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. الميزات.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. الأسعار.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. التثبيت.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: Easy Anti-Cheat patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. التحديثات.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. الأسئلة.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. الدعم.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: undetected maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. غش undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Squad 2026 | Buyer Guide",
					description: "غش Squad 2026: 2026 Squad hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Squad 2026",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. غش Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "غش Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "غش Squad 2026",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. 2026 Squad hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Squad | ESP Aimbot Guide",
					description: "غش Squad: the Squad hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. غش Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Squad Hacks | Instant Access",
					description: "تحميل Squad Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Squad Hacks",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. تحميل Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "تحميل Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Squad Hacks",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Squad | In-Game Toggles",
					description: "قائمة مود Squad: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. قائمة مود Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "قائمة مود Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Squad | Buyer Checklist",
					description: "أفضل غش Squad: what to compare before buying Squad hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. أفضل غش Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "أفضل غش Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. what to compare before buying Squad hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Squad | Soft Aim Assist",
					description: "هاك Aimbot Squad: undetected Aimbot hack assist for Squad. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. هاك Aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. undetected Aimbot hack assist for Squad.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Squad | Boxes & Loot",
					description: "هاك ESP Squad: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. هاك ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "هاك ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "هاك ESP Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "اشترِ Squad Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@squadhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Squad Hacks",
					description: "سياسة الخصوصية for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. سياسة الخصوصية for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@squadhacks.net للدعم والطلبات القانونية.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Squad Hacks",
					description: "سياسة الاسترداد for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. سياسة الاسترداد for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@squadhacks.net للدعم والطلبات القانونية.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Squad Hacks",
					description: "شروط الاستخدام for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. شروط الاستخدام for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Squad Hacks يجمع ESP wallhack وradar hack وsquad aimbot غير مكتشف لـ Squad على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@squadhacks.net للدعم والطلبات القانونية.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Squadチート",
					accentShort: "Squad Hacks",
					subtitle: "Squad Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Squad PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Squad HacksパッケージはSquad Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Squad Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Squad向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "Squad向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "Squad Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "Squad Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "Squad hacks hero ESP aimbot wallhack",
					galleryTitle: "Squad Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にSquad Hacksを選ぶ理由",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。機能.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。料金.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。更新.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: undetected maintenance after Easy Anti-Cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。2026 Squad hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。the Squad hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Instant Access",
					description: "Squad Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod Menu | In-Game Toggles",
					description: "Squad Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Mod Menu",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Mod Menu.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod Menu",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod Menu",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Squadチート | Buyer Checklist",
					description: "最強Squadチート: what to compare before buying Squad hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Squadチート",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。最強Squadチート.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "最強Squadチート",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Squadチート",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。what to compare before buying Squad hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack | Soft Aim Assist",
					description: "Squad Aimbot Hack: undetected Aimbot hack assist for Squad. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Aimbot Hack",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Aimbot Hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hack",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。undetected Aimbot hack assist for Squad.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hack | Boxes & Loot",
					description: "Squad ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad ESP Hack",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad ESP Hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hack",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@squadhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Squad Hacks",
					description: "プライバシーポリシー for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。プライバシーポリシー for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Squad Hacks",
					description: "返金ポリシー for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。返金ポリシー for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Squad Hacks",
					description: "利用規約 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。利用規約 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Squad HacksはSquad向けWindows PC用ESP wallhack、radar hack、squad aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Squad 치트",
					accentShort: "Squad Hacks",
					subtitle: "Squad Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Squad PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Squad Hacks 패키지는 Squad Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Squad Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Squad용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "Squad undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "Squad Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "Squad Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "Squad hacks hero ESP aimbot wallhack",
					galleryTitle: "Squad Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Squad Hacks를 선택하는 이유",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: undetected maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 2026 Squad hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. the Squad hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Instant Access",
					description: "Squad Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad 모드 메뉴 | In-Game Toggles",
					description: "Squad 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad 모드 메뉴",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad 모드 메뉴.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad 모드 메뉴",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad 모드 메뉴",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Squad 치트 | Buyer Checklist",
					description: "최고의 Squad 치트: what to compare before buying Squad hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Squad 치트",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 최고의 Squad 치트.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "최고의 Squad 치트",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Squad 치트",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. what to compare before buying Squad hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad 에임봇 핵 | Soft Aim Assist",
					description: "Squad 에임봇 핵: undetected Aimbot hack assist for Squad. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad 에임봇 핵",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad 에임봇 핵.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad 에임봇 핵",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad 에임봇 핵",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. undetected Aimbot hack assist for Squad.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP 핵 | Boxes & Loot",
					description: "Squad ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad ESP 핵",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad ESP 핵.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP 핵",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP 핵",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@squadhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Squad Hacks",
					description: "개인정보 처리방침 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 개인정보 처리방침 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Squad Hacks",
					description: "환불 정책 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 환불 정책 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Squad Hacks",
					description: "이용 약관 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. 이용 약관 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks는 Squad Windows PC용 ESP wallhack, radar hack, squad aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Squad作弊",
					accentShort: "Squad Hacks",
					subtitle: "适用于Squad Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "Squad PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Squad Hacks套餐已在Squad Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Squad Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Squad undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "Squad undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "Squad Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "Squad Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "Squad hacks hero ESP aimbot wallhack",
					galleryTitle: "Squad Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Squad Hacks的原因",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。player boxes, HAB and vehicle markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。功能.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。价格.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。安装.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。更新.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Easy Anti-Cheat patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。常见问题.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。支持.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: undetected maintenance after Easy Anti-Cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。undetected maintenance after Easy Anti-Cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。how Easy Anti-Cheat updates are handled for Squad hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad作弊 2026 | Buyer Guide",
					description: "Squad作弊 2026: 2026 Squad hacks checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Squad作弊 2026",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad作弊 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad作弊 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad作弊 2026",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。2026 Squad hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Squad作弊 | ESP Aimbot Guide",
					description: "Squad作弊: the Squad hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Squad作弊",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad作弊.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad作弊",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad作弊",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。the Squad hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad作弊下载 | Instant Access",
					description: "Squad作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Squad作弊下载",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad作弊下载.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad作弊下载",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad作弊下载",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad修改菜单 | In-Game Toggles",
					description: "Squad修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Squad修改菜单",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad修改菜单.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad修改菜单",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad修改菜单",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Squad作弊 | Buyer Checklist",
					description: "最佳Squad作弊: what to compare before buying Squad hacks. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Squad作弊",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。最佳Squad作弊.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "最佳Squad作弊",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Squad作弊",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。what to compare before buying Squad hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad自瞄外挂 | Soft Aim Assist",
					description: "Squad自瞄外挂: undetected Aimbot hack assist for Squad. 即时数字交付. undetected — Windows PC.",
					h1: "Squad自瞄外挂",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad自瞄外挂.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad自瞄外挂",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad自瞄外挂",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。undetected Aimbot hack assist for Squad.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP外挂 | Boxes & Loot",
					description: "Squad ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Squad ESP外挂",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad ESP外挂.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP外挂",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP外挂",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "购买 Squad Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@squadhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Squad Hacks",
					description: "隐私政策 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。隐私政策 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Squad Hacks",
					description: "退款政策 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。退款政策 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Squad Hacks",
					description: "使用条款 for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。使用条款 for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks为SquadWindows PC提供ESP wallhack、radar hack和squad aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Squad hacks",
					accentShort: "Squad Hacks",
					subtitle: "Squad Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "Squad PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Squad Hacks पैकेज Squad Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Squad Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Squad के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "Squad undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "Squad Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "Squad Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "Squad hacks hero ESP aimbot wallhack",
					galleryTitle: "Squad Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Squad Hacks क्यों",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। 2026 Squad hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। the Squad hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Instant Access",
					description: "Squad Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod Menu | In-Game Toggles",
					description: "Squad Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Mod Menu",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Mod Menu.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod Menu",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod Menu",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Squad Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ Squad Hacks: what to compare before buying Squad hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Squad Hacks",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Squad Hacks.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "सर्वश्रेष्ठ Squad Hacks",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Squad Hacks",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। what to compare before buying Squad hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack | Soft Aim Assist",
					description: "Squad Aimbot Hack: undetected Aimbot hack assist for Squad. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Aimbot Hack",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Aimbot Hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hack",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Squad.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hack | Boxes & Loot",
					description: "Squad ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad ESP Hack",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad ESP Hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hack",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Squad Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@squadhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Squad Hacks",
					description: "गोपनीयता नीति for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। गोपनीयता नीति for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Squad Hacks",
					description: "रिफंड नीति for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। रिफंड नीति for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Squad Hacks",
					description: "उपयोग की शर्तें for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। उपयोग की शर्तें for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks Squad के लिए Windows PC पर ESP wallhack, radar hack और squad aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@squadhacks.net",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Squad undetected",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Squad di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Squad PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Squad Hacks aktif untuk Squad di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Squad Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Squad undetected untuk Squad di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Squad di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galeri Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Squad Hacks di 2026",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Fitur.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Harga.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Setup.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: Easy Anti-Cheat patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Pembaruan.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Dukungan.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Cheat undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Squad 2026 | Buyer Guide",
					description: "Cheat Squad 2026: 2026 Squad hacks checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Squad 2026",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Cheat Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheat Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat Squad 2026",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. 2026 Squad hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Squad | ESP Aimbot Guide",
					description: "Cheat Squad: the Squad hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Cheat Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Squad | Instant Access",
					description: "Download Cheat Squad: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Download Cheat Squad.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Download Cheat Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Squad | In-Game Toggles",
					description: "Menu mod Squad: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Menu mod Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Menu mod Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Squad terbaik | Buyer Checklist",
					description: "Cheat Squad terbaik: what to compare before buying Squad hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Squad terbaik",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Cheat Squad terbaik.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Cheat Squad terbaik",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Squad terbaik",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. what to compare before buying Squad hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Soft Aim Assist",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. undetected Aimbot hack assist for Squad.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boxes & Loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Beli Squad Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@squadhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Squad Hacks",
					description: "Kebijakan privasi for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Kebijakan privasi for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net untuk dukungan dan legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Squad Hacks",
					description: "Kebijakan refund for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Kebijakan refund for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net untuk dukungan dan legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Squad Hacks",
					description: "Syarat penggunaan for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Syarat penggunaan for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks menyediakan ESP wallhack, radar hack, dan squad aimbot undetected untuk Squad di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net untuk dukungan dan legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Squad hacks ไม่ถูกตรวจจับ",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Squad บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Squad PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Squad Hacks พร้อมใช้งานสำหรับ Squad บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Squad Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Squad — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Squad undetected สำหรับ Squad บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Squad Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Squad บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "แกลเลอรี Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Squad Hacks ปี 2026",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC player boxes, HAB and vehicle markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ฟีเจอร์.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ราคา.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ติดตั้ง.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: Easy Anti-Cheat patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC อัปเดต.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Easy Anti-Cheat patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC สนับสนุน.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Cheats undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC undetected maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC how Easy Anti-Cheat updates are handled for Squad hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC 2026 Squad hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC the Squad hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Squad Hacks | Instant Access",
					description: "ดาวน์โหลด Squad Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Squad Hacks",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ดาวน์โหลด Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Squad Hacks",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Squad | In-Game Toggles",
					description: "เมนูมอด Squad: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Squad",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC เมนูมอด Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "เมนูมอด Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Squad",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Squad ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Squad ที่ดีที่สุด: what to compare before buying Squad hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Squad ที่ดีที่สุด",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Cheat Squad ที่ดีที่สุด.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Cheat Squad ที่ดีที่สุด",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Squad ที่ดีที่สุด",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC what to compare before buying Squad hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Squad | Soft Aim Assist",
					description: "Hack Aimbot Squad: undetected Aimbot hack assist for Squad. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Squad",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Hack Aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Squad",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC undetected Aimbot hack assist for Squad.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boxes & Loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "ซื้อ Squad Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@squadhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Squad Hacks",
					description: "นโยบายความเป็นส่วนตัว for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC นโยบายความเป็นส่วนตัว for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net สำหรับการสนับสนุน",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Squad Hacks",
					description: "นโยบายการคืนเงิน for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC นโยบายการคืนเงิน for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net สำหรับการสนับสนุน",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Squad Hacks",
					description: "ข้อกำหนดการใช้งาน for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC ข้อกำหนดการใช้งาน for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks รวม ESP wallhack, radar hack และ squad aimbot แบบ undetected สำหรับ Squad บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net สำหรับการสนับสนุน",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Squad undetected",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Squad trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Squad PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Squad Hacks đang hoạt động cho Squad trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Squad Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Squad — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Squad undetected cho Squad trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Squad trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Thư viện Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Tính năng.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Giá.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cài đặt.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: Easy Anti-Cheat patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cập nhật.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Hỗ trợ.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cheat undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Squad 2026 | Buyer Guide",
					description: "Cheat Squad 2026: 2026 Squad hacks checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Squad 2026",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cheat Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheat Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheat Squad 2026",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. 2026 Squad hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Squad | ESP Aimbot Guide",
					description: "Cheat Squad: the Squad hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cheat Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Squad | Instant Access",
					description: "Tải Cheat Squad: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Tải Cheat Squad.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Squad | In-Game Toggles",
					description: "Mod menu Squad: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Mod menu Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Mod menu Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Squad tốt nhất | Buyer Checklist",
					description: "Cheat Squad tốt nhất: what to compare before buying Squad hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Squad tốt nhất",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Cheat Squad tốt nhất.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Cheat Squad tốt nhất",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Squad tốt nhất",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. what to compare before buying Squad hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Soft Aim Assist",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. undetected Aimbot hack assist for Squad.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boxes & Loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Mua Squad Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Squad Hacks",
					description: "Chính sách bảo mật for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Chính sách bảo mật for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Squad Hacks",
					description: "Chính sách hoàn tiền for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Chính sách hoàn tiền for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Squad Hacks",
					description: "Điều khoản sử dụng for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Điều khoản sử dụng for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks cung cấp ESP wallhack, radar hack và squad aimbot undetected cho Squad trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Squad",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для Squad на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Squad PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Squad Hacks активний для Squad на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Squad Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Squad — оплата через Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Squad для Squad на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая",
					h1: "Squad Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Squad на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Галерея Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Squad Hacks у 2026",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Функції.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Ціни.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Встановлення.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: Easy Anti-Cheat patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Оновлення.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Підтримка.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Undetected чіти.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Squad 2026 | Buyer Guide",
					description: "Чіти Squad 2026: 2026 Squad hacks checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Squad 2026",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Чіти Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Чіти Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Чіти Squad 2026",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. 2026 Squad hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Squad | ESP Aimbot Guide",
					description: "Чіти Squad: the Squad hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Чіти Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Squad Hacks | Instant Access",
					description: "Завантаження Squad Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Squad Hacks",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Завантаження Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Завантаження Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Squad Hacks",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Squad | In-Game Toggles",
					description: "Мод-меню Squad: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Мод-меню Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Мод-меню Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Squad | Buyer Checklist",
					description: "Найкращі чіти Squad: what to compare before buying Squad hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Найкращі чіти Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Найкращі чіти Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. what to compare before buying Squad hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Squad | Soft Aim Assist",
					description: "Хак aimbot Squad: undetected Aimbot hack assist for Squad. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Хак aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. undetected Aimbot hack assist for Squad.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Squad | Boxes & Loot",
					description: "Хак ESP Squad: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Хак ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Хак ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Хак ESP Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Купити Squad Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@squadhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Squad Hacks",
					description: "Політика конфіденційності for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Політика конфіденційності for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net для підтримки та правових питань.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Squad Hacks",
					description: "Політика повернення for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Політика повернення for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net для підтримки та правових питань.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Squad Hacks",
					description: "Умови використання for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Умови використання for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks об'єднує ESP wallhack, radar hack і squad aimbot у undetected пакеті для Squad на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net для підтримки та правових питань.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Squad hacky",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Squad na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Squad PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Squad Hacks je aktivní pro Squad na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Squad Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Squad — checkout přes Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Squad hacky pro Squad na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "Squad Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Squad na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galerie Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Squad Hacks v roce 2026",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Funkce.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Ceny.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Instalace.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: Easy Anti-Cheat patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Aktualizace.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Podpora.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Undetected cheaty.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad hacky 2026 | Buyer Guide",
					description: "Squad hacky 2026: 2026 Squad hacks checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad hacky 2026",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad hacky 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad hacky 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad hacky 2026",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. 2026 Squad hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Squad hacky | ESP Aimbot Guide",
					description: "Squad hacky: the Squad hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad hacky",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad hacky.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad hacky",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad hacky",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Squad Hacks | Instant Access",
					description: "Stáhnout Squad Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Squad Hacks",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Stáhnout Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Stáhnout Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Squad Hacks",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad mod menu | In-Game Toggles",
					description: "Squad mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad mod menu",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad mod menu.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad mod menu",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad mod menu",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Squad hacky | Buyer Checklist",
					description: "Nejlepší Squad hacky: what to compare before buying Squad hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Squad hacky",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Nejlepší Squad hacky.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Nejlepší Squad hacky",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Squad hacky",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. what to compare before buying Squad hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad aimbot hack | Soft Aim Assist",
					description: "Squad aimbot hack: undetected Aimbot hack assist for Squad. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad aimbot hack",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad aimbot hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad aimbot hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad aimbot hack",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. undetected Aimbot hack assist for Squad.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP hack | Boxes & Loot",
					description: "Squad ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad ESP hack",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad ESP hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP hack",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Koupit Squad Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@squadhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Squad Hacks",
					description: "Zásady ochrany soukromí for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Zásady ochrany soukromí for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net pro podporu a právní dotazy.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Squad Hacks",
					description: "Zásady vrácení peněz for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Zásady vrácení peněz for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net pro podporu a právní dotazy.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Squad Hacks",
					description: "Podmínky použití for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Podmínky použití for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks spojuje ESP wallhack, radar hack a squad aimbot jako undetected balíček pro Squad na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net pro podporu a právní dotazy.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Squad undetected",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Squad pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Squad PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Squad Hacks este activ pentru Squad pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Squad Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Squad undetected pentru Squad pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală",
					h1: "Squad Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Squad pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Galerie Squad Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Squad Hacks în 2026",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"squad-esp": {
					title: "ESP Squad | Player Boxes & Wallhack",
					description: "ESP Squad: player boxes, HAB and vehicle markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. ESP Squad.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "ESP Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Aimbot Squad | Soft Aim Controls",
					description: "Aimbot Squad: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Aimbot Squad.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Aimbot Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Funcții.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Prețuri.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Instalare.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: Easy Anti-Cheat patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Actualizări.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Suport.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Cheats undetected.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Squad | ESP Visibility",
					description: "Wallhack Squad: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Wallhack Squad.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Wallhack Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Radar hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Squad hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Squad 2026 | Buyer Guide",
					description: "Cheats Squad 2026: 2026 Squad hacks checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Squad 2026",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Cheats Squad 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Cheats Squad 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Cheats Squad 2026",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. 2026 Squad hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Squad | ESP Aimbot Guide",
					description: "Cheats Squad: the Squad hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Cheats Squad.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Squad",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. the Squad hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Squad Hacks | Instant Access",
					description: "Descărcare Squad Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Squad Hacks",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Descărcare Squad Hacks.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Descărcare Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Squad Hacks",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Squad | In-Game Toggles",
					description: "Meniu mod Squad: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Meniu mod Squad.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Meniu mod Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Squad | Smooth Aim Settings",
					description: "Soft aim Squad: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Soft aim Squad.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Soft aim Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Squad | Buyer Checklist",
					description: "Cele mai bune cheats Squad: what to compare before buying Squad hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Cele mai bune cheats Squad.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Cele mai bune cheats Squad",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. what to compare before buying Squad hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Squad | Soft Aim Assist",
					description: "Hack aimbot Squad: undetected Aimbot hack assist for Squad. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Hack aimbot Squad.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Squad",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. undetected Aimbot hack assist for Squad.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Squad | Boxes & Loot",
					description: "Hack ESP Squad: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Hack ESP Squad.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Hack ESP Squad",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Hack ESP Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Squad | What It Means",
					description: "Unlock all Squad: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Squad",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Unlock all Squad.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Unlock all Squad",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Cumpără Squad Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Squad",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@squadhacks.net pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Squad Hacks",
					description: "Politica de confidențialitate for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Politica de confidențialitate for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net pentru suport și legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Squad Hacks",
					description: "Politica de rambursare for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Politica de rambursare for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net pentru suport și legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Squad Hacks",
					description: "Termeni de utilizare for Squad Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Termeni de utilizare for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks combină ESP wallhack, radar hack și squad aimbot undetected pentru Squad pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net pentru suport și legal.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Squad hacks",
					accentShort: "Squad Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för Squad på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Squad PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Squad Hacks-paketet är live för Squad på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "Squad Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Squad",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Squad Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Squad — checkout via Zadeyo.",
				},
				images: {
					hero: "Squad Hacks hero — ESP and aimbot overlay in Squad",
					espWallhack: "Wallhack outlines showing infantry and vehicles through walls",
					aimbotCombat: "Soft aim assist overlay during a Squad raid",
					squadFight: "Squad Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Squad raid",
					headerArt: "Aimbot view and bone priority controls for Squad",
					cheatsPackage: "2D radar threat overlay for Squad",
					rebootFight: "Aimbot assist during a Squad firefight",
					battleRoyale: "Squad Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and rally points in Squad",
				},
			},
			pages: {
				home: {
					title: "Squad Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Squad hacks för Squad på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "Squad Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Squad på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "Squad ESP player tags hack",
					galleryTitle: "Squad Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"squad-esp": {
					title: "Squad ESP | Player Boxes & Wallhack",
					description: "Squad ESP: player boxes, HAB and vehicle markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad ESP",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad ESP.",
					imageAlt: "Squad ESP player boxes and distance readouts in a raid",
					galleryTitle: "Squad ESP",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad ESP",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. player boxes, HAB and vehicle markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"squad-aimbot": {
					title: "Squad Aimbot | Soft Aim Controls",
					description: "Squad Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Aimbot",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Aimbot.",
					imageAlt: "Squad aimbot and soft aim controls on Windows PC",
					galleryTitle: "Squad Aimbot",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Aimbot",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Funktioner.",
					imageAlt: "Squad Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Priser.",
					imageAlt: "Squad Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Installation.",
					imageAlt: "Squad Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Uppdateringar.",
					imageAlt: "Squad Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. FAQ.",
					imageAlt: "Squad Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Support.",
					imageAlt: "Squad Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Undetected cheats.",
					imageAlt: "Squad Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Squad Wallhack | ESP Visibility",
					description: "Squad Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Wallhack",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Wallhack.",
					imageAlt: "Squad wallhack visibility through walls in a raid",
					galleryTitle: "Squad Wallhack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad Wallhack",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Radar Hack.",
					imageAlt: "Squad 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Squad hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Squad Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. how Easy Anti-Cheat updates are handled for Squad hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Squad Hacks 2026 | Buyer Guide",
					description: "Squad Hacks 2026: 2026 Squad hacks checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Hacks 2026",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Hacks 2026.",
					imageAlt: "Squad Hacks product overview for Squad",
					galleryTitle: "Squad Hacks 2026",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-hacks/",
					sections: [
						{
							h2: "Squad Hacks 2026",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. 2026 Squad hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Squad Hacks | ESP Aimbot Guide",
					description: "Squad Hacks: the Squad hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Hacks",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Hacks.",
					imageAlt: "Squad Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Squad Hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Hacks",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. the Squad hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Squad Cheat Download | Instant Access",
					description: "Squad Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Cheat Download",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Cheat Download.",
					imageAlt: "Squad Hacks download and install delivery flow",
					galleryTitle: "Squad Cheat Download",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Squad Cheat Download",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Squad Mod-meny | In-Game Toggles",
					description: "Squad Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Mod-meny",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Mod-meny.",
					imageAlt: "Squad Hacks in-game menu controls",
					galleryTitle: "Squad Mod-meny",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Mod-meny",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Squad Soft Aim | Smooth Aim Settings",
					description: "Squad Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Soft Aim",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Soft Aim.",
					imageAlt: "Squad soft aim FOV and smoothness settings",
					galleryTitle: "Squad Soft Aim",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Soft Aim",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Squad Hacks | Buyer Checklist",
					description: "Bästa Squad Hacks: what to compare before buying Squad hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Squad Hacks",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Bästa Squad Hacks.",
					imageAlt: "Squad Hacks overview for Squad on PC",
					galleryTitle: "Bästa Squad Hacks",
					heroImage: "/images/squad-hacks-esp.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Squad Hacks",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. what to compare before buying Squad hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Squad Aimbot Hack | Soft Aim Assist",
					description: "Squad Aimbot Hack: undetected Aimbot hack assist for Squad. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Aimbot Hack",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Aimbot Hack.",
					imageAlt: "Squad aimbot hack controls and bone priority",
					galleryTitle: "Squad Aimbot Hack",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-aimbot/",
					sections: [
						{
							h2: "Squad Aimbot Hack",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. undetected Aimbot hack assist for Squad.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Squad ESP Hack | Boxes & Loot",
					description: "Squad ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad ESP Hack",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad ESP Hack.",
					imageAlt: "Squad ESP hack boxes and HAB and vehicle markers",
					galleryTitle: "Squad ESP Hack",
					heroImage: "/images/squad-hacks-wallhack.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/squad-esp/",
					sections: [
						{
							h2: "Squad ESP Hack",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Squad Unlock All | What It Means",
					description: "Squad Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Squad Unlock All",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Squad Unlock All.",
					imageAlt: "Squad Hacks license features overview",
					galleryTitle: "Squad Unlock All",
					heroImage: "/images/squad-hacks-radar.webp",
					ctaPrimary: "Köp Squad Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Squad Unlock All",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@squadhacks.net för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Squad Hacks",
					description: "Integritetspolicy for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Integritetspolicy for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on squadhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@squadhacks.net för support och juridik.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Squad Hacks",
					description: "Återbetalningspolicy for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Återbetalningspolicy for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@squadhacks.net för support och juridik.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Squad Hacks",
					description: "Användarvillkor for Squad Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Användarvillkor for squadhacks.net and Squad licenses.",
					imageAlt: "squad hacks",
					galleryTitle: "squad hacks",
					heroImage: "/images/squad-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Squad Hacks kombinerar ESP wallhack, radar hack och squad aimbot som undetected paket för Squad på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@squadhacks.net för support och juridik.",
								"Email: support@squadhacks.net",
							],
						},
					],
				},
			},
		},
	};

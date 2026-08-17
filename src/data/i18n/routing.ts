import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'squad-esp'
	| 'squad-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'squad-esp': '/squad-esp/',
	'squad-aimbot': '/squad-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-squad-hacks/',
	wallhack: '/squad-wallhack/',
	radar: '/squad-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/squad-hacks-2026/',
	hacks: '/squad-hacks/',
	'cheat-download': '/squad-cheat-download/',
	'mod-menu': '/squad-mod-menu/',
	'soft-aim': '/squad-soft-aim/',
	'best-cheats': '/best-squad-hacks/',
	'aimbot-hack': '/squad-aimbot-hack/',
	'esp-hack': '/squad-esp-hack/',
	'unlock-all': '/squad-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'squad-esp': {
		en: 'squad-esp',
		es: 'trucos-squad-esp',
		fr: 'triche-squad-esp',
		de: 'squad-esp-wallhack',
		pt: 'cheats-squad-esp',
		it: 'trucchi-squad-esp',
		nl: 'squad-esp-wallhack',
		pl: 'cheaty-squad-esp',
		ru: 'squad-esp-chity',
		tr: 'squad-esp-hile',
		ar: 'squad-esp-wallhack',
		ja: 'squad-esp-wallhack',
		ko: 'squad-esp-wallhack',
		zh: 'squad-esp-wallhack',
		hi: 'squad-esp-wallhack',
		id: 'squad-esp-wallhack',
		th: 'squad-esp-wallhack',
		vi: 'squad-esp-wallhack',
		uk: 'squad-esp-chity',
		cs: 'squad-esp-wallhack',
		ro: 'squad-esp-wallhack',
		sv: 'squad-esp-wallhack',
	},
	'squad-aimbot': {
		en: 'squad-aimbot',
		es: 'trucos-squad-aimbot',
		fr: 'triche-squad-aimbot',
		de: 'squad-aimbot',
		pt: 'cheats-squad-aimbot',
		it: 'trucchi-squad-aimbot',
		nl: 'squad-aimbot',
		pl: 'cheaty-squad-aimbot',
		ru: 'squad-aimbot-chity',
		tr: 'squad-aimbot-hile',
		ar: 'squad-aimbot',
		ja: 'squad-aimbot',
		ko: 'squad-aimbot',
		zh: 'squad-aimbot',
		hi: 'squad-aimbot',
		id: 'squad-aimbot',
		th: 'squad-aimbot',
		vi: 'squad-aimbot',
		uk: 'squad-aimbot-chity',
		cs: 'squad-aimbot',
		ro: 'squad-aimbot',
		sv: 'squad-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-squad',
		fr: 'fonctionnalites-triche-squad',
		de: 'escape-from-squad-hacks-funktionen',
		pt: 'recursos-cheats-squad',
		it: 'funzioni-trucchi-squad',
		nl: 'escape-from-squad-hacks-functies',
		pl: 'funkcje-cheatow-squad',
		ru: 'funkcii-chitov-squad',
		tr: 'squad-hile-ozellikleri',
		ar: 'escape-from-squad-hacks-features',
		ja: 'escape-from-squad-hacks-features',
		ko: 'escape-from-squad-hacks-features',
		zh: 'escape-from-squad-hacks-features',
		hi: 'escape-from-squad-hacks-features',
		id: 'escape-from-squad-hacks-features',
		th: 'escape-from-squad-hacks-features',
		vi: 'escape-from-squad-hacks-features',
		uk: 'funkcii-chitiv-squad',
		cs: 'escape-from-squad-hacks-funkce',
		ro: 'functii-cheats-squad',
		sv: 'escape-from-squad-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-squad',
		fr: 'prix-triche-squad',
		de: 'escape-from-squad-hacks-preise',
		pt: 'precos-cheats-squad',
		it: 'prezzi-trucchi-squad',
		nl: 'escape-from-squad-hacks-prijzen',
		pl: 'ceny-cheatow-squad',
		ru: 'ceny-chitov-squad',
		tr: 'squad-hile-fiyatlari',
		ar: 'escape-from-squad-hacks-pricing',
		ja: 'escape-from-squad-hacks-pricing',
		ko: 'escape-from-squad-hacks-pricing',
		zh: 'escape-from-squad-hacks-pricing',
		hi: 'escape-from-squad-hacks-pricing',
		id: 'escape-from-squad-hacks-pricing',
		th: 'escape-from-squad-hacks-pricing',
		vi: 'escape-from-squad-hacks-pricing',
		uk: 'ciny-chitiv-squad',
		cs: 'escape-from-squad-hacks-ceny',
		ro: 'preturi-cheats-squad',
		sv: 'escape-from-squad-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-squad',
		fr: 'installation-triche-squad',
		de: 'escape-from-squad-hacks-installation',
		pt: 'instalacao-cheats-squad',
		it: 'installazione-trucchi-squad',
		nl: 'escape-from-squad-hacks-installatie',
		pl: 'instalacja-cheatow-squad',
		ru: 'ustanovka-chitov-squad',
		tr: 'squad-hile-kurulum',
		ar: 'escape-from-squad-hacks-setup',
		ja: 'escape-from-squad-hacks-setup',
		ko: 'escape-from-squad-hacks-setup',
		zh: 'escape-from-squad-hacks-setup',
		hi: 'escape-from-squad-hacks-setup',
		id: 'escape-from-squad-hacks-setup',
		th: 'escape-from-squad-hacks-setup',
		vi: 'escape-from-squad-hacks-setup',
		uk: 'vstanovka-chitiv-squad',
		cs: 'escape-from-squad-hacks-instalace',
		ro: 'instalare-cheats-squad',
		sv: 'escape-from-squad-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-squad',
		fr: 'mises-a-jour-triche-squad',
		de: 'escape-from-squad-hacks-updates',
		pt: 'atualizacoes-cheats-squad',
		it: 'aggiornamenti-trucchi-squad',
		nl: 'escape-from-squad-hacks-updates',
		pl: 'aktualizacje-cheatow-squad',
		ru: 'obnovleniya-chitov-squad',
		tr: 'squad-hile-guncellemeleri',
		ar: 'escape-from-squad-hacks-updates',
		ja: 'escape-from-squad-hacks-updates',
		ko: 'escape-from-squad-hacks-updates',
		zh: 'escape-from-squad-hacks-updates',
		hi: 'escape-from-squad-hacks-updates',
		id: 'escape-from-squad-hacks-updates',
		th: 'escape-from-squad-hacks-updates',
		vi: 'escape-from-squad-hacks-updates',
		uk: 'onovlennya-chitiv-squad',
		cs: 'escape-from-squad-hacks-aktualizace',
		ro: 'actualizari-cheats-squad',
		sv: 'escape-from-squad-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-squad',
		fr: 'faq-triche-squad',
		de: 'escape-from-squad-hacks-faq',
		pt: 'faq-cheats-squad',
		it: 'faq-trucchi-squad',
		nl: 'escape-from-squad-hacks-faq',
		pl: 'faq-cheatow-squad',
		ru: 'faq-chitov-squad',
		tr: 'squad-hile-sss',
		ar: 'escape-from-squad-hacks-faq',
		ja: 'escape-from-squad-hacks-faq',
		ko: 'escape-from-squad-hacks-faq',
		zh: 'escape-from-squad-hacks-faq',
		hi: 'escape-from-squad-hacks-faq',
		id: 'escape-from-squad-hacks-faq',
		th: 'escape-from-squad-hacks-faq',
		vi: 'escape-from-squad-hacks-faq',
		uk: 'faq-chitiv-squad',
		cs: 'escape-from-squad-hacks-faq',
		ro: 'faq-cheats-squad',
		sv: 'escape-from-squad-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-squad',
		fr: 'support-triche-squad',
		de: 'escape-from-squad-hacks-support',
		pt: 'suporte-cheats-squad',
		it: 'supporto-trucchi-squad',
		nl: 'escape-from-squad-hacks-support',
		pl: 'wsparcie-cheatow-squad',
		ru: 'podderzhka-chitov-squad',
		tr: 'squad-hile-destek',
		ar: 'escape-from-squad-hacks-support',
		ja: 'escape-from-squad-hacks-support',
		ko: 'escape-from-squad-hacks-support',
		zh: 'escape-from-squad-hacks-support',
		hi: 'escape-from-squad-hacks-support',
		id: 'escape-from-squad-hacks-support',
		th: 'escape-from-squad-hacks-support',
		vi: 'escape-from-squad-hacks-support',
		uk: 'pidtrymka-chitiv-squad',
		cs: 'escape-from-squad-hacks-podpora',
		ro: 'suport-cheats-squad',
		sv: 'escape-from-squad-hacks-support',
	},
	undetected: {
		en: 'undetected-squad-hacks',
		es: 'trucos-squad-indetectables',
		fr: 'triche-squad-indetectable',
		de: 'unentdeckte-escape-from-squad-hacks',
		pt: 'cheats-squad-indetectaveis',
		it: 'trucchi-squad-indetectabili',
		nl: 'undetected-squad-hacks',
		pl: 'niewykrywalne-cheats-squad',
		ru: 'nedecektiruemye-chity-squad',
		tr: 'tespit-edilemeyen-squad-hileleri',
		ar: 'undetected-squad-hacks',
		ja: 'undetected-squad-hacks',
		ko: 'undetected-squad-hacks',
		zh: 'undetected-squad-hacks',
		hi: 'undetected-squad-hacks',
		id: 'undetected-squad-hacks',
		th: 'undetected-squad-hacks',
		vi: 'undetected-squad-hacks',
		uk: 'nedecektovani-chity-squad',
		cs: 'undetected-squad-hacks',
		ro: 'cheats-squad-nedetectabile',
		sv: 'undetected-squad-hacks',
	},
	wallhack: {
		en: 'squad-wallhack',
		es: 'wallhack-trucos-squad',
		fr: 'wallhack-triche-squad',
		de: 'squad-wallhack',
		pt: 'wallhack-cheats-squad',
		it: 'wallhack-trucchi-squad',
		nl: 'squad-wallhack',
		pl: 'wallhack-cheatow-squad',
		ru: 'wallhack-chity-squad',
		tr: 'squad-wallhack-hile',
		ar: 'squad-wallhack',
		ja: 'squad-wallhack',
		ko: 'squad-wallhack',
		zh: 'squad-wallhack',
		hi: 'squad-wallhack',
		id: 'squad-wallhack',
		th: 'squad-wallhack',
		vi: 'squad-wallhack',
		uk: 'wallhack-chity-squad',
		cs: 'squad-wallhack',
		ro: 'wallhack-cheats-squad',
		sv: 'squad-wallhack',
	},
	radar: {
		en: 'squad-radar-hack',
		es: 'radar-hack-trucos-squad',
		fr: 'radar-hack-triche-squad',
		de: 'squad-radar-hack',
		pt: 'radar-hack-cheats-squad',
		it: 'radar-hack-trucchi-squad',
		nl: 'squad-radar-hack',
		pl: 'radar-hack-cheatow-squad',
		ru: 'radar-hack-chity-squad',
		tr: 'squad-radar-hack',
		ar: 'squad-radar-hack',
		ja: 'squad-radar-hack',
		ko: 'squad-radar-hack',
		zh: 'squad-radar-hack',
		hi: 'squad-radar-hack',
		id: 'squad-radar-hack',
		th: 'squad-radar-hack',
		vi: 'squad-radar-hack',
		uk: 'radar-hack-chity-squad',
		cs: 'squad-radar-hack',
		ro: 'radar-hack-cheats-squad',
		sv: 'squad-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'squad-hacks-2026',
		es: 'trucos-squad-2026',
		fr: 'triche-squad-2026',
		de: 'squad-hacks-2026',
		pt: 'cheats-squad-2026',
		it: 'trucchi-squad-2026',
		nl: 'squad-hacks-2026',
		pl: 'cheaty-squad-2026',
		ru: 'chity-squad-2026',
		tr: 'squad-hileleri-2026',
		ar: 'squad-hacks-2026',
		ja: 'squad-hacks-2026',
		ko: 'squad-hacks-2026',
		zh: 'squad-hacks-2026',
		hi: 'squad-hacks-2026',
		id: 'squad-hacks-2026',
		th: 'squad-hacks-2026',
		vi: 'squad-hacks-2026',
		uk: 'chity-squad-2026',
		cs: 'squad-hacks-2026',
		ro: 'cheats-squad-2026',
		sv: 'squad-hacks-2026',
	},
	hacks: {
		en: 'squad-hacks',
		es: 'hacks-trucos-squad',
		fr: 'hacks-triche-squad',
		de: 'squad-hacks',
		pt: 'hacks-cheats-squad',
		it: 'hacks-trucchi-squad',
		nl: 'squad-hacks',
		pl: 'hacks-cheatow-squad',
		ru: 'haksy-chity-squad',
		tr: 'squad-hile-hacks',
		ar: 'squad-hacks',
		ja: 'squad-hacks',
		ko: 'squad-hacks',
		zh: 'squad-hacks',
		hi: 'squad-hacks',
		id: 'squad-hacks',
		th: 'squad-hacks',
		vi: 'squad-hacks',
		uk: 'haksy-chity-squad',
		cs: 'squad-hacks',
		ro: 'hacks-cheats-squad',
		sv: 'squad-hacks',
	},
	'cheat-download': {
		en: 'squad-cheat-download',
		es: 'descarga-trucos-squad',
		fr: 'telechargement-triche-squad',
		de: 'squad-cheat-download',
		pt: 'download-cheats-squad',
		it: 'download-trucchi-squad',
		nl: 'squad-cheat-download',
		pl: 'pobieranie-cheatow-squad',
		ru: 'skachat-chity-squad',
		tr: 'squad-hile-indir',
		ar: 'squad-cheat-download',
		ja: 'squad-cheat-download',
		ko: 'squad-cheat-download',
		zh: 'squad-cheat-download',
		hi: 'squad-cheat-download',
		id: 'squad-cheat-download',
		th: 'squad-cheat-download',
		vi: 'squad-cheat-download',
		uk: 'zavantazhennya-chitiv-squad',
		cs: 'squad-cheat-download',
		ro: 'descarcare-cheats-squad',
		sv: 'squad-cheat-download',
	},
	'mod-menu': {
		en: 'squad-mod-menu',
		es: 'menu-mod-trucos-squad',
		fr: 'menu-mod-triche-squad',
		de: 'squad-mod-menu',
		pt: 'menu-mod-cheats-squad',
		it: 'menu-mod-trucchi-squad',
		nl: 'squad-mod-menu',
		pl: 'menu-mod-cheatow-squad',
		ru: 'mod-menu-chity-squad',
		tr: 'squad-mod-menu',
		ar: 'squad-mod-menu',
		ja: 'squad-mod-menu',
		ko: 'squad-mod-menu',
		zh: 'squad-mod-menu',
		hi: 'squad-mod-menu',
		id: 'squad-mod-menu',
		th: 'squad-mod-menu',
		vi: 'squad-mod-menu',
		uk: 'mod-menu-chity-squad',
		cs: 'squad-mod-menu',
		ro: 'meniu-mod-cheats-squad',
		sv: 'squad-mod-menu',
	},
	'soft-aim': {
		en: 'squad-soft-aim',
		es: 'soft-aim-trucos-squad',
		fr: 'soft-aim-triche-squad',
		de: 'squad-soft-aim',
		pt: 'soft-aim-cheats-squad',
		it: 'soft-aim-trucchi-squad',
		nl: 'squad-soft-aim',
		pl: 'soft-aim-cheatow-squad',
		ru: 'soft-aim-chity-squad',
		tr: 'squad-soft-aim',
		ar: 'squad-soft-aim',
		ja: 'squad-soft-aim',
		ko: 'squad-soft-aim',
		zh: 'squad-soft-aim',
		hi: 'squad-soft-aim',
		id: 'squad-soft-aim',
		th: 'squad-soft-aim',
		vi: 'squad-soft-aim',
		uk: 'soft-aim-chity-squad',
		cs: 'squad-soft-aim',
		ro: 'soft-aim-cheats-squad',
		sv: 'squad-soft-aim',
	},
	'best-cheats': {
		en: 'best-squad-hacks',
		es: 'mejores-trucos-squad',
		fr: 'meilleures-triches-squad',
		de: 'beste-escape-from-squad-hacks',
		pt: 'melhores-cheats-squad',
		it: 'migliori-trucchi-squad',
		nl: 'beste-escape-from-squad-hacks',
		pl: 'najlepsze-cheats-squad',
		ru: 'luchshie-chity-squad',
		tr: 'en-iyi-squad-hileleri',
		ar: 'best-squad-hacks',
		ja: 'best-squad-hacks',
		ko: 'best-squad-hacks',
		zh: 'best-squad-hacks',
		hi: 'best-squad-hacks',
		id: 'best-squad-hacks',
		th: 'best-squad-hacks',
		vi: 'best-squad-hacks',
		uk: 'naykrashchi-chity-squad',
		cs: 'nejlepsi-escape-from-squad-hacks',
		ro: 'cele-mai-bune-cheats-squad',
		sv: 'basta-escape-from-squad-hacks',
	},
	'aimbot-hack': {
		en: 'squad-aimbot-hack',
		es: 'aimbot-hack-trucos-squad',
		fr: 'aimbot-hack-triche-squad',
		de: 'squad-aimbot-hack',
		pt: 'aimbot-hack-cheats-squad',
		it: 'aimbot-hack-trucchi-squad',
		nl: 'squad-aimbot-hack',
		pl: 'aimbot-hack-cheatow-squad',
		ru: 'aimbot-hack-chity-squad',
		tr: 'squad-aimbot-hack',
		ar: 'squad-aimbot-hack',
		ja: 'squad-aimbot-hack',
		ko: 'squad-aimbot-hack',
		zh: 'squad-aimbot-hack',
		hi: 'squad-aimbot-hack',
		id: 'squad-aimbot-hack',
		th: 'squad-aimbot-hack',
		vi: 'squad-aimbot-hack',
		uk: 'aimbot-hack-chity-squad',
		cs: 'squad-aimbot-hack',
		ro: 'aimbot-hack-cheats-squad',
		sv: 'squad-aimbot-hack',
	},
	'esp-hack': {
		en: 'squad-esp-hack',
		es: 'esp-hack-trucos-squad',
		fr: 'esp-hack-triche-squad',
		de: 'squad-esp-hack',
		pt: 'esp-hack-cheats-squad',
		it: 'esp-hack-trucchi-squad',
		nl: 'squad-esp-hack',
		pl: 'esp-hack-cheatow-squad',
		ru: 'esp-hack-chity-squad',
		tr: 'squad-esp-hack',
		ar: 'squad-esp-hack',
		ja: 'squad-esp-hack',
		ko: 'squad-esp-hack',
		zh: 'squad-esp-hack',
		hi: 'squad-esp-hack',
		id: 'squad-esp-hack',
		th: 'squad-esp-hack',
		vi: 'squad-esp-hack',
		uk: 'esp-hack-chity-squad',
		cs: 'squad-esp-hack',
		ro: 'esp-hack-cheats-squad',
		sv: 'squad-esp-hack',
	},
	'unlock-all': {
		en: 'squad-unlock-all',
		es: 'unlock-all-trucos-squad',
		fr: 'unlock-all-triche-squad',
		de: 'squad-unlock-all',
		pt: 'unlock-all-cheats-squad',
		it: 'unlock-all-trucchi-squad',
		nl: 'squad-unlock-all',
		pl: 'unlock-all-cheatow-squad',
		ru: 'unlock-all-chity-squad',
		tr: 'squad-unlock-all',
		ar: 'squad-unlock-all',
		ja: 'squad-unlock-all',
		ko: 'squad-unlock-all',
		zh: 'squad-unlock-all',
		hi: 'squad-unlock-all',
		id: 'squad-unlock-all',
		th: 'squad-unlock-all',
		vi: 'squad-unlock-all',
		uk: 'unlock-all-chity-squad',
		cs: 'squad-unlock-all',
		ro: 'unlock-all-cheats-squad',
		sv: 'squad-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('squad-aimbot', locale), pageId: 'squad-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('squad-esp', locale), pageId: 'squad-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}

export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Squad Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Squad Hacks Blog | Match Guides',
		blogDescription:
			'Squad guides — match tips, ESP, aimbot notes, layer notes, and Easy Anti-Cheat update coverage. English blog at squadhacks.net/blog/.',
		blogH1: 'Squad Hacks Intel',
		blogIntro:
			'Short Squad guides for infantry and vehicle matches. Pair these tips with the Squad Hacks product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Squad Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Squad Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Squad Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Squad en PC Windows.',
		blogH1: 'Blog Squad Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos Squad indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Squad relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Squad Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Squad Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Squad Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour Squad sur PC Windows.',
		blogH1: 'Blog Squad Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Squad indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Squad associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Squad Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Squad Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Squad Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Squad auf Windows PC.',
		blogH1: 'Squad Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Squad Hacks, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Squad Guides',
		allPosts: 'Alle Beiträge',
		home: 'Squad Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Squad Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Squad Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Squad no PC.',
		blogH1: 'Blog Squad Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats Squad indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Squad relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Squad Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Squad Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Squad Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per Squad su PC Windows.',
		blogH1: 'Blog Squad Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat Squad indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Squad correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Squad Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Squad Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Squad Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Squad op Windows PC.',
		blogH1: 'Squad Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Squad hacks, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Squad gidsen',
		allPosts: 'Alle posts',
		home: 'Squad Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Squad Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Squad Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla Squad na PC.',
		blogH1: 'Blog Squad Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Squad, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Squad',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Squad Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Squad Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Squad Hacks: undetected ESP, wallhack, radar и Aimbot для Squad на Windows PC.',
		blogH1: 'Блог Squad Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Squad, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Squad',
		allPosts: 'Все статьи',
		home: 'Главная Squad Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Squad Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Squad Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Squad Windows PC.',
		blogH1: 'Squad Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected Squad hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Squad rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Squad Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Squad Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Squad Hacks: غش undetected وESP wallhack ورadar وAimbot لـ Squad على Windows PC.',
		blogH1: 'مدونة Squad Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Squad undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Squad ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Squad Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Squad Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Squad Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。Squad Windows PC向け。',
		blogH1: 'Squad Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected Squadチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Squadガイド',
		allPosts: 'すべての記事',
		home: 'Squad Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Squad Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Squad Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Squad Windows PC.',
		blogH1: 'Squad Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Squad 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Squad 가이드',
		allPosts: '모든 게시물',
		home: 'Squad Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Squad Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'Squad Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Squad Windows PC。',
		blogH1: 'Squad Hacks 博客 — 全球指南',
		blogIntro:
			'undetected Squad作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Squad指南',
		allPosts: '所有文章',
		home: 'Squad Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Squad Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Squad Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Squad Windows PC के लिए।',
		blogH1: 'Squad Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Squad hacks, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Squad गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Squad Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Squad Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Squad Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk Squad di PC Windows.',
		blogH1: 'Blog Squad Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat Squad undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Squad terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Squad Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Squad Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Squad Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Squad บน PC',
		blogH1: 'บล็อก Squad Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Squad undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Squad ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Squad Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Squad Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Squad Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Squad trên PC.',
		blogH1: 'Blog Squad Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Squad undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Squad liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Squad Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Squad Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Squad Hacks: undetected ESP, wallhack, radar та Aimbot для Squad на Windows PC.',
		blogH1: 'Блог Squad Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Squad, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Squad",
		allPosts: 'Усі статті',
		home: 'Головна Squad Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Squad Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Squad Hacks: undetected ESP, wallhack, radar a Aimbot pro Squad na Windows PC.',
		blogH1: 'Blog Squad Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Squad hacky, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Squad průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Squad Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Squad Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Squad Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Squad pe PC.',
		blogH1: 'Blog Squad Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Squad undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Squad related',
		allPosts: 'Toate articolele',
		home: 'Acasă Squad Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Squad Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Squad Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för Squad på PC.',
		blogH1: 'Squad Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Squad hacks, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Squad guider',
		allPosts: 'Alla inlägg',
		home: 'Squad Hacks hem',
		language: 'Språk',
	},
};

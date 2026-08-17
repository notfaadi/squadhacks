import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'squad hacks',
		title: 'squad hacks gallery',
		subtitle: 'Simple squad hacks visuals — ESP, wallhack, aimbot, and radar for Squad on PC.',
		lead: 'Squad Hacks helps you spot infantry, vehicles, loot, and rally points with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'squad hacks esp', copy: 'See players through walls with squad hacks esp and wallhack overlays.' },
			{ title: 'squad hacks radar', copy: 'Track nearby threats with squad hacks radar before you push or rally.' },
			{ title: 'squad hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Squad raids on Windows PC.' },
		],
		updatesLabel: 'squad hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Squad Hacks',
		title: 'Galería Squad',
		subtitle: 'Visuales de Squad con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Squad Hacks está pensado para el loop BR de Squad: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al rally.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Yehorivka y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Squad', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Squad Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Squad Hacks',
		title: 'Galerie Squad',
		subtitle: 'Visuels Squad — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Squad Hacks suit la boucle BR de Squad : lire la carte, suivre les escouades, loot et survivre au rally.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Yehorivka et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Squad', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Squad Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Squad Hacks',
		title: 'Squad Galerie',
		subtitle: 'Squad-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Squad Hacks passt zur Raid-Schleife von Squad: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Yehorivka und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Squad Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Squad Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Squad Hacks',
		title: 'Galeria Squad',
		subtitle: 'Visuais de Squad com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Squad Hacks segue o loop BR do Squad: ler o mapa, rastrear esquadrões, lootar e sobreviver ao rally.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Yehorivka e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Squad', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Squad Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Squad Hacks',
		title: 'Galleria Squad',
		subtitle: 'Immagini Squad — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Squad Hacks è pensato per il loop BR di Squad: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al rally.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Yehorivka e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Squad', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Squad Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Squad Hacks',
		title: 'Squad galerij',
		subtitle: 'Squad-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Squad Hacks volgt de raid-loop va Squad: kaart lezen, vijandelijke squads volgen, looten en de rally overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Yehorivka en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Squad Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Squad Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Squad Hacks',
		title: 'Galeria Squad',
		subtitle: 'Grafiki Squad — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Squad Hacks pasuje do pętli BR Squad: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj rally.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Yehorivka i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Squad', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Squad Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Squad Hacks',
		title: 'Галерея Squad',
		subtitle: 'Визуалы Squad — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Squad Hacks создан для рейд-циклу Squad: читать карту, отслеживать вражеские отряды, лут и выживать в rally.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Yehorivka и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Squad', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Squad Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Squad Hacks',
		title: 'Squad galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Squad Hacks, Squad BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve rally\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Yehorivka ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Squad Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Squad Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Squad Hacks',
		title: 'معرض Squad',
		subtitle: 'صور Squad — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Squad Hacks مبني لحلقة BR في Squad: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في rally.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Yehorivka وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Squad', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Squad Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Squad Hacks',
		title: 'Squad ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのSquadビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Squad HacksはSquadのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてrallyを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Yehorivkaとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Squadエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Squad Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Squad Hacks',
		title: 'Squad 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Squad 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Squad Hacks는 Squad BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, rally 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Yehorivka와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Squad 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Squad Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Squad Hacks',
		title: 'Squad 图库',
		subtitle: 'Squad 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Squad Hacks 为 Squad BR 循环设计：读图、追踪敌方小队、搜刮并在 rally 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Yehorivka 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Squad 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Squad Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Squad Hacks',
		title: 'Squad गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Squad Hacks Squad BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और rally survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Yehorivka और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Squad Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Squad Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Squad Hacks',
		title: 'Galeri Squad',
		subtitle: 'Visual Squad — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Squad Hacks untuk loop BR Squad: baca peta, lacak squad musuh, loot, dan selamat di rally.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Yehorivka dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Squad', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Squad Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Squad Hacks',
		title: 'แกลเลอรี Squad',
		subtitle: 'ภาพ Squad — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Squad Hacks สำหรับลูป BR ของ Squad: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด rally',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Yehorivka และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Squad', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Squad Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Squad Hacks',
		title: 'Thư viện Squad',
		subtitle: 'Hình ảnh Squad — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Squad Hacks cho vòng BR Squad: đọc bản đồ, theo dõi squad địch, loot và sống sót rally.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Yehorivka và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Squad', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Squad Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Squad Hacks',
		title: 'Галерея Squad',
		subtitle: 'Візуали Squad — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Squad Hacks для рейд-циклу Squad: читати карту, відстежувати ворожі загони, лут і виживати в rally.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Yehorivka і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Squad', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Squad Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Squad Hacks',
		title: 'Galerie Squad',
		subtitle: 'Squad vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Squad Hacks pro BR smyčku Squad: číst mapu, sledovat nepřátelské squady, loot a přežít rally.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Yehorivka a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Squad', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Squad Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Squad Hacks',
		title: 'Galerie Squad',
		subtitle: 'Vizualuri Squad — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Squad Hacks pentru bucla BR Squad: citește harta, urmărește squad-uri inamice, loot și supraviețuiește rally.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Yehorivka și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Squad', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Squad Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Squad Hacks',
		title: 'Squad galleri',
		subtitle: 'Squad-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Squad Hacks för Squad:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev rally.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Yehorivka och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Squad Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Squad Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}

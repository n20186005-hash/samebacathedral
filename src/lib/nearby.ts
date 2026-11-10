import type { Metadata } from 'next';
import data from '@/data/nearby.json';
import { languageAlternates, localizedPath } from '@/lib/locale-routing';
export type NearbyLocale = keyof typeof data;
export type NearbySlug = keyof typeof data.en;
export const nearbySlugs = Object.keys(data.en) as NearbySlug[];
export const nearbyData = data;
export const nearbySources = {
  'metekhi-church': [['Georgia Travel — Metekhi Church', 'https://georgia.travel/metekhi-church'], ['Georgia Travel — Metekhi Bridge and statue', 'https://georgia.travel/metekhi-bridge']],
  'bridge-of-peace': [['Georgia Travel — Bridge of Peace', 'https://georgia.travel/tbilisi-peace-bridge'], ['Cimolai — Peace Bridge project', 'https://www.cimolai.com/en/projects/peace-bridge/']],
  'rike-park': [['Georgia Travel — Rike Park', 'https://georgia.travel/family-attractions/rike-park'], ['Georgian Public Broadcaster — City Hall demolition permit statement', 'https://1tv.ge/lang/en/news/tbilisi-city-hall-says-permit-issued-for-demolition-of-rike-jugs/'], ['Reuters — Rike demolition report, 27 August 2026', 'https://www.reuters.com/world/demolition-modernist-arts-complex-tbilisi-sparks-outcry-2026-08-27/']],
};
export const nearbyMaps = {
  'metekhi-church': 'https://www.google.com/maps/search/?api=1&query=Metekhi+Church+Tbilisi',
  'bridge-of-peace': 'https://www.google.com/maps/search/?api=1&query=Bridge+of+Peace+Tbilisi',
  'rike-park': 'https://www.google.com/maps/search/?api=1&query=Rike+Park+Tbilisi',
};
export function isNearbySlug(slug: string): slug is NearbySlug { return nearbySlugs.includes(slug as NearbySlug); }
export function nearbyMetadata(lang: NearbyLocale, slug: NearbySlug): Metadata {
  const article = data[lang][slug];
  const path = `/nearby/${slug}/`;
  const url = `https://samebacathedral.com${localizedPath(lang, path)}`;
  return {
    title: article.title,
    description: `${article.tagline} ${article.intro}`.slice(0, 280),
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: { type: 'article', title: article.title, description: article.tagline, url, images: [], modifiedTime: '2026-11-10' },
    twitter: { card: 'summary', title: article.title, description: article.tagline, images: [] },
  };
}
export const nearbyLabels: Record<NearbyLocale, string[]> = {
  en: ['Explore nearby Tbilisi', 'Introduction', 'Before you visit', 'Highlights', 'About this place', 'Basic information', 'Getting there', 'History and culture', 'Suggested sequence', 'Visitor notices', 'Photography', 'External visitor reviews', 'Address and map', 'Sources and editorial review', 'Checked 10 November 2026 · Editorial responsibility: Sameba Cathedral Guide editors.', 'Place', 'Location', 'Open map and directions', 'Read recent reviews on Google Maps; ratings are third-party snapshots, not this site’s reviews.', 'Related visits', 'Sameba visitor guide', 'Google Maps snapshot · 10 November 2026', 'No current operator schedule verified. Check the venue and current signs before travelling.', 'Municipal transport planner'],
  ka: ['თბილისის ახლომდებარე ადგილები', 'გაცნობა', 'ვიზიტის წინ', 'მთავარი სანახაობები', 'ადგილის შესახებ', 'ძირითადი ინფორმაცია', 'როგორ მივიდეთ', 'ისტორია და კულტურა', 'სარეკომენდაციო თანმიმდევრობა', 'ვიზიტორის საყურადღებოდ', 'ფოტოგადაღება', 'გარე შეფასებები', 'მისამართი და რუკა', 'წყაროები და სარედაქციო შემოწმება', 'გადამოწმებულია: 2026 წლის 10 ნოემბერი · სარედაქციო პასუხისმგებლობა: Sameba Cathedral Guide-ის რედაქცია.', 'ადგილი', 'მდებარეობა', 'რუკა და მიმართულებები', 'ახალი შეფასებები Google Maps-ზე იხილეთ; რეიტინგი მესამე მხარის მონაცემია და არა ამ საიტის შეფასება.', 'დაკავშირებული ვიზიტები', 'სამების ვიზიტორის გზამკვლევი', 'Google Maps-ის მონაცემი · 2026 წლის 10 ნოემბერი', 'მოქმედი ოფიციალური გრაფიკი ვერ დადასტურდა. მგზავრობამდე ადგილზე გადაამოწმეთ.', 'მუნიციპალური ტრანსპორტის დაგეგმვა'],
  ru: ['Рядом в Тбилиси', 'Знакомство', 'Перед посещением', 'Что посмотреть', 'Об этом месте', 'Основная информация', 'Как добраться', 'История и культура', 'Порядок осмотра', 'Посетителям', 'Фотография', 'Внешние отзывы', 'Адрес и карта', 'Источники и редакционная проверка', 'Проверено 10 ноября 2026 · Редакционная ответственность: редакция Sameba Cathedral Guide.', 'Место', 'Расположение', 'Карта и маршрут', 'Читайте свежие отзывы в Google Maps; оценки принадлежат внешней платформе, а не этому сайту.', 'Другие посещения', 'Гид по Самебе', 'Данные Google Maps · 10 ноября 2026', 'Актуальный график оператора не подтверждён. Перед поездкой проверьте у объекта и по указателям.', 'Планировщик городского транспорта'],
  tr: ['Tiflis yakın çevresi', 'Tanıtım', 'Ziyaret öncesi', 'Öne çıkanlar', 'Yer hakkında', 'Temel bilgiler', 'Ulaşım', 'Tarih ve kültür', 'Önerilen sıra', 'Ziyaretçi notları', 'Fotoğraf', 'Haricî ziyaretçi yorumları', 'Adres ve harita', 'Kaynaklar ve editoryal kontrol', 'Kontrol: 10 Kasım 2026 · Editoryal sorumluluk: Sameba Cathedral Guide editörleri.', 'Yer', 'Konum', 'Harita ve yol tarifi', 'Güncel yorumları Google Maps’te okuyun; puanlar bu sitenin değil üçüncü tarafın verileridir.', 'İlgili ziyaretler', 'Sameba ziyaretçi rehberi', 'Google Maps kaydı · 10 Kasım 2026', 'Güncel işletmeci saatleri doğrulanmadı. Yolculuk öncesi tesisten ve yerel levhalardan kontrol edin.', 'Belediye ulaşım planlayıcısı'],
  'zh-Hans': ['第比利斯周边探索', '认识此地', '出发前提示', '参观亮点', '关于此地', '基本资料', '如何前往', '历史与文化', '建议参观顺序', '参观礼仪与提醒', '摄影建议', '外部游客评论', '地址与地图', '来源与编辑核对', '核对日期：2026年11月10日 · 编辑责任：Sameba Cathedral Guide 编辑团队。', '地点', '位置', '打开地图与导航', '请在 Google Maps 阅读最新评论；评分是第三方快照，并非本网站自有评价。', '相关游览', '三一大教堂参观指南', 'Google Maps 快照 · 2026年11月10日', '未核实管理方现行开放表；出发前向场所并按现场告示再次确认。', '市内交通规划器'],
  'zh-Hant': ['第比利斯周邊探索', '認識此地', '出發前提示', '參觀亮點', '關於此地', '基本資料', '如何前往', '歷史與文化', '建議參觀順序', '參觀禮儀與提醒', '攝影建議', '外部遊客評論', '地址與地圖', '來源與編輯核對', '核對日期：2026年11月10日 · 編輯責任：Sameba Cathedral Guide 編輯團隊。', '地點', '位置', '開啟地圖與導航', '請在 Google Maps 閱讀最新評論；評分是第三方快照，並非本網站自有評價。', '相關遊覽', '三一大教堂參觀指南', 'Google Maps 快照 · 2026年11月10日', '未核實管理方現行開放表；出發前向場所並按現場告示再次確認。', '市區交通規劃器'],
};

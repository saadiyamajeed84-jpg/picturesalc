export type LangCode = "en" | "ar" | "zh" | "ms" | "es" | "fr" | "ja" | "ko" | "ru";

export type Language = {
  code: LangCode;
  label: string; // native label
  english: string;
  flag: string;
  dir: "ltr" | "rtl";
};

export const languages: Language[] = [
  { code: "en", label: "English", english: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", label: "العربية", english: "Arabic", flag: "🇸🇦", dir: "rtl" },
  { code: "zh", label: "中文", english: "Chinese", flag: "🇨🇳", dir: "ltr" },
  { code: "ms", label: "Bahasa Melayu", english: "Malay", flag: "🇲🇾", dir: "ltr" },
  { code: "es", label: "Español", english: "Spanish", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", label: "Français", english: "French", flag: "🇫🇷", dir: "ltr" },
  { code: "ja", label: "日本語", english: "Japanese", flag: "🇯🇵", dir: "ltr" },
  { code: "ko", label: "한국어", english: "Korean", flag: "🇰🇷", dir: "ltr" },
  { code: "ru", label: "Русский", english: "Russian", flag: "🇷🇺", dir: "ltr" },
];

export const defaultLang: LangCode = "en";

export const getLanguage = (code: LangCode): Language =>
  languages.find((l) => l.code === code) ?? languages[0];

type Dict = Record<string, string>;

// UI string dictionary. English is the source; other languages translate the same keys.
const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.courses": "Courses",
  "nav.services": "Student Services",
  "nav.ai": "AI Tools",
  "nav.gallery": "Gallery",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "cta.enquire": "Enquire Now",
  "cta.apply": "Apply Now",
  "cta.viewAll": "View all",
  "common.studentPortal": "Student Portal",
  "common.payment": "Payment",
  "common.language": "Language",
  "topbar.location": "Mont Kiara, KL & USJ, Selangor",
  "cta.call": "Call",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "Enquire",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.courses": "الدورات",
  "nav.services": "خدمات الطلاب",
  "nav.ai": "أدوات الذكاء الاصطناعي",
  "nav.gallery": "المعرض",
  "nav.blog": "المدونة",
  "nav.contact": "اتصل بنا",
  "cta.enquire": "استفسر الآن",
  "cta.apply": "قدّم الآن",
  "cta.viewAll": "عرض الكل",
  "common.studentPortal": "بوابة الطلاب",
  "common.payment": "الدفع",
  "common.language": "اللغة",
  "topbar.location": "مونت كيارا، كوالالمبور و USJ، سيلانجور",
  "cta.call": "اتصل",
  "cta.whatsapp": "واتساب",
  "cta.enquire.short": "استفسر",
};

const zh: Dict = {
  "nav.home": "首页",
  "nav.about": "关于我们",
  "nav.courses": "课程",
  "nav.services": "学生服务",
  "nav.ai": "AI 工具",
  "nav.gallery": "相册",
  "nav.blog": "博客",
  "nav.contact": "联系我们",
  "cta.enquire": "立即咨询",
  "cta.apply": "立即申请",
  "cta.viewAll": "查看全部",
  "common.studentPortal": "学生门户",
  "common.payment": "付款",
  "common.language": "语言",
  "topbar.location": "蒙特凯拉，吉隆坡及 USJ，雪兰莪",
  "cta.call": "致电",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "咨询",
};

const ms: Dict = {
  "nav.home": "Utama",
  "nav.about": "Tentang Kami",
  "nav.courses": "Kursus",
  "nav.services": "Perkhidmatan Pelajar",
  "nav.ai": "Alat AI",
  "nav.gallery": "Galeri",
  "nav.blog": "Blog",
  "nav.contact": "Hubungi",
  "cta.enquire": "Tanya Sekarang",
  "cta.apply": "Mohon Sekarang",
  "cta.viewAll": "Lihat semua",
  "common.studentPortal": "Portal Pelajar",
  "common.payment": "Pembayaran",
  "common.language": "Bahasa",
  "topbar.location": "Mont Kiara, KL & USJ, Selangor",
  "cta.call": "Panggil",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "Tanya",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.about": "Sobre Nosotros",
  "nav.courses": "Cursos",
  "nav.services": "Servicios Estudiantiles",
  "nav.ai": "Herramientas IA",
  "nav.gallery": "Galería",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "cta.enquire": "Consultar Ahora",
  "cta.apply": "Inscríbete",
  "cta.viewAll": "Ver todo",
  "common.studentPortal": "Portal del Estudiante",
  "common.payment": "Pago",
  "common.language": "Idioma",
  "topbar.location": "Mont Kiara, KL y USJ, Selangor",
  "cta.call": "Llamar",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "Consultar",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.about": "À Propos",
  "nav.courses": "Cours",
  "nav.services": "Services Étudiants",
  "nav.ai": "Outils IA",
  "nav.gallery": "Galerie",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "cta.enquire": "Demander Info",
  "cta.apply": "Postuler",
  "cta.viewAll": "Voir tout",
  "common.studentPortal": "Portail Étudiant",
  "common.payment": "Paiement",
  "common.language": "Langue",
  "topbar.location": "Mont Kiara, KL et USJ, Selangor",
  "cta.call": "Appeler",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "Info",
};

const ja: Dict = {
  "nav.home": "ホーム",
  "nav.about": "会社概要",
  "nav.courses": "コース",
  "nav.services": "学生サービス",
  "nav.ai": "AIツール",
  "nav.gallery": "ギャラリー",
  "nav.blog": "ブログ",
  "nav.contact": "お問い合わせ",
  "cta.enquire": "今すぐ問い合わせ",
  "cta.apply": "今すぐ申し込む",
  "cta.viewAll": "すべて見る",
  "common.studentPortal": "学生ポータル",
  "common.payment": "支払い",
  "common.language": "言語",
  "topbar.location": "モントキアラ、KL & USJ、セランゴール",
  "cta.call": "電話",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "問い合わせ",
};

const ko: Dict = {
  "nav.home": "홈",
  "nav.about": "소개",
  "nav.courses": "과정",
  "nav.services": "학생 서비스",
  "nav.ai": "AI 도구",
  "nav.gallery": "갤러리",
  "nav.blog": "블로그",
  "nav.contact": "연락처",
  "cta.enquire": "지금 문의하기",
  "cta.apply": "지금 지원하기",
  "cta.viewAll": "모두 보기",
  "common.studentPortal": "학생 포털",
  "common.payment": "결제",
  "common.language": "언어",
  "topbar.location": "몬트키아라, KL & USJ, 슬랑오르",
  "cta.call": "전화",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "문의",
};

const ru: Dict = {
  "nav.home": "Главная",
  "nav.about": "О нас",
  "nav.courses": "Курсы",
  "nav.services": "Услуги для студентов",
  "nav.ai": "AI-инструменты",
  "nav.gallery": "Галерея",
  "nav.blog": "Блог",
  "nav.contact": "Контакты",
  "cta.enquire": "Узнать больше",
  "cta.apply": "Подать заявку",
  "cta.viewAll": "Смотреть все",
  "common.studentPortal": "Портал студента",
  "common.payment": "Оплата",
  "common.language": "Язык",
  "topbar.location": "Монт-Киара, КЛ и USJ, Селангор",
  "cta.call": "Звонок",
  "cta.whatsapp": "WhatsApp",
  "cta.enquire.short": "Вопрос",
};

export const translations: Record<LangCode, Dict> = { en, ar, zh, ms, es, fr, ja, ko, ru };

export function translate(lang: LangCode, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

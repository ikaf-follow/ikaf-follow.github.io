// إعدادات الاتصال بـ Supabase
// من Supabase: Project Settings → API (أو Data API)
//   SUPABASE_URL      = Project URL
//   SUPABASE_ANON_KEY = المفتاح العام (anon / publishable) — مسموح يتحط هنا
// ⚠️ ممنوع تحط هنا مفتاح service_role أو secret أبدًا
window.APP_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-KEY",
  EMAIL_DOMAIN: "ikaf.example.com"
};

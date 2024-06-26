const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Aniket",
    image: "/avatar.svg.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Data Scientist",
    bio: "I am new in the field of Data Science and Analytics and trying to learn",
    email: "aniketsharma1378@gmail.com",
    linkedin: "aniketsharma20",
    github: "aniketsharma21",
    instagram: "",
  },
  projects: [
    {
      name: `My Projects`,
      href: "https://github.com/aniketsharma21/ml_projects",
    },
  ],
  // blog setting (required)
  blog: {
    title: "aniket",
    description: "welcome to aniket!",
  },

  // CONFIG configration (required)
  link: "https://aniketsharma21.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "a4e197dc-c981-45be-b73c-bb50183f2adb", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }

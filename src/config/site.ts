export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Final Stand Remastered Wiki",
  shortName: "Final Stand Remastered",
  logoText: "FS",
  tagline: "Codes, Races, Builds & Guides",
  description: "Your ultimate Final Stand Remastered guide on Roblox! Explore active codes, race and build guides, boss strategies, and fast progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://final-stand-remastered.wiki",
  supportEmail: "support@final-stand-remastered.wiki",
  gameUrl: "https://www.roblox.com/games/7922773201/Final-Stand-Remastered",
  heroVideoId: "nzdeoOyfvUE", // DBZ Final Stand: Remastered ultimate beginner guide (gameplay tutorial)
  social: {
    discord: "https://www.roblox.com/communities/3263088",
    youtube: "https://www.youtube.com/results?search_query=Final+Stand+Remastered+Roblox",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};

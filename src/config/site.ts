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
  tagline: "Codes, Weapons, Builds & Guides",
  description: "Your ultimate Final Stand Remastered guide on Roblox! Explore active codes, weapon and build guides, race and boss strategies, and fast progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://final-stand-remastered.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://final-stand-remastered.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/7922773201/Final-Stand-Remastered",
  heroVideoId: "nzdeoOyfvUE", // DBZ Final Stand: Remastered ultimate beginner guide (gameplay tutorial)
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>
        {siteConfig.name} is an independent fan-built guide hub covering races, builds, bosses, transformations, progression routes, and essential
        game knowledge for new and veteran {siteConfig.shortName} players alike.
      </p>
      <p>
        Every guide is written by players and kept up to date with the latest game updates. This site is not affiliated with the developers of{" "}
        {siteConfig.shortName} or Roblox.
      </p>
      <p>
        Found something outdated or want to contribute? Reach out at <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}

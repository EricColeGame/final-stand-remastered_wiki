import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>{siteConfig.shortName}, Roblox, and all related game concepts, logos, and media belong to their respective owners.</p>
      <p>
        {siteConfig.name} is an independent, non-official fan wiki built for educational and guide presentation purposes. Screenshots, artwork, and
        trademarks remain the property of their owners.
      </p>
      <p>
        If you own rights to content displayed here and have a concern, please contact the site operator at{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.
      </p>
    </LegalPage>
  );
}

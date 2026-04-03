import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
}

const DOMAIN = "https://www.casinosindni.eu.com";

export default function SEOHead({ title, description, canonical, noindex }: SEOHeadProps) {
  const fullCanonical = `${DOMAIN}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
    </Helmet>
  );
}

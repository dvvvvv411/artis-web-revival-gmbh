import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEOHelmet = ({ 
  title = "artis GmbH - Ihr Partner für professionelle Bauplanung & 3D-Technik",
  description = "artis GmbH bietet umfassende Ingenieursdienstleistungen: Tragwerksplanung, Baubegleitung, Gutachten & Prüfungen sowie professionelle Beratung für Ihr Bauprojekt.",
  keywords = "Bauplanung, 3D-Technik, Tragwerksplanung, Baubegleitung, Ingenieursbüro, Bauprojekte, Gutachten, Prüfungen, artis GmbH",
  canonical
}: SEOHelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
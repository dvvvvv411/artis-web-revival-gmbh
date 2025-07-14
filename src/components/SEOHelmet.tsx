import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEOHelmet = ({ 
  title = "artis GmbH - Bauplanung & 3D-Technik",
  description = "Ihr Partner für professionelle Bauplanung und 3D-Technik. Umfassende Ingenieursdienstleistungen für Ihr Bauprojekt.",
  keywords = "Bauplanung, 3D-Technik, Ingenieursbüro, Bauprojekte, artis GmbH",
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
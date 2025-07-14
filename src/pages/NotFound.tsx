import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import InsolvencyBanner from "@/components/InsolvencyBanner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Seite nicht gefunden - artis GmbH"
        description="Die angeforderte Seite wurde nicht gefunden. Zurück zur artis GmbH Homepage."
        keywords="404, Seite nicht gefunden, Error"
      />
      <Header />
      
      <div className="corporate-container">
        <InsolvencyBanner />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-lg mx-auto px-6">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Seite nicht gefunden
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die angeforderte Seite existiert nicht oder wurde verschoben.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

import { Calculator, Building, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ingenieurburo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Ingenieurbüro artis GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle Tragwerksplanung und Bauingenieurdienstleistungen für Ihr Bauprojekt
            </p>
          </div>
        </section>

        {/* Service Boxes Section */}
        <section className="py-20 px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="service-box">
              <div className="service-icon">
                <Calculator />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Tragwerksplanung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Statische Berechnungen und Konstruktionspläne für Neubauten, Umbauten und Sanierungen. 
                Professionelle Planung nach aktuellen Normen und Vorschriften.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Building />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Baubegleitung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fachkundige Begleitung Ihres Bauprojekts von der Planung bis zur Fertigstellung. 
                Qualitätskontrolle und Koordination aller beteiligten Gewerke.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FileText />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Gutachten & Prüfung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sachverständigengutachten, Bauwerksdiagnose und statische Prüfungen. 
                Bewertung bestehender Konstruktionen und Sanierungskonzepte.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Users />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Beratung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Umfassende technische Beratung für Bauherren, Architekten und Investoren. 
                Machbarkeitsstudien und wirtschaftliche Lösungsansätze.
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Weitere Informationen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Laden Sie unsere Leistungsübersicht herunter und erfahren Sie mehr über unsere 
              umfassenden Ingenieursdienstleistungen.
            </p>
            <Link 
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Jetzt Beratung anfragen →
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Ingenieurburo;
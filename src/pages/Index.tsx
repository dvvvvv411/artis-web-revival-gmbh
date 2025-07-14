import { Calculator, Building, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="corporate-container">
        {/* Banner Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Willkommen bei der artis GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für professionelle Bauplanung und modernste 3D-Scanner-Technologie
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
                Ingenieurbüro
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professionelle Tragwerksplanung, Statik und Bauingenieurdienstleistungen für Ihr Bauprojekt. 
                Von der ersten Idee bis zur erfolgreichen Umsetzung.
              </p>
              <a 
                href="#"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Mehr erfahren →
              </a>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Building />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3D-Scanner Vermietung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modernste 3D-Scanner-Technologie zum Mieten. Präzise Vermessung und digitale Erfassung 
                für Ihre Bauprojekte und Dokumentationen.
              </p>
              <a 
                href="#"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Zur Vermietung →
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Unsere Leistungen im Überblick
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Bauplanung</h3>
                <p className="text-muted-foreground">
                  Professionelle Planung und Statik für Ihr Bauvorhaben
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">3D-Scanner</h3>
                <p className="text-muted-foreground">
                  Modernste Vermessungstechnik zum Mieten oder Kaufen
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Service</h3>
                <p className="text-muted-foreground">
                  Persönliche Betreuung von der Planung bis zur Umsetzung
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
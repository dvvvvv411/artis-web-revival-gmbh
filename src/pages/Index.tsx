import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Willkommen bei der artis GmbH –<br />
              Ihr Partner für Bauplanung & 3D-Technik
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Professionelle Ingenieurdienstleistungen und modernste 3D-Scanner-Technologie 
              für Ihre Bauprojekte.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="corporate-section py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingenieurbüro CTA */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Ingenieurbüro
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Professionelle Bauplanung, Statik und Projektmanagement 
                    für Ihr Bauvorhaben.
                  </p>
                  <button className="corporate-cta inline-flex items-center px-6 py-3 rounded-md font-medium">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Ingenieurbüro entdecken
                  </button>
                </div>
              </div>

              {/* 3D-Scanner CTA */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3D-Scanner
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Modernste 3D-Scanner-Technologie zum Mieten oder Kaufen. 
                    Präzise Vermessung für alle Anforderungen.
                  </p>
                  <button className="corporate-cta inline-flex items-center px-6 py-3 rounded-md font-medium">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    3D-Scanner mieten oder kaufen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Erfahrung</h3>
                <p className="text-muted-foreground">
                  Über 20 Jahre Expertise in der Bauplanung und Projektrealisierung.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Modernste 3D-Technologie für präzise Vermessung und Planung.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Service</h3>
                <p className="text-muted-foreground">
                  Persönliche Betreuung von der Planung bis zur Umsetzung.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

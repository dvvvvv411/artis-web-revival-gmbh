import { Scan } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Scanner = () => {
  const scannerModels = [
    {
      name: "FARO Focus S70",
      range: "0,6 - 70 m",
      accuracy: "±1 mm",
      scanRate: "976.000 Punkte/Sek",
      features: "Kompakt, Outdoor-tauglich",
      price: "Auf Anfrage"
    },
    {
      name: "Leica RTC360",
      range: "0,5 - 130 m", 
      accuracy: "±1 mm",
      scanRate: "2.000.000 Punkte/Sek",
      features: "HDR-Imaging, VIS-Technologie",
      price: "Auf Anfrage"
    },
    {
      name: "Trimble X7",
      range: "0,6 - 80 m",
      accuracy: "±2 mm", 
      scanRate: "500.000 Punkte/Sek",
      features: "Selbstnivellierend, robust",
      price: "Auf Anfrage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              3D-Scanner Vermietung
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle 3D-Scanner-Technologie für präzise Vermessung und digitale Erfassung
            </p>
          </div>
        </section>

        {/* Scanner Models Table */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Verfügbare Scanner-Modelle
            </h2>
            
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Modell
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Reichweite
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Genauigkeit
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Scan-Rate
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Besonderheiten
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Preis
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Aktion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scannerModels.map((scanner, index) => (
                      <tr key={scanner.name} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-6 py-6 border-b border-border">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-muted/50 rounded-md flex items-center justify-center">
                              <Scan className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{scanner.name}</h3>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-muted-foreground border-b border-border">
                          {scanner.range}
                        </td>
                        <td className="px-6 py-6 text-muted-foreground border-b border-border">
                          {scanner.accuracy}
                        </td>
                        <td className="px-6 py-6 text-muted-foreground border-b border-border">
                          {scanner.scanRate}
                        </td>
                        <td className="px-6 py-6 text-muted-foreground border-b border-border">
                          {scanner.features}
                        </td>
                        <td className="px-6 py-6 text-muted-foreground border-b border-border">
                          {scanner.price}
                        </td>
                        <td className="px-6 py-6 border-b border-border">
                          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                            Jetzt anfragen
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="service-box">
                <div className="service-icon">
                  <Scan />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Flexible Mietkonditionen
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mieten Sie unsere professionellen 3D-Scanner tage-, wochen- oder monatsweise. 
                  Inklusive Einweisung und technischem Support.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <Scan />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Service & Support
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Umfassende Betreuung von der Geräteauswahl bis zur Datenauswertung. 
                  Schulungen und technischer Support inklusive.
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

export default Scanner;
import { Scan, AlertTriangle } from "lucide-react";
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
      price: "Nicht verfügbar"
    },
    {
      name: "Leica RTC360",
      range: "0,5 - 130 m", 
      accuracy: "±1 mm",
      scanRate: "2.000.000 Punkte/Sek",
      features: "HDR-Imaging, VIS-Technologie",
      price: "Nicht verfügbar"
    },
    {
      name: "Trimble X7",
      range: "0,6 - 80 m",
      accuracy: "±2 mm", 
      scanRate: "500.000 Punkte/Sek",
      features: "Selbstnivellierend, robust",
      price: "Nicht verfügbar"
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
              3D-Scanner Vermietung - Geschäftstätigkeit eingestellt
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Aufgrund der Insolvenz ist die Vermietung von 3D-Scanner-Technologie nicht mehr möglich
            </p>
          </div>
        </section>

        {/* Insolvency Notice */}
        <section className="py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h2 className="text-2xl font-bold text-destructive">
                  Wichtiger Hinweis zur Geschäftstätigkeit
                </h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Wir müssen Sie darüber informieren, dass unsere Geschäftstätigkeit aufgrund einer 
                Insolvenz eingestellt wurde. Die Vermietung von 3D-Scanner-Geräten ist daher nicht mehr möglich.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Für Rückfragen stehen wir Ihnen weiterhin zur Verfügung. Wir bedanken uns für 
                Ihr Vertrauen und die langjährige Zusammenarbeit.
              </p>
            </div>
          </div>
        </section>

        {/* Scanner Models Table */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Scanner-Modelle (nicht mehr verfügbar)
            </h2>
            
            <div className="bg-muted/30 rounded-lg overflow-hidden opacity-60">
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
                        Verfügbarkeit
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Status
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
                              <h3 className="font-semibold text-muted-foreground line-through">{scanner.name}</h3>
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
                        <td className="px-6 py-6 text-destructive border-b border-border font-semibold">
                          {scanner.price}
                        </td>
                        <td className="px-6 py-6 border-b border-border">
                          <span className="inline-block bg-destructive/20 text-destructive px-4 py-2 rounded-md text-sm font-semibold">
                            Eingestellt
                          </span>
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
        <section className="py-16 px-8 bg-muted/50 opacity-60">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="service-box">
                <div className="service-icon">
                  <AlertTriangle className="text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-muted-foreground line-through">
                  Flexible Mietkonditionen
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Die Vermietung von professionellen 3D-Scannern ist aufgrund der Insolvenz 
                  nicht mehr möglich. Alle Mietkonditionen wurden eingestellt.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <AlertTriangle className="text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-muted-foreground line-through">
                  Service & Support
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Technischer Support und Schulungen können nicht mehr angeboten werden. 
                  Für bestehende Anfragen kontaktieren Sie uns bitte direkt.
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
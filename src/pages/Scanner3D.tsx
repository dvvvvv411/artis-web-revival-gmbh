import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Scanner3D = () => {
  const scanners = [
    {
      name: "Leica BLK360",
      range: "60m",
      accuracy: "6mm @ 10m",
      speed: "360.000 Punkte/Sek",
      weight: "1.6 kg",
      image: "/api/placeholder/120/120"
    },
    {
      name: "FARO Focus S70",
      range: "70m", 
      accuracy: "1mm @ 10m",
      speed: "976.000 Punkte/Sek",
      weight: "5.2 kg",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Trimble X7",
      range: "80m",
      accuracy: "2mm @ 10m", 
      speed: "500.000 Punkte/Sek",
      weight: "6.2 kg",
      image: "/api/placeholder/120/120"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-1">
        {/* Banner */}
        <div className="corporate-banner bg-primary text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">3D-Scanner</h1>
            <p className="text-xl">
              Professionelle 3D-Vermessung mit modernster Laserscanning-Technologie
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Unsere 3D-Scanner</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold">Modell</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Bild</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Reichweite</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Genauigkeit</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Messgeschwindigkeit</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Gewicht</th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">Anfrage</th>
                  </tr>
                </thead>
                <tbody>
                  {scanners.map((scanner, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">{scanner.name}</td>
                      <td className="border border-gray-300 p-4">
                        <img 
                          src={scanner.image} 
                          alt={scanner.name}
                          className="w-16 h-16 object-cover rounded border"
                        />
                      </td>
                      <td className="border border-gray-300 p-4">{scanner.range}</td>
                      <td className="border border-gray-300 p-4">{scanner.accuracy}</td>
                      <td className="border border-gray-300 p-4">{scanner.speed}</td>
                      <td className="border border-gray-300 p-4">{scanner.weight}</td>
                      <td className="border border-gray-300 p-4 text-center">
                        <Button variant="default" size="sm">
                          Jetzt anfragen
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Interessiert an unseren 3D-Scanner-Lösungen?</h3>
              <p className="text-gray-600 mb-6">
                Kontaktieren Sie uns für eine unverbindliche Beratung und individuelle Angebote.
              </p>
              <Button variant="default" size="lg">
                Beratungstermin vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Scanner3D;
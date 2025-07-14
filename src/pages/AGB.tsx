import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="AGB - artis GmbH"
        description="Allgemeine Geschäftsbedingungen der artis GmbH für Bauplanung und 3D-Scanner Vermietung."
        keywords="AGB, Geschäftsbedingungen, Vertragsbedingungen, Rechtliches"
      />
      <Header />
      
      <div className="corporate-container">
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Geschäftsbedingungen der artis GmbH
            </p>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">§ 1 Geltungsbereich</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Lieferung von Waren 
                  und die Erbringung von Leistungen, die zwischen der artis GmbH (nachfolgend "Auftragnehmer") 
                  und ihren Auftraggebern (nachfolgend "Auftraggeber") abgeschlossen werden.
                </p>
                
                <p>
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
                  werden nur dann und insoweit Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich 
                  schriftlich zugestimmt hat.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">§ 2 Vertragsschluss</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Angebote des Auftragnehmers sind freibleibend und unverbindlich, soweit sie nicht ausdrücklich 
                  als verbindlich bezeichnet sind oder eine bestimmte Annahmefrist enthalten.
                </p>
                
                <p>
                  Der Vertrag kommt durch schriftliche Auftragserteilung des Auftraggebers und deren Annahme durch 
                  den Auftragnehmer oder durch Beginn der Ausführung der beauftragten Leistung zustande.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">§ 3 Leistungsumfang</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Art und Umfang der zu erbringenden Leistungen ergeben sich aus der jeweiligen Auftragserteilung 
                  sowie etwaigen schriftlichen Zusatzvereinbarungen.
                </p>
                
                <p>
                  Änderungen oder Ergänzungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung. 
                  Zusätzliche Leistungen werden nach Aufwand berechnet.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">§ 4 Vergütung und Zahlungsbedingungen</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Die Vergütung richtet sich nach der jeweiligen Auftragserteilung. Alle Preise verstehen sich 
                  zuzüglich der gesetzlichen Umsatzsteuer.
                </p>
                
                <p>
                  Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug zur Zahlung fällig. Bei Überschreitung 
                  der Zahlungsfrist gerät der Auftraggeber ohne weitere Mahnung in Verzug.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">§ 5 Haftung</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für 
                  leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der Verletzung des Lebens, 
                  des Körpers oder der Gesundheit oder aus der Verletzung wesentlicher Vertragspflichten entstehen.
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

export default AGB;
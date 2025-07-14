import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Datenschutz - artis GmbH"
        description="Datenschutzerklärung der artis GmbH. Informationen zum Umgang mit personenbezogenen Daten."
        keywords="Datenschutz, DSGVO, Datenschutzerklärung, Privatsphäre"
      />
      <Header />
      
      <div className="corporate-container">
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Datenschutz auf einen Blick</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Datenerfassung auf dieser Website</h3>
                <p>
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Hosting und Content Delivery Networks (CDN)</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Externes Hosting</h3>
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                  es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, 
                  handeln.
                </p>

                <p>
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter 
                  (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Ihre Rechte</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                  Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema 
                  Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
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

export default Datenschutz;
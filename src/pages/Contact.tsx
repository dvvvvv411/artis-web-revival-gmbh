import { MapPin, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOHelmet } from "@/components/SEOHelmet";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Kontakt - ASH artis GmbH"
        description="Kontaktieren Sie ASH artis GmbH für Ihre Bauplanung und 3D-Technik Anfragen. E-Mail und Anschrift für direkten Kontakt."
        keywords="Kontakt, Telefon, E-Mail, Adresse, Beratung, Anfrage, artis GmbH"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Kontakt
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Anfrage und beraten Sie gerne.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-foreground">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      ASH artis GmbH<br />
                      Bessemerstr. 82<br />
                      1 Süd<br />
                      12103 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>


                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">
                      info@artis-projects.com<br />
                      service@artis-projects.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Geschäftszeiten</h3>
                    <p className="text-muted-foreground">
                      Montag - Freitag: 8:00 - 17:00 Uhr<br />
                      Samstag: 9:00 - 12:00 Uhr<br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-foreground">
                Nachricht senden
              </h2>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    className="mt-2"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">E-Mail *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="mt-2"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Betreff</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    type="text" 
                    className="mt-2"
                    placeholder="Betreff Ihrer Nachricht"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Nachricht *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="mt-2 min-h-[120px]"
                    placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:border-primary/90 transition-colors py-3"
                >
                  Nachricht senden
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  * Pflichtfelder müssen ausgefüllt werden
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Warum ASH artis GmbH wählen?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Erfahrung</h3>
                <p className="text-muted-foreground">
                  Über 15 Jahre Expertise in der Baubranche und Ingenieurswesen
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qualität</h3>
                <p className="text-muted-foreground">
                  Höchste Standards bei Planung, Beratung und Projektabwicklung
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Service</h3>
                <p className="text-muted-foreground">
                  Persönliche Betreuung und maßgeschneiderte Lösungen für Ihr Projekt
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

export default Contact;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Kontakt</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu unseren Ingenieursdienstleistungen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Unsere Kontaktdaten</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Adresse</h3>
                        <p className="text-muted-foreground">
                          artis GmbH<br />
                          Musterstraße 123<br />
                          12345 Musterstadt<br />
                          Deutschland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Telefon</h3>
                        <p className="text-muted-foreground">+49 (0) 123 456-789</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">E-Mail</h3>
                        <p className="text-muted-foreground">info@artis-gmbh.de</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-foreground mb-3">Geschäftszeiten</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Montag - Freitag: 8:00 - 18:00 Uhr</p>
                      <p>Samstag: 9:00 - 12:00 Uhr</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktformular</h2>
                  
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Ihr vollständiger Name"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="ihre.email@beispiel.de"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        placeholder="Ihr Unternehmen (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Ihre Telefonnummer (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="Betreff Ihrer Anfrage"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        rows={6}
                        required 
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border border-primary hover:border-primary/90"
                      >
                        Nachricht senden
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
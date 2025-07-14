import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-foreground mb-1">
                  <strong>Cookies & Datenschutz</strong>
                </p>
                <p className="text-muted-foreground">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                  Weitere Informationen finden Sie in unserer{" "}
                  <a 
                    href="/datenschutz" 
                    className="text-primary hover:underline"
                  >
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                onClick={declineCookies}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Ablehnen
              </Button>
              <Button
                onClick={acceptCookies}
                size="sm"
                className="text-xs"
              >
                Akzeptieren
              </Button>
              <Button
                onClick={declineCookies}
                variant="ghost"
                size="sm"
                className="p-1 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
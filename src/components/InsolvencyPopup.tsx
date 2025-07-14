import { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InsolvencyPopupProps {
  onClose: () => void;
}

export const InsolvencyPopup = ({ onClose }: InsolvencyPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup on this page
    const currentPath = window.location.pathname;
    const seenKey = `insolvency-popup-seen-${currentPath}`;
    const hasSeenPopup = localStorage.getItem(seenKey);
    
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    const currentPath = window.location.pathname;
    const seenKey = `insolvency-popup-seen-${currentPath}`;
    localStorage.setItem(seenKey, "true");
    setIsOpen(false);
    onClose();
  };

  const handleLawFirmClick = () => {
    window.open("https://www.hess-partner.de", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl border-2 bg-white" style={{ borderColor: 'hsl(var(--insolvency-orange))' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center" style={{ color: 'hsl(var(--insolvency-orange-dark))' }}>
            Insolvenzbekanntmachung
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">
              Hiermit wird bekannt gegeben, dass über das Vermögen der Firma eröffnet wurde.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4" style={{ 
            backgroundColor: 'hsl(var(--insolvency-orange-light))', 
            borderLeftColor: 'hsl(var(--insolvency-orange))' 
          }}>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'hsl(var(--insolvency-orange-dark))' }}>
              Insolvenzverwalter:
            </h3>
            <div className="space-y-2">
              <p className="font-semibold">Dr. Kai Henrik Heß</p>
              <p>Rechtsanwalt</p>
              <p>Fachanwalt für Insolvenzrecht</p>
              <p>Kanzlei Dr. Heß & Partner</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Tel: +49 (0) 123 456 789</p>
              <p>E-Mail: info@hess-partner.de</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Weitere Informationen erhalten Sie über die Kanzlei des Insolvenzverwalters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleLawFirmClick}
                className="text-white font-semibold"
                style={{ backgroundColor: 'hsl(var(--insolvency-orange))' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Zur Kanzlei Website
              </Button>
              
              <Button
                onClick={handleClose}
                variant="outline"
                className="border-2"
                style={{ borderColor: 'hsl(var(--insolvency-orange))', color: 'hsl(var(--insolvency-orange-dark))' }}
              >
                <X className="w-4 h-4 mr-2" />
                Schließen
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
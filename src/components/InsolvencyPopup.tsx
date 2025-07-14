import { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    // Show popup automatically on every page change
    setIsOpen(true);
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleLawFirmClick = () => {
    window.open("https://hess-anwaltskanzlei.de", "_blank");
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
              Hiermit wird bekannt gegeben, dass über das Vermögen der Gesellschaft das Insolvenzverfahren eröffnet wurde.
            </p>
            <p className="text-base text-gray-700">
              Alle Zahlungen sind ab sofort ausschließlich an den Insolvenzverwalter zu leisten.
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
              <div className="mt-4 space-y-1">
                <p>Marienstr. 19/20</p>
                <p>10117 Berlin</p>
              </div>
              <div className="mt-4 space-y-1">
                <p>Tel.: (030) 75420496</p>
                <p>E-Mail: k.hess@hess-anwaltskanzlei.de</p>
                <p>Internet: https://hess-anwaltskanzlei.de</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Gläubiger werden gebeten, ihre Forderungen beim Insolvenzverwalter anzumelden. 
              Weitere Informationen zum Verfahren erhalten Sie über die Kanzlei des Insolvenzverwalters.
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
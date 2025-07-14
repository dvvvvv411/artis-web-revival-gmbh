import { AlertTriangle, Phone, Mail } from "lucide-react";

const InsolvencyBanner = () => {
  return (
    <div className="insolvency-banner">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-center">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-semibold">
              Insolvenzverfahren eröffnet am [Datum] - Geschäftsbetrieb wird fortgeführt
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <span>Insolvenzverwalter: Dr. Kai Henrik Heß</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+49 (0) XXX XXXXXXX</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>hess@example.de</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsolvencyBanner;
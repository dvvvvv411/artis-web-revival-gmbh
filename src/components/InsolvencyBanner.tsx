import { AlertTriangle, ExternalLink } from "lucide-react";

const InsolvencyBanner = () => {
  return (
    <div className="bg-orange-500 text-white py-4 px-6 mb-8">
      <div className="flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">
            Insolvenzverfahren eröffnet
          </h3>
          <p className="mb-3">
            Über unser Unternehmen wurde ein Insolvenzverfahren eröffnet. Die Verwaltung erfolgt durch:
          </p>
          <div className="bg-white/10 p-4 rounded-lg mb-4">
            <div className="font-semibold mb-2">Dr. Kai Henrik Heß</div>
            <div>Marienstr. 19/20</div>
            <div>10117 Berlin</div>
            <div>Tel.: (030) 75420496</div>
            <div>E-Mail: k.hess@hess-anwaltskanzlei.de</div>
          </div>
          <a 
            href="https://hess-anwaltskanzlei.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Zur Anwaltskanzlei
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsolvencyBanner;
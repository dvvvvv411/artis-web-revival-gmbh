import { useLocation } from "react-router-dom";
import { InsolvencyPopup } from "@/components/InsolvencyPopup";

export const InsolvencyWrapper = () => {
  const location = useLocation();

  return <InsolvencyPopup key={location.pathname} onClose={() => {}} />;
};
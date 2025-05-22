import { poppins } from "../fonts";
import { BiFile, BiFilterAlt, BiMoon } from "react-icons/bi";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

export default function KeyFeatures() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900" id="features">
      <FeatureOne/>
      <FeatureTwo/>
      <FeatureThree/>
      
    </section>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import WeightLoss from "./GENERAL_HEALTH/Weight_loss/WeightLoss";
import MentalHealth from "./GENERAL_HEALTH/Mental_Health/MentalHealth";
import KetoDiet from "./GENERAL_HEALTH/Keto_Diet/KetoDiet";
import NutritionDiet from "./GENERAL_HEALTH/Nutrition_Diet/NutritionDiet";
import AlternativeRemedies from "./GENERAL_HEALTH/Alternative_Remedies/AlternativeRemedies";
import BodyGrowth from "./GENERAL_HEALTH/Body_Growth/BodyGrowth";
import StressAnxiety from "./WELLNESS_PRODUCT/Stress_Anxiety/StressAnxiety";
import DigestiveHealth from "./WELLNESS_PRODUCT/Digestive_Health/DigestiveHealth";
import HerbalSolutions from "./WELLNESS_PRODUCT/Herbal_Solution/HerbalSolutions";
import NaturalRemedies from "./WELLNESS_PRODUCT/Natural_Remedies/NaturalRemedies";
import MenSelfBeauty from "./MENS_HEALTH/Men_Self_Beauty/MenSelfBeauty";
import MenSkinCare from "./MENS_HEALTH/Men_Skin_Care/MenSkinCare";
import MenYogaMeditation from "./MENS_HEALTH/Men_Yoga_Meditation/MenYogaMeditation";
import MenHairCare from "./MENS_HEALTH/Men_Hair_Care/MenHairCare";
import MuscleBuilding from "./MENS_HEALTH/Muscles_Building/MuscleBuilding";
import MenWeightLoss from "./MENS_HEALTH/Men_Weight_Loss/MenWeightLoss";
import MenSleepInsomnia from "./MENS_HEALTH/Men_Sleep_Insomnia/MenSleepInsomnia";
import WomensSkinCare from "./WOMEN_HEALTH/Women_Skin_Care/WomensSkinCare";
import WomenWeightLoss from "./WOMEN_HEALTH/Women_Wieght_Loss/WomenWeightLoss";
import WomenStressAnxiety from "./WOMEN_HEALTH/Women_Stress_Anxiety/WomenStressAnxiety";
import WomenSleepInsomnia from "./WOMEN_HEALTH/Women_Sleep_Insomnia/WomenSleepInsomnia";
import WomenHairCareloss from "./WOMEN_HEALTH/Women_Hair_Care/WomenHairCareloss";
import WomenYogaMeditation from "./WOMEN_HEALTH/Women_Yoga_Meditation/WomenYogaMeditation";
import WomenPersonalCare from "./WOMEN_HEALTH/Women_Personal_Care/WomenPersonalCare";

const XexoneHealth = () => {
  return (
    <>
      {/* Genreral Health Components Routing  */}
      <Routes>
        <Route path="/Weight-Loss" element={<WeightLoss />} />
        <Route path="/Mental-Health" element={<MentalHealth />} />
        <Route path="/Keto-Diet" element={<KetoDiet />} />
        <Route path="/Nutrition-Diet" element={<NutritionDiet />} />
        <Route path="/Alternative-Remedies" element={<AlternativeRemedies />} />
        <Route path="/Body-Growth" element={<BodyGrowth />} />
      </Routes>

      {/* Welleness Components routing  */}
      <Routes>
        <Route path="/Stress-Anxiety" element={<StressAnxiety />} />
        <Route path="/Digestive-Health" element={<DigestiveHealth />} />
        <Route path="/Herbal-Solutions" element={<HerbalSolutions />} />
        <Route path="/Natural-Remedies" element={<NaturalRemedies />} />
      </Routes>

      {/* Men's Health Components Routing  */}
      <Routes>
        <Route path="/Men-Self-Beauty" element={<MenSelfBeauty />} />
        <Route path="/Men-Skin-Care" element={<MenSkinCare />} />
        <Route path="/Men-Yoga-Meditation" element={<MenYogaMeditation />} />
        <Route path="/Men-Hair-Care" element={<MenHairCare />} />
        <Route path="/Muscle-Building" element={<MuscleBuilding />} />
        <Route path="/Men-Weight-Loss" element={<MenWeightLoss />} />
        <Route path="/Men-Sleep-Insomnia" element={<MenSleepInsomnia />} />
      </Routes>

      {/* Women's Health Components Routing  */}
   <Routes>
    <Route path="/Womens-Skin-Care" element={<WomensSkinCare/>}/>
    <Route path="/Women-Weight-Loss" element={<WomenWeightLoss/>}/>
    <Route path="/Women-Stress-Anxiety" element={<WomenStressAnxiety/>}/>
    <Route path="/Women-Sleep-Insomnia" element={<WomenSleepInsomnia/>}/>
    <Route path="/Women-Hair-Care-loss" element={<WomenHairCareloss/>}/>
    <Route path="/Women-Yoga-Meditation" element={<WomenYogaMeditation/>}/>
    <Route path="/Women-Personal-Care" element={<WomenPersonalCare/>}/>
   </Routes>
    </>
  );
};

export default XexoneHealth;

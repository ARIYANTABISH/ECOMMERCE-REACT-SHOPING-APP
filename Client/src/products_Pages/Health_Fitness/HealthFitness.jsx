import React from "react";
import { Route, Routes } from "react-router-dom";
import BodyCare from "./WELLNES/Body_Care/BodyCare";
import HairCare from "./WELLNES/Hair_Care/HairCare";
import Foodsupplements from "./WELLNES/Food_supplement/Foodsupplements";
import Natural from "./WELLNES/Natural/Natural";
import Madesan from "./WELLNES/Madesan/Madesan";
import Sugar from "./WELLNES/Sugar/Sugar";
import BloodPressure from "./WELLNES/Blood_pressure/BloodPressure";
import SkinCare from "./Beauty_care/Skin_care/SkinCare";
import Hair from "./Beauty_care/Hair_care/Hair";
import Fragrance from "./Beauty_care/Fragrance/Fragrance";
import FootHandNail from "./Beauty_care/Foot_Hair_Nail/FootHandNail";
import ToolsAccessories from "./Beauty_care/Tool_acessories/ToolsAccessories";
import ShaveHairRemoval from "./Beauty_care/Shave_Hair removal/ShaveHairRemoval";
import PersonalCare from "./Beauty_care/Personal_care/PersonalCare";
import OralCare from "./Beauty_care/Oral_care/OralCare";
import VitaminsMinerals from "./Sports_Fitness/Vitamins_mineral/VitaminsMinerals";
import HerbalBotanical from "./Sports_Fitness/Herbal_Botanical/HerbalBotanical";
import SSupplements from "./Sports_Fitness/Supplement/SSupplements";
import HerbalSleep from "./Sports_Fitness/Herbal_sleep/HerbalSleep";
import CognitiveHealth from "./Sports_Fitness/Congnitive_Health/CognitiveHealth";
import WeightLossElectronics from "./Weight_Loss/Electronics/WeightLossElectronics";
import HerbalNatural from "./Weight_Loss/Herbal_Natural/HerbalNatural";
import Sportsproducts from "./Weight_Loss/Sports_Fitness/Sportsproducts";

const HealthFitness = () => {
  return (
    <>

                         {/* WELLNES Produtcs components routing  */}
      <Routes>
        <Route path="/Body-Care" element={<BodyCare/>}/>
        <Route path="/Hair-Care" element={<HairCare/>}/>
        <Route path="/Food-supplements" element={<Foodsupplements/>}/>
        <Route path="/Natural" element={<Natural/>}/> 
        <Route path="/Madesan" element={<Madesan/>}/>
        <Route path="/Sugar" element={<Sugar/>}/> 
        <Route path="/Blood-Pressure" element={<BloodPressure/>}/> 
      </Routes>

                              {/* Body Care Products components routing  */}
      <Routes>
        <Route path="/Skin-Care" element={<SkinCare/>}/>
        <Route path="/Hair" element={<Hair/>}/>
        <Route path="/Fragrance" element={<Fragrance/>}/>
        <Route path="/Foot-Hand-Nail" element={<FootHandNail/>}/>
        <Route path="/Tools-Accessories" element={<ToolsAccessories/>}/>
        <Route path="/Shave-Hair-Removal" element={<ShaveHairRemoval/>}/>
        <Route path="/Personal-Care" element={<PersonalCare/>}/> 
        <Route path="/Oral-Care" element={<OralCare/>}/> 
      </Routes>


         {/* Sports and fitness product components routing */}
      <Routes>
        <Route path="/Vitamins-Minerals" element={<VitaminsMinerals/>}/>
        <Route path="/Herbal-Botanical" element={<HerbalBotanical/>}/>
        <Route path="/sSupplements" element={<SSupplements/>}/>
        <Route path="/Herbal-Sleep" element={<HerbalSleep/>}/>
        <Route path="/Cognitive-Health" element={<CognitiveHealth/>}/> 
      </Routes>

      {/* Weight products components routing  */}
      <Routes>
        <Route path="/Weight-Loss-Electronics" element={<WeightLossElectronics/>}/>
        <Route path="/Herbal-Natural" element={<HerbalNatural/>}/>
        <Route path="/Sports-products" element={<Sportsproducts/>}/> 
      </Routes>
    </>
  );
};

export default HealthFitness;

import React from "react";
import Pets from "../products_Pages/Pets/Pets";
import HomeKitchen from "../products_Pages/Home_Kitchen/HomeKitchen";
import HealthFitness from "../products_Pages/Health_Fitness/HealthFitness";
import Girls from "../products_Pages/Kids/Girls";
import Boys from "../products_Pages/Kids/Boys";
import Clothing from "../products_Pages/Men_Products/Clothing";
import Accessorie from "../products_Pages/Men_Products/Accessorie";
import Footweare from "../products_Pages/Men_Products/Footweare";
import MenInnerWears from "../products_Pages/Men_Products/MenInnerWears";
import WomenClothing from "../products_Pages/Women_Products/WomenClothing";
import WomenFootwear from "../products_Pages/Women_Products/WomenFootwear";
import WomenBeauty from "../products_Pages/Women_Products/WomenBeauty";
import WomenAccessories from "../products_Pages/Women_Products/WomenAccessories";
import LingerieNightWear from "../products_Pages/Women_Products/LingerieNightWear";
import Computer from "../products_Pages/Tech_Electronics/Computer";
import AccessoriesSupplies from "../products_Pages/Tech_Electronics/AccessoriesSupplies";
import WearAbleTech from "../products_Pages/Tech_Electronics/WearAbleTech";
import Software from "../products_Pages/Tech_Electronics/Software";
import XexoneHealth from "../products_Pages/xexone_health/XexoneHealth";
const AllRoutes = () => {
  return (
    <>
      {/* xexone health products routing  */}
      <XexoneHealth />

      {/* Tech & Electronics Products Routing Components with categories */}
      <Computer />
      <AccessoriesSupplies />
      <WearAbleTech />
      <Software />

      {/* WoMen Products Routing Components with categories */}
      <WomenClothing />
      <WomenFootwear />
      <WomenBeauty />
      <WomenAccessories />
      <LingerieNightWear />

      {/* Men Products Routing Components with categories */}
      <Clothing />
      <Accessorie />
      <Footweare />
      <MenInnerWears />

      {/* kids Products Routing Components with categories*/}
      <Girls />
      <Boys />

      {/* Health And Fitness Products Routing Components */}
      <HealthFitness />

      {/* Home and Kitchen Products Routing Components */}
      <HomeKitchen />

      {/* Pets Products Routing Components */}
      <Pets />
    </>
  );
};

export default AllRoutes;

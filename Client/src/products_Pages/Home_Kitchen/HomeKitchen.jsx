import React from 'react'
import { Route, Routes } from 'react-router-dom'
import KitchenDining from './Kitchen/Kitchen_Dining/KitchenDining'
import Bath from './Kitchen/Bath/Bath'
import FloorCare from './Kitchen/Floor_care/FloorCare'
import KElectronics from './Kitchen/Electronics/KElectronics'
import CookingUtensils from './Kitchen/Cooking_Untensils/CookingUtensils'
import Stove from './Kitchen/Stove/Stove'
import CleaningSupplies from './Kitchen/Cooking_Supplies/CleaningSupplies'
import RomeElectronics from './ROME/Electronics/RomeElectronics'
import Bedding from './ROME/Bedding/Bedding'
import Furniture from './ROME/Furniture/Furniture'
import Lightingfixtures from './ROME/Lighting_fixtures/Lightingfixtures'
import HomeClothing from './ROME/Clothing/HomeClothing'
import Refrigerator from './HEATING_COOLER/Refrigerator/Refrigerator'
import AirConditioner from './HEATING_COOLER/Air_conditioner/AirConditioner'
import SmartFan from './HEATING_COOLER/Smart_fan/SmartFan'
import HeatingProducts from './HEATING_COOLER/Heating_Products/HeatingProducts'

const HomeKitchen = () => {
  return (
    <>
                       {/* KITCHEN PRODUCTS COMPONENTS ROUTING  */}
    <Routes>
        <Route path='/Kitchen-Dining' element={<KitchenDining/>}/>
        <Route path='/Bath' element={<Bath/>}/>
        <Route path='/Floor-Care' element={<FloorCare/>}/>
        <Route path='/Kithcen-Electronics' element={<KElectronics/>}/>
        <Route path='/Cooking-Utensils' element={<CookingUtensils/>}/>
        <Route path='/Stove' element={<Stove/>}/>
        <Route path='/Cleaning-Supplies' element={<CleaningSupplies/>}/>
    </Routes>

    {/* ROME PRODUCTS COMPONENTS ROUTING  */}
    <Routes>
        <Route path='/Rome-Electronics' element={<RomeElectronics/>}/>
        <Route path='/Bedding' element={<Bedding/>}/>
        <Route path='/Furniture' element={<Furniture/>}/>
        <Route path='/Lighting-fixtures' element={<Lightingfixtures/>}/> 
        <Route path='/Home-Clothing' element={<HomeClothing/>}/> 
    </Routes>

    <Routes>
        <Route path='/Refrigerator' element={<Refrigerator/>}/>
        <Route path='/Air-Conditioner' element={<AirConditioner/>}/>
        <Route path='/Smart-Fan' element={<SmartFan/>}/> 
        <Route path='/Heating-Products' element={<HeatingProducts/>}/> 
    </Routes>
    </>
  )
}

export default HomeKitchen
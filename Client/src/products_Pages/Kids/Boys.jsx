import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WaterBottles from './ARIVVALS/Water_bottels/WaterBottles'
import ElectricProducts from './ARIVVALS/Electeric_product/ElectricProducts'
import Hates from './Boys_clothings/Hats/Hates'
import BoyShorts from './Boys_clothings/Shorts/BoyShorts'
import BoysTrousers from './Boys_clothings/Trouser/BoysTrousers'
import BoysPents from './Boys_clothings/Pents/BoysPents'
import BoysSwimwear from './Boys_clothings/Swimwear/BoysSwimwear' 
import BoysFootwear from './Boys_clothings/Footweare/BoysFootwear' 
import BoysTShirts from './Boys_clothings/T_shirt/BoysTShirts'
import JacketsCoates from './Boys_clothings/Jackets_coats/JacketsCoates'
const Boys = () => {
  return (
    <>
    <Routes>
        <Route path='/Boys-Trousers' element={<BoysTrousers/>}/>
        <Route path='/Boys-Shorts' element={<BoyShorts/>}/>     
        <Route path='/Boys-T-Shirts' element={<BoysTShirts/>}/>
        <Route path='/Boys-Jackets-and-Coates' element={<JacketsCoates/>}/>
        <Route path='/Boys-Pents' element={<BoysPents/>}/>
        <Route path='/Boys-Swimwear' element={<BoysSwimwear/>}/> 
        <Route path='/Boys-Footwear' element={<BoysFootwear/>}/> 
    </Routes>




            {/* new arrivals components products routing  */}
    <Routes>
        <Route path='/Water-Bottles' element={<WaterBottles/>}/>
        <Route path='/kids-Hats' element={<Hates/>}/>
        <Route path='/kids-Electric-Products' element={<ElectricProducts/>}/>
    </Routes>
    </>
  )
}

export default Boys
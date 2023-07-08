 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GirlsBabyTshirts from './Girls_Clothing/T_shirt/GirlsBabyTshirts'
import Dresses from './Girls_Clothing/Dresses/Dresses'
import BabyJacketsCoats from './Girls_Clothing/Jackets_coats/BabyJacketsCoats'
import BabyShortsandSkirts from './Girls_Clothing/Shorts_Skirts/BabyShortsandSkirts'
import Trousers from './Girls_Clothing/Trouser/Trousers'
import BabyPents from './Girls_Clothing/Baby_Pents/BabyPents'
import Swimwear from './Girls_Clothing/Swimwear/Swimwear'
import Footwear from './Girls_Clothing/Foot_wear/Footwear'
import GirlsBabyAccessories from './Girls_Clothing/Acessories/GirlsBabyAccessories'
import SocksandTights from './Girls_Clothing/Socks_tigths/SocksandTights'
import BabyGrows from './Girls_Clothing/Baby_grows/BabyGrows'
 
 const Girls = () => {
   return (
     <>
     <Routes>
      <Route path='/Girls-T-Shirts' element={<GirlsBabyTshirts/>} />
      <Route path='/Girls-Dresses' element={<Dresses/>} />
      <Route path='/Girls-Jackets-and-Coats' element={<BabyJacketsCoats/>} />
      <Route path='/Girls-Shorts-and-Skirts' element={<BabyShortsandSkirts/>} />
      <Route path='/Girls-Trousers' element={<Trousers/>} />
      <Route path='/Baby-Pents' element={<BabyPents/>} />
      <Route path='/Girls-Swimwear' element={<Swimwear/>} />
      <Route path='/Girls-Footwear' element={<Footwear/>} />
      <Route path='/kids-Accessories' element={<GirlsBabyAccessories/>} />
      <Route path='/kids-Socks-and-Tights' element={<SocksandTights/>} />
      <Route path='/Baby-Grows' element={<BabyGrows/>} />
     </Routes>
     </>
   )
 }
 
 export default Girls
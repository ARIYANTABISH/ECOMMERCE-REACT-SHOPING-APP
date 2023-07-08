import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JeansandTrousers from './CLOTHING/Jeans_Trousers/JeansandTrousers'
import WomenTShirts from './CLOTHING/T_Shirts/WomenTShirts' 
import GirlsShortsandSkirts from './CLOTHING/Shorts_Skirts/GirlsShortsandSkirts'
import WomenJacketsandCoats from './CLOTHING/Jackets_Coats/WomenJacketsandCoats'
import WomenShirts from './CLOTHING/Shirts/WomenShirts'
import HoodiesandSweatshirts from './CLOTHING/Hoodies_Sweatshirts/HoodiesandSweatshirts'
import Bodysuits from './CLOTHING/Bodysuits/Bodysuits'
import WomenDresses from './CLOTHING/Dresses/WomenDresses'
import UnstitchedDresses from './CLOTHING/Unstitched_Dresses/UnstitchedDresses'

const WomenClothing = () => {
  return (
    <>
    <Routes>
        <Route path='/women-Jeans-and-Trousers' element={<JeansandTrousers/>} />
        <Route path='/Women-T-Shirts' element={<WomenTShirts/>} />
        <Route path='/Girls-Shorts-and-Skirts' element={<GirlsShortsandSkirts/>} />
        <Route path='/Women-Jackets-and-Coats' element={<WomenJacketsandCoats/>} />
        <Route path='/Women-Shirts' element={<WomenShirts/>} />
        <Route path='/women-Hoodies-and-Sweatshirts' element={<HoodiesandSweatshirts/>} />
        <Route path='/women-Bodysuits' element={<Bodysuits/>} />
        <Route path='/Women-Dresses' element={<WomenDresses/>} />
        <Route path='/women-Unstitched-Dresses' element={<UnstitchedDresses/>} />
    </Routes>
    </>
  )
}

export default WomenClothing
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import TShirts from './CLOTHING/T_Shirts/TShirts'
import PoloShirts from './CLOTHING/Polo_shirts/PoloShirts'
import CoatsJackets from './CLOTHING/Jackets_Coats/CoatsJackets'
import SweatShirts from './CLOTHING/Sweat_Shirts/SweatShirts'
import SweatPants from './CLOTHING/Sweat_Pants/SweatPants'
import MenJeans from './CLOTHING/Jeans/MenJeans'
import MenShirts from './CLOTHING/Shirts/MenShirts'
import MenShorts from './CLOTHING/Shorts/MenShorts'
import MenSwimwear from './Men_Swimwear/MenSwimwear'
import MenTrousers from './CLOTHING/Trousers/MenTrousers'

const Clothin = () => {
  return (
    <>
    <Routes>
        <Route path='/Men-T-Shirts' element={<TShirts/>} />
        <Route path='/Men-Polo-Shirts' element={<PoloShirts/>} />
        <Route path='/Men-Coats-Jackets' element={<CoatsJackets/>} />
        <Route path='/Men-Sweat-Shirts' element={<SweatShirts/>} />
        <Route path='/Men-Sweat-Pants' element={<SweatPants/>} />
        <Route path='/Men-Jeans' element={<MenJeans/>} />
        <Route path='/Men-Shirts' element={<MenShirts/>} />
        <Route path='/Men-Shorts' element={<MenShorts/>} />
        <Route path='/Men-Swimwear' element={<MenSwimwear/>} />
        <Route path='/Men-Trousers' element={<MenTrousers/>} />
    </Routes>
    </>
  )
}

export default Clothin
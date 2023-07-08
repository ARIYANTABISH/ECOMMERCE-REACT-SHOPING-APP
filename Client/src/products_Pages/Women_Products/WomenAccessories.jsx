import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WomenBags from './ACCESSORIES/Bags/WomenBags'
import WomenWatches from './ACCESSORIES/Watches/WomenWatches'
import GirlsJewellery from './ACCESSORIES/Jewellery/GirlsJewellery'
import WomenSocksGloves from './ACCESSORIES/Socks_Gloves/WomenSocksGloves'
import Hairclipstie from './ACCESSORIES/Hair_clips_tie/Hairclipstie'

const WomenAccessories = () => {
  return (
    <>
    <Routes>
        <Route path='/Women-Bags' element={<WomenBags/>}/>
        <Route path='/Women-Watches' element={<WomenWatches/>}/>
        <Route path='/Girls-Jewellery' element={<GirlsJewellery/>}/>
        <Route path='/Women-Socks-Gloves' element={<WomenSocksGloves/>}/>
        <Route path='/women-Hair-clips-tie' element={<Hairclipstie/>}/>
    </Routes>
    </>
  )
}

export default WomenAccessories
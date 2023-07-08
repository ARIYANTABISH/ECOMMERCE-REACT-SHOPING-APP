import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bags from './ACCESSORIES/Bags/Bags'
import Belts from './ACCESSORIES/Belts/Belts'
import MenHats from './ACCESSORIES/Hats/MenHats'
import ScarfsAndGloves from './ACCESSORIES/Scarfs_and_Gloves/ScarfsAndGloves'
import WalletsAndKeychains from './ACCESSORIES/Wallets_and_Keychains/WalletsAndKeychains'
import Jewellery from './ACCESSORIES/Jewellery/Jewellery'
import Sunglasses from './ACCESSORIES/Sunglasses/Sunglasses'

const Accessorie = () => {
  return (
    <>
    <Routes>
        <Route path='/Men-Bags' element={<Bags/>} />
        <Route path='/Men-Belts' element={<Belts/>} />
        <Route path='/Men-Hats' element={<MenHats/>} />
        <Route path='/Men-Scarfs-And-Gloves' element={<ScarfsAndGloves/>} />
        <Route path='/Men-Wallets-and-Keychains' element={<WalletsAndKeychains/>} />
        <Route path='/Men-Jewellery' element={<Jewellery/>} />
        <Route path='/Men-Sunglasses' element={<Sunglasses/>} />
    </Routes>
    </>
  )
}

export default Accessorie
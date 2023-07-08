import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WomenSkinCare from './BEAUTY/Skin_Care/WomenSkinCare'
import WomenHairCare from './BEAUTY/Hair_Care/WomenHairCare'
import WomenFragrances from './BEAUTY/Fragrances/WomenFragrances'
import Makeup from './BEAUTY/Makeup/Makeup'

const WomenBeauty = () => {
  return (
    <>
    <Routes>
        <Route path='/Women-Skin-Care' element={<WomenSkinCare/>}/>
        <Route path='/Women-Hair-Care' element={<WomenHairCare/>}/>
        <Route path='/Women-Fragrances' element={<WomenFragrances/>}/>    
        <Route path='/women-Makeup' element={<Makeup/>}/>   
    </Routes>
    </>
  )
}

export default WomenBeauty
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrasPanties from './LINGERIE_NIGHTWEAR/Bras_Panties/BrasPanties'
import Sleepwear from './LINGERIE_NIGHTWEAR/Sleepwear/Sleepwear'
import Kaftan from './LINGERIE_NIGHTWEAR/Kaftan/Kaftan'
import Innerwear from './LINGERIE_NIGHTWEAR/Innerwear/Innerwear'

const LingerieNightWear = () => {
  return (
    <>
    <Routes>
        <Route path='/women-Bras-Panties' element={<BrasPanties/>}/>
        <Route path='/women-Sleepwear' element={<Sleepwear/>}/>
        <Route path='/women-Kaftan' element={<Kaftan/>}/>
        <Route path='/women-Kaftan' element={<Kaftan/>}/>
        <Route path='/women-Innerwear' element={<Innerwear/>}/>
    </Routes>
    </>
  )
}

export default LingerieNightWear
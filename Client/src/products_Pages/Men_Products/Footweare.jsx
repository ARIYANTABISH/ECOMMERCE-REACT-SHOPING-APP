import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MenBoots from './FOOTWEAR/Boots/MenBoots'
import MenJogers from './FOOTWEAR/Jogers/MenJogers'
import MenSneakers from './FOOTWEAR/Sneakers/MenSneakers'
import MenSlides from './FOOTWEAR/Slides/MenSlides'
import MenSandals from './FOOTWEAR/Sandals/MenSandals'

const Footweare = () => {
  return (
    <>
    <Routes>
        <Route path='/Men-Boots' element={<MenBoots/>} />
        <Route path='/Men-Jogers' element={<MenJogers/>} />
        <Route path='/Men-Sneakers' element={<MenSneakers/>} />
        <Route path='/Men-Slides' element={<MenSlides/>} />
        <Route path='/Men-Sandals' element={<MenSandals/>} />
    </Routes>
    </>
  )
}

export default Footweare
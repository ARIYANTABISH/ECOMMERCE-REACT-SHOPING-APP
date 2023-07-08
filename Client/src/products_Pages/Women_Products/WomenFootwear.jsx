import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WomenBoots from './FOOTWEAR/Boots/WomenBoots'
import WomenSneakers from './FOOTWEAR/Sneakers/WomenSneakers'
import GirlsHeels from './FOOTWEAR/Heels/GirlsHeels'
import SandalsandSlides from './FOOTWEAR/Sandals_Slides/SandalsandSlides'
import GirlsFlats from './FOOTWEAR/Flats/GirlsFlats'
import WomenWedges from './FOOTWEAR/Wedges/WomenWedges'
import WomenSlides from './FOOTWEAR/Women_Slides/WomenSlides'

const WomenFootwear = () => {
  return (
    <>
    <Routes>
        <Route path='/Women-Boots' element={<WomenBoots />}/>
        <Route path='/Women-Sneakers' element={<WomenSneakers />}/>
        <Route path='/Girls-Heels' element={<GirlsHeels/>}/>
        <Route path='/women-Sandals-and-Slides' element={<SandalsandSlides/>}/>
        <Route path='/Girls-Flats' element={<GirlsFlats/>}/>
        <Route path='/Women-Wedges' element={<WomenWedges/>}/>
        <Route path='/Women-Slides' element={<WomenSlides/>}/>
    </Routes>
    </>
  )
}

export default WomenFootwear
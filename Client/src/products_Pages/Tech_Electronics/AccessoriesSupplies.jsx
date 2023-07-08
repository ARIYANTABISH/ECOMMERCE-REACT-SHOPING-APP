import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GPS from './ACCESSORIES_SUPPLIES/GPS/GPS'
import Cables from './ACCESSORIES_SUPPLIES/Cables/Cables'
import Microphones from './ACCESSORIES_SUPPLIES/Microphones/Microphones'
import CameraPhoto from './ACCESSORIES_SUPPLIES/Camera_Photo/CameraPhoto'
import PowerStrips from './ACCESSORIES_SUPPLIES/Power_Strips/PowerStrips'
import EarbudHeadphones from './ACCESSORIES_SUPPLIES/Earbud_Headphones/EarbudHeadphones'
import OnEarHeadphones from './ACCESSORIES_SUPPLIES/OnEar_Headphones/OnEarHeadphones'
import VideoProjectors from './ACCESSORIES_SUPPLIES/Video_Projectors/VideoProjectors'
import USBCards from './ACCESSORIES_SUPPLIES/USB_Cards/USBCards'
import MobilesTelephoneAccessories from './ACCESSORIES_SUPPLIES/Telephone_Accessories/MobilesTelephoneAccessories'

const AccessoriesSupplies = () => {
  return (
    <>
    <Routes>
        <Route path='/GPS' element={< GPS/>}/>
        <Route path='/Cables' element={< Cables/>}/>
        <Route path='/Microphones' element={< Microphones/>}/>
        <Route path='/Camera-Photo' element={< CameraPhoto/>}/>
        <Route path='/Power-Strips' element={< PowerStrips/>}/>
        <Route path='/Earbud-Headphones' element={< EarbudHeadphones/>}/>
        <Route path='/On-Ear-Headphones' element={< OnEarHeadphones/>}/>
        <Route path='/Video-Projectors' element={< VideoProjectors/>}/>
        <Route path='/USB-Cards' element={< USBCards/>}/>
        <Route path='/Mobiles-Telephone-Accessories' element={< MobilesTelephoneAccessories/>}/>
    </Routes>
    </>
  )
}

export default AccessoriesSupplies
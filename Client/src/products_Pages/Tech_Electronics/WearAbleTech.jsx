import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gadgets from './WEARABLE_TECH/Gadgets/Gadgets'
import SmartWatch from './WEARABLE_TECH/Smart_Watch/SmartWatch'
import ActivityTracker from './WEARABLE_TECH/Activity_Tracker/ActivityTracker'

const WearAbleTech = () => {
  return (
    <>
    <Routes>
        <Route path='/Gadgets' element={<Gadgets/>}/>
        <Route path='/Smart-Watch' element={<SmartWatch/>}/>
        <Route path='/Activity-Tracker' element={<ActivityTracker/>}/>
    </Routes>
    </>
  )
}

export default WearAbleTech
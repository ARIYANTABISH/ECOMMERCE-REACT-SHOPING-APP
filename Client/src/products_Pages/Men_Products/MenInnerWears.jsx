import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boxers from './INNERWEARE/Boxers/Boxers'
import Underwear from './INNERWEARE/Underwear/Underwear'
import MenSocks from './INNERWEARE/Socks/MenSocks'

const MenInnerWears = () => {
  return (
    <>
    <Routes>
        <Route path='/Men-Boxers' element={<Boxers/>}/>
        <Route path='/Men-Underwear' element={<Underwear/>}/>
        <Route path='/Men-Socks' element={<MenSocks/>}/>
    </Routes>
    </>
  )
}

export default MenInnerWears
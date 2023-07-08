import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CatesFood from './Food/CatesFood'
import Litterboxes from './Litter_boxes/Litterboxes'
import Catlitters from './Cat_litters/Catlitters'
import Littermats from './Litter_mats/Littermats'
import Scratchers from './Scratchers/Scratchers'
import Horses from './HORSES/Horses'

const Cates = () => {
  return (
    <>
    <Routes>
        <Route path='Cates-Food' element={<CatesFood/>} />
        <Route path='Litter-mats' element={<Littermats/>} />
        <Route path='Litter-boxes' element={<Litterboxes/>} />
        <Route path='Scratchers' element={<Scratchers/>} />
        <Route path='Cat-litters' element={<Catlitters/>} />
        <Route path='Horses' element={<Horses/>} />
    </Routes>
    </>
  )
}

export default Cates
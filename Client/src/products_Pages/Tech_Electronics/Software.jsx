import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Editing from './SOFTWARES/Editing_Software/Editing'
import Designing from './SOFTWARES/Designing/Designing'
import Animation from './SOFTWARES/Animation/Animation'
import Programing from './SOFTWARES/Programing/Programing'
import VideoGames from './SOFTWARES/Video_Games/VideoGames'
import AllOthers from './SOFTWARES/All_Softwares/AllOthers'

const Software = () => {
  return (
    <>
    <Routes>
        <Route path='/Editing' element={< Editing/>}/>
        <Route path='/Designing' element={< Designing/>}/>
        <Route path='/Animation' element={< Animation/>}/>
        <Route path='/Programing' element={< Programing/>}/>
        <Route path='/Video-Games' element={< VideoGames/>}/>
        <Route path='/All-Others' element={< AllOthers/>}/>
    </Routes>
    </>
  )
}

export default Software
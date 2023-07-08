import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BreedingTanks from './Breeding_tanks/BreedingTanks'
import MedicationHealth from './Medication_health supplies/MedicationHealth'
import AquariumStands from './Aquarium_stands/AquariumStands'
import FishFeed from './Food/FishFeed'
import AquariumLights from './Aquarium_lights/AquariumLights'

const Fishes = () => {
  return (
    <>
    <Routes>
        <Route  path='/Breeding-Tanks' element={<BreedingTanks/>} />
        <Route  path='/Medication-Health' element={<MedicationHealth/>} />
        <Route  path='/Aquarium-Stands' element={<AquariumStands/>} />
        <Route  path='/Fish-Feed' element={<FishFeed/>} />
        <Route  path='/Aquarium-Lights' element={<AquariumLights/>} />
    </Routes>
    </>
  )
}

export default Fishes
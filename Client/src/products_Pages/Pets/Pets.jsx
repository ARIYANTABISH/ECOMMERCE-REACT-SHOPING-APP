import React from 'react' 
import DogsRoute from './DOGS/DogsRoute'
import Cates from './CATES/Cates'
import Fishes from './FISHES/Fishes'

const Pets = () => {
  return (
    <>
    <DogsRoute/>
    <Cates/>
    <Fishes/>
    </>
  )
}

export default Pets
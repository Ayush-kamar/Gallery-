import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Pokie from './Pokie'
import Gallerydetails from './Gallerydetails'
const Routess = () => {
  return (
    <Routes>
     <Route path='/' element={<Pokie/>} />
     <Route path='/Gallery/:id' element={<Gallerydetails/>} />

    </Routes>
  )
}
export default Routess

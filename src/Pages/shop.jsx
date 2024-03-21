import React from 'react'
import Service from '../Components/Services/Services'
import LaxuryCars from '../Components/Laxury/LaxuryCars'
import Brands from '../Components/Brands/Brands'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollection/NewCollections'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Service/>
      <LaxuryCars/>
      <NewCollections/>
      <Brands/>
    </div>
  )
}
import React from 'react'
import Hero from './Hero'
import CardProvider from './CardProvider'

export default function Home() {
  return (
    <>
      <Hero/>
      <CardProvider heading={"Featured categories"}></CardProvider>
      <CardProvider heading={"Rental categories"}></CardProvider>
      <CardProvider heading={"Booking categories"}></CardProvider>
    </>
  )
}

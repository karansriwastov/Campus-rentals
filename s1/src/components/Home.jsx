import React from 'react'
import Hero from './Hero'
import CardProvider from './CardProvider'

export default function Home() {
  return (
    <>
      <Hero/>
      <CardProvider heading={"Featured categories"} type={"Buy now"}></CardProvider>
      <CardProvider heading={"Rental categories" } type={"Rent now"}></CardProvider>
      <CardProvider heading={"Booking categories"} type={"Book now"}></CardProvider>
    </>
  )
}

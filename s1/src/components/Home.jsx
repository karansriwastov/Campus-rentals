import React, { useContext, useEffect, useState } from 'react'
import Hero from './Hero'
import CardProvider from './CardProvider'
import { QuerySnapshot, collection, doc,getDocs } from 'firebase/firestore'
import { itemsDb } from './Firebase'
import { getToken } from 'firebase/app-check'
import AuthProvider, { useAuth } from '../store/AuthProvider'
import FeaturedCards from './FeaturedCards'
import RentCard from './RentCard'
import BookCard from './BookCard'
const  Home=()=> {
  return<>
  <Hero/>
  <FeaturedCards/>
  <RentCard/>
  <BookCard/>
      </>
}
export default Home;
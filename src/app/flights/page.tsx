"use client"
import FlightCard from '@/components/partials/FlightCard'
import FlightPopUp from '@/components/partials/FlightPopUp'
import Searchbar from '@/components/Searchbar'
import { useSearchParams } from 'next/navigation';
// import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Flights = () => {
  const [showPopUp, setShowPopUp] = useState(false)

const searchParams = useSearchParams();
const from = searchParams.get('from');
const to = searchParams.get('to');
const fromDate = searchParams.get('fromDate');
const returnDate = searchParams.get('returnDate');
  return (
    <div className='flex flex-col items-center w-full gap-8'>
      <Searchbar from={from as string} to={to as string} date={fromDate as string} returnDate={returnDate as string}/>
      {[...Array(8)].map((_, index) => (
      <FlightCard key={index} handleClick={() => setShowPopUp(true)} />
      ))}
      {showPopUp && (
      <FlightPopUp isShow={showPopUp} onClose={() => setShowPopUp(false)} />
      )}
    </div>
  )
}

export default Flights

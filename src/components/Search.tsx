"use client";
import React, { useEffect, useState } from 'react'
import Input from './partials/Input'
import { TfiLocationPin } from "react-icons/tfi";
import { TbArrowsRightLeft } from "react-icons/tb";
import Button from './partials/Button';
import {  BiSearch } from 'react-icons/bi';
import {airports} from '../constants/flight-details.js'
import FlightSearchLoader from './FlightSearchLoader';
import { useRouter } from 'next/navigation';

type propsType={
  isNav:boolean,
  handleNavClick?:()=>void
  fromNav?:string
  toNav?:string
  fromDateNav?:string
  returnDateNav?:string
}

const Search = ({isNav,handleNavClick,fromNav,fromDateNav,toNav,returnDateNav}:propsType) => {
    const[from,setFrom]=useState<string>(fromNav?fromNav:'')
    const[to,setTo]=useState<string>(toNav?toNav:'')
    const [fromDate,setFromDate]=useState<string>(fromDateNav?fromDateNav:'')
    const [returnDate,setReturnDate]=useState<string>(returnDateNav?returnDateNav:'')
    
    const [fromOptions,setFromOption]=useState<string []>([])
    const [toOptions,setToOption]=useState<string []>([])

    useEffect(() => {
        const fromOptions = airports
            .filter((airport) => airport.code  + ' '+ airport.name +' ' + airport.city+' '+ +airport.country !== to)
            .map((airport) => airport.code  + ' '+ airport.name +' ' + airport.city+' '+ +airport.country)
        setFromOption(fromOptions)
        const toOptions = airports
            .filter((airport) => airport.code  + ' '+ airport.name +' ' + airport.city+' '+ +airport.country !== from)
            .map((airport) => airport.code  + ' '+ airport.name +' ' + airport.city+' '+ +airport.country)
        setToOption(toOptions)
    }, [to,from])

    const [loading,setLoading]=useState<boolean>(false)
    const router=useRouter();
    const handleClick=()=>{
      if(!handleNavClick){
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          router.push(`/flights?from=${from}&to=${to}&fromDate=${fromDate}&returnDate=${returnDate}`)
        }, 3500);
      }
      if (handleNavClick) {
        handleNavClick();
        router.push(`/flights?from=${from}&to=${to}&fromDate=${fromDate}&returnDate=${returnDate}`)
      }
    }
    if(loading){
      return <div className="absolute">
        <FlightSearchLoader from={from} to={to} returnDate={returnDate} date={fromDate}/>
      </div>
    }
  return (
    <div className={`rounded-[12px] gap-[32px] flex flex-col border-1px ${!isNav &&'shadow-md'} px-[28px] py-[28px] border-[#E6E8EB] w-[80%]`}>
      
      {!isNav && <div className="bg-[#F5F7FA] w-fit px-[12px] py-[10px] rounded-[6px] text-[16px] font-semibold">Flights</div>}

      <div className="flights flex gap-[24px]">
        <Input icon={<TfiLocationPin/>} value={from} text="Where from" type="select" options={fromOptions} onChange={setFrom}/>
        <div className="icon rounded-full bg-[#F5F7FA] h-[52px] w-[52px] flex items-center justify-center">
            <TbArrowsRightLeft/>
        </div>
        <Input icon={<TfiLocationPin/>} value={to} text="Where to" type="select" options={toOptions} onChange={setTo} />

        <Input  value={fromDate}  text="Departure" type="text"onChange={setFromDate} />
        <Input  value={returnDate} text="Return" type="text" onChange={setReturnDate} />

      </div>
      <div className="w-full flex justify-end px-[28px] py-[28px]">
        <Button icon={<BiSearch/>} text="Search Flights" handleClick={()=>handleClick()} disabled={from=='' || to==='' || fromDate=='' || returnDate==''}/>
      </div>
    </div>
  )
}

export default Search

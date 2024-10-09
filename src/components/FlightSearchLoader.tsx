"use client"
import React from 'react';
import Searchbar from './Searchbar';
import Skelton from './partials/Skelton';
import LoadingModal from './partials/LoadingModal';
type propsType = {
  from?: string;
  to?: string;
  date?: string;
  returnDate?: string;
};
const FlightSearchLoader = ({ from, to, date, returnDate }: propsType) => {

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden top-0 z-20">
     <Searchbar from={from as string} to={to as string} date={date as string} returnDate={returnDate as string}/>

      <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
            <div className="h-1 rounded-full animate-pulse w-3/4 bg-gradient-to-r from-[rgba(58,104,137,0.5)] via-[#3A6889] to-[rgba(58,104,137,0.5)]"></div>
          </div>
    <div className="w-4/5 mx-auto">   
      <div className="grid grid-cols-2 gap-6 p-6">
        {Array(8).fill(0).map((_, idx) => (
          <div className="" key={idx}>
            <Skelton  />
          </div>
        ))}
      </div>

      <LoadingModal/>
    </div>
    </div>
  );
};

export default FlightSearchLoader;

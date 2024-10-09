"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { flightData } from "@/constants/airlines";
// import Button from './Button'

type FlightProps={
    date: string;
    flightName: string;
    departureTime: string;
    arrivalTime: string;
    originCode: string;
    destinationCode: string;
    duration: string;
    stops: number;
    stopLocation?: string;
    logo:string
}
const Flight = ({date,flightName,departureTime,arrivalTime,originCode,destinationCode,duration,stops,stopLocation,logo}:FlightProps) => {
  return (
    <div className="flex">
      <div className="primary flex items-center gap-4 w-[70%]">
        <div className="logo flex gap-3 flex-col">
          {date}
            <div className="logo h-[44px] w-[44px] relative rounded-[4.19px] border-[1.05px]">
            <Image
              src={logo}
              alt="logo"
              layout="fill"
              className="object-contain"
            />
            </div>
        </div>
        <div className="flight-info">
          <p className=" text-sm text-gray-600">{flightName}</p>
          <p className="text-lg font-medium">Thu 25 Jun · {departureTime} - {arrivalTime}</p>
        </div>
      </div>

      <div className="secondary flex-1 flex items-center justify-between px-8">
        <div className="route text-center">
          <p className="text-sm text-gray-600">{originCode} - {destinationCode} </p>
          <p className="text-md font-medium">{duration}</p>
        </div>
        <div className="stops text-center">
          <p className="text-sm text-gray-600">{stopLocation}</p>
          <p className="text-md font-medium">{stops==0?"No":stops} stops</p>
        </div>
      </div>
    </div>
  );
};

type FlightCardProps = {
  handleClick: () => void;
};
const FlightCard = ({handleClick}:FlightCardProps) => {
  const flight1=flightData[0]
  const flight2=flightData[1]
  return (
    <div className="flight-card border rounded-lg p-4 shadow-md flex items-center w-[80%]">
      <div className="flights flex flex-col w-full">
        <Flight 
          date={flight1.date}
          flightName={flight1.flightName}
          departureTime={flight1.departureTime}
          arrivalTime={flight1.arrivalTime}
          originCode={flight1.originCode}
          destinationCode={flight1.destinationCode}
          duration={flight1.duration}
          stops={flight1.stops}
          stopLocation={flight1.stopLocation}
          logo={flight1.logo}
        />
        <Flight 
          date={flight2.date}
          flightName={flight2.flightName}
          departureTime={flight2.departureTime}
          arrivalTime={flight2.arrivalTime}
          originCode={flight2.originCode}
          destinationCode={flight2.destinationCode}
          duration={flight2.duration}
          stops={flight2.stops}
          stopLocation={flight2.stopLocation}
          logo={flight2.logo}
        />
      </div>
      <div
        className="vertical-line mx-4"
        style={{ borderLeft: "1px solid #ccc", height: "100px" }}
      ></div>

      <div className="price-details">
        <p className="text-sm text-gray-600">From</p>
        <p className="text-lg font-semibold">
          {flight1.currency} {(flight1.price + flight2.price).toLocaleString()}
        </p>
        <Button text="Select" handleClick={() => {handleClick()}} />
      </div>
    </div>
  );
};

export default FlightCard;

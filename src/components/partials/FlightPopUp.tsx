"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";

type propsType = {
  isShow: boolean;
  onClose: () => void;
};
type FlightProps={
    deptDateTime: string;
    deptAirport: string;
    arrivalDateTime: string;
    arrivalAirport: string;
    flightName: string;
    flightClass: string;
    flightDuration: string;
    flightLogo:string
}
const Flight=({deptDateTime,deptAirport,arrivalDateTime,arrivalAirport,flightName,flightClass,flightDuration,flightLogo}:FlightProps)=>{
   return  <Fragment>
    <div className="flex items-start">
          <div className="timeline flex flex-col items-center">
            <div className="circle w-3 h-3 bg-white border-[1px] border-black rounded-full"></div>
            <div className="line h-24 w-px bg-black my-2"></div>
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <p className="text-[12px] font-medium text-[#787B80]">
              {deptDateTime}
            </p>
            <p className="text-sm font-semibold">
              {deptAirport}
            </p>
          </div>
          <div className="airline-info ml-auto  flex gap-2">
            <div className="logo h-[44px] w-[44px] relative rounded-[4.19px] border-[1.05px]">
              <Image
                src={flightLogo}
                alt="logo"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="text-[#484A4D] flex-col flex gap-1">
              <p className="text-sm font-sm ">{flightName}</p>
              <p className="text-sm ">{flightClass}</p>
              <p className="text-sm ">Flight time {flightDuration}</p>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="timeline flex flex-col items-center">
            <div className="circle w-3 h-3 bg-white border-[1px] border-black rounded-full"></div>
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <p className="text-[12px] font-medium text-[#787B80]">
              {arrivalDateTime}
            </p>
            <p className="text-sm font-semibold">
              {arrivalAirport}
            </p>
          </div>
        </div>
        </Fragment>
}

const FlightPopUp = ({ isShow, onClose }: propsType) => {
  if (!isShow) return null;
  return (
    <div className="flight-details p-6 fixed top-0 right-0 h-full bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <div className="flex rounded-full cursor-pointer h-[28px] w-[28px] bg-[#F5F7FA] items-center justify-center">
        <BiLeftArrowAlt onClick={() => onClose()} />
      </div>
      <h2 className="text-xl font-semibold mb-4">Flight details</h2>

      <div className="flex flex-col gap-6">

        <Flight deptAirport="DXB • Dubai International Airport" deptDateTime="Sat 28 Sept • 2:15" arrivalAirport="RUH • King Khalid International Airport" arrivalDateTime="Sat 28 Sept • 2:15" flightClass="Economy • A330" flightDuration="3h 45m" flightName="Saudi Arabian Airlines • SV553" flightLogo="/images/i2.png"  />

        <div className="flex items-center">
          <div className="flex">
            <div className="line h-[120px] w-px  border-dashed border-[1px] border-spacing-12 bg-black"></div>
          </div>
          <div className="flex ml-7">
            <IoTimeOutline className="text-gray-500 items-center" />
            <p className="ml-4 text-sm text-black-500">Layover 2h 25m</p>
          </div>
        </div>

        <Flight deptAirport="RUH • King Khalid International Airport" deptDateTime="Sat 28 Sept • 2:15" arrivalAirport="CDG • Paris - Charles de Gualle Airport" arrivalDateTime="Sat 28 Sept • 2:15" flightClass="Economy • A330" flightDuration="3h 45m" flightName="Saudi Arabian Airlines • SV553" flightLogo="/images/i1.png"  />
      </div>
    </div>
  );
};

export default FlightPopUp;

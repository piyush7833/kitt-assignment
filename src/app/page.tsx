"use client"
import Search from '@/components/Search';
import React from 'react'
export default function Home() {

  return (
    <div className="h-screen w-screen flex flex-col items-center ">
      <h1 className="font-normal text-[36px] mt-32">Good afternoon, Brian</h1>
      <Search isNav={false}/>
    </div>
  );
}

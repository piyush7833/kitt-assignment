"use client";
import React from 'react'

type propsType={
    icon ?:React.ReactNode,
    text:string,
    handleClick:()=>void
    disabled?:boolean
}
const Button = ({icon,text, handleClick,disabled}:propsType) => {
  return (
    <button disabled={disabled} className='disabled:cursor-not-allowed cursor-pointer rounded-md flex text-[#FFFFFF] items-center border-radius-[12px] px-[70px] py-[16px] gap-[12px] bg-[#003E39] w-fit' onClick={()=>handleClick()}>
      {icon}
        <p className='text-[14px]'>{text}</p>
    </button>
  )
}

export default Button

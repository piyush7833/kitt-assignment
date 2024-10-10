import React from 'react'

type propsType={
    icon?:React.ReactNode,
    text:string,
    type:string,
    options?:string[]
    onChange?:React.Dispatch<React.SetStateAction<string>> | undefined,
    isCode?:boolean
    value?:string
}
const Input = ({icon,text,type,options,onChange,value}:propsType) => {
  return (
    <div className='flex gap-2 p-[12px] border-[1px] border-[#E6E8EB] rounded-[6px] justify-between items-center max-w-[267.5px] overflow-auto hideScrollBar'>
       {icon}
      {type==="select"?
    <div className="flex items-center w-full relative">
      <select className="input border-none focus:border-none active:border:none w-full" value={value} onChange={(e)=>onChange && onChange(e.target.value)}>
        <option value="" disabled selected hidden className='text-[#484A4D]'>{text}</option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label className={`absolute left-0 top-[-10px] text-xs transition-all ${value=='' ? 'hidden' : ''}`}>{text}</label>
    </div>
      :
      <div className="relative w-full">
        <input 
        type="date"  
        placeholder={text} 
        className="input border-none focus:border-none border-white active:border-none placeholder:text-[#484A4D] px-6" 
        onChange={(e)=>onChange && onChange(e.target.value)} 
        min={new Date().toISOString().split('T')[0]} 
        value={value} 
        />
        <label className={`absolute left-0 top-[-10px] text-xs transition-all ${value=='' ? 'hidden' : ''}`}>{text}</label>
      </div>
      }
    </div>
  )
}

export default Input

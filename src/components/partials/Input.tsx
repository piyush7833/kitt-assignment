import React from 'react'

type propsType={
    icon?:React.ReactNode,
    text:string,
    type:string,
    options?:string[]
    onChange?:React.Dispatch<React.SetStateAction<string>> | undefined,
    isCode?:boolean
}
const Input = ({icon,text,type,options,onChange}:propsType) => {
  return (
    <div className='flex gap-2 p-[12px] border-[1px] border-[#E6E8EB] rounded-[6px] justify-between items-center max-w-[267.5px] overflow-auto hideScrollBar'>
       {icon}
      {type==="select"?
    <div className="flex items-center w-full">
        <select className="input border-none focus:border-none active:border:none w-full" onChange={(e)=>onChange && onChange(e.target.value)}>
            <option value="" disabled selected hidden className='text-[#484A4D]'>{text}</option>
            {options?.map((option, index) => {
                const [firstWord, ...rest] = option.split(' ');
                return (
                    <option key={index} value={option}>
                        <span className="font-bold">{firstWord}</span> {rest.join(' ')}
                    </option>
                );
            })}
        </select>
    </div>
        :
        <input 
        type="date"  
        placeholder={text} 
        className="input border-none focus:border-none border-white active:border-none placeholder:text-[#484A4D]" 
        onChange={(e)=>onChange && onChange(e.target.value)} 
        min={new Date().toISOString().split('T')[0]} 
      />
      }
    </div>
  )
}

export default Input

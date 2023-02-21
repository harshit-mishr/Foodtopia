import React from 'react'

export default function CustomSelect({array,className ,defaultValue , onChange}){
 return(
   <select className={className} onChange={onChange}>
     <option>{defaultValue}</option>
    {array.map(x=><option>{x}</option>)}

   </select>
 )
}
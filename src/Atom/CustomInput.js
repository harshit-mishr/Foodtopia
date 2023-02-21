import React from "react";

export default function CustomInput({onChange,style,value,type,className,placeholder}){
    return (
         <input style={style} className={className} placeholder={placeholder} type={type} onChange={onChange} value={value}/>
    );
}
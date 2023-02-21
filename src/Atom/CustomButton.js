import React from "react";

export default function CustomButton({buttonText,onClick,className}){
    return (
        <button className={className} onClick={onClick} >{buttonText}</button>
    );
}
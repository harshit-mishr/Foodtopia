import React,{useState} from "react";
import Style from "./ComponentNavBar.module.css"
import { TiLocation } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import CustomInput from "../CustomInput";
import { SlLocationPin } from 'react-icons/sl';
export default function ComponentNavBar(){

    const [places, setPlaces] = useState([]);
    const [value, setValue] = useState("");


    async function PlaceFetch(e) {
        // console.log(value,"come from  modal")
        setValue(e.target.value)
        const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${e.target.value}&types=`);
        const data = await res.json()
        setPlaces(data.data)
        console.log(data)

    }
    async function handleClick(pla) {
        // console.log(x, "i m selectd place")
        const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${pla.place_id}`)
        const data = await res.json()  //{}
        const latitude = data.data[0].geometry.location.lat
        const longitude = data.data[0].geometry.location.lng
        console.log(latitude, "geo")
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)
        const fetchData = await response.json()
        console.log(fetchData.data.cards[2].data.data.cards, "restaurant data")
    }
    return(
        <>     <div className={Style.box} >
                    <p className={Style.iconname} >Foodtopia</p>
                    <div> 
                    <div className={Style.inputBoxStyle}>
                        <TiLocation className={Style.location} />
                        <CustomInput value={value} onChange={PlaceFetch} placeholder="Swaroop Nagar" className={Style.input1} />
                        <CiSearch className={Style.search} />
                        <CustomInput placeholder="Search for restaurant, cuisine or a dish" className={Style.input2} />
                    </div>
                    <div className={Style.popOver}>
                        {
                            places?.map((pla) =>
                                <>
                                    <span className={Style.places} onClick={() => handleClick(pla)} ><SlLocationPin /> {pla?.description}</span>
                                </>
                            )
                        }
                    </div>
                    </div>
                    <p className={Style.userName}>harshit</p>

                    </div>
        </>
    )
}
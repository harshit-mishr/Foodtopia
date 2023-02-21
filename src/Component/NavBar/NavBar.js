import React, { useState } from "react";
import Style from "./NavBar.module.css"
import { FaUserCircle } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import CustomInput from "../../Atom/CustomInput";
import { SlLocationPin } from 'react-icons/sl';
import { useNavigate } from "react-router-dom";
export default function NavBar() {

    const navigate = useNavigate()

    const [places, setPlaces] = useState([]);
    const [cityName,setCityName] = useState("Kanpur")
    const [value, setValue] = useState("");


    async function PlaceFetch(e) {
        // console.log(value,"come from  modal")
        setValue(e.target.value)
        const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${e.target.value}&types=`); // place name  // 
        const data = await res.json()
        setPlaces(data.data)
        console.log(data)

    }
    async function handleClick(place) {
         console.log(place.description, "i m selectd place line27")
         setCityName(place.description)
        const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place.place_id}`) // Place id  //
        const data = await res.json()  //{}
        const latitude = data.data[0].geometry.location.lat
        const longitude = data.data[0].geometry.location.lng
        console.log(latitude, "geo")
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)  // hotel details   // 
        const fetchData = await response.json()
        console.log(fetchData.data.cards[2].data.data.cards, "restaurant data")
        localStorage.setItem("allHotel", JSON.stringify(fetchData.data.cards[2].data.data.cards))
        navigate("/hotel")
    }

    // function handleKeyPress(place) {
    //     console.log(place.key)
    //   if (place.key === 'Enter') {
    //      PlaceFetch()
    //      handleClick()
    //   }
    // }

    return (
        <>
            <div className={Style.mainbox}>
                <div className={Style.Box}>
                    <div className={Style.logo} >
                        <img className={Style.iconimg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAbFBMVEXMNT7////MMzzPMDrVQkrQRU3MOEHQKzb9+Pj+/Pz89PX24OHMLzn67e702tvy0NLprrHhgofZYGbPJDDnqKvKGSffio7suLvikpbwyMrhfoPcd3zVUlnvwcPXWmHec3jkm5/YaG7WO0XYTlUOLDxDAAAFHklEQVR4nO2d2ZKqMBBAIQHCEhIgCMgm6v//42UZFa8jOpKQWJVTNQ/z5KkmC3Q3wTDv8EISxYntGPJw7CSOSOjdixnzf3xatGiHIJCoaRgA9g5tQf1nnrS0EJbreAUjq6S/egYZYrLt7kAoCx49aSL5cj8CYEv/98wtVa74HGzl954pwrKdfgWzbu6ZIwWDOQJYfvOklqqaw6WnF8+gVfOiT+Ak+PHMoGyXRWA2eVJlB+cEQHTw9Eu1lvdHWOn3ntRWO5x9QG1qGl6HZHu8BHWeESo92SdwGxpE/XD2ASVGtJMt8Qa7yIi/Ip6xkai9yE/AxFB+VRoAtiHzke19vsNSo9FoNBqNRqPRaDQajUazBoAxhnCo5gI4gDFQLscGIEOnOqnirCi6riuKLK6O7fmEmOyugxm9JGyLqCGh77qu9/PnhwFt8q5sT4wp0H4AEDpXeXDXJDHH80OaxomFmMx6BWDokAfuM8krIc2zesfkjAGAoZ29IXkJbNAlp36ebe2KQRKFb0peIHl5BpsOAMDqNHgt9kA/Wo8bNswgWPw1ljfVfYy2qVEDdqCvfRYg2ZmJN8Woe7oOvUuQnQRffYCSdcG8mYqssQFYfjwy53im2VQncXN/xQR6IEwdQeVVwCJulgPkIGQ+Adhx1TRNtxOwmQKUmt7r3/4buYU5ly8HTQFQ3q0fMOYezBHCtwlg6iATIlpzjChqRWn2a77DTRSexWma5t7iJMpaIlDTNCMuqxNAFb9d6FfcgsPOBFAmWLPfQ9fPJczSd5+CVhCtDOi8PVwk7mFFQAFGdif8mk80S6v9lAnCQzJoZLIDY7II9dQFEbMJPeInCwHN4vJwPCZtW59t27YmbLtuk2MVdxHdKJYjSz2Jruv7fhgGAaE9+wlKSRD6vuttFcqJcMFzU5FX1M+nvGy1O4rnj6Cy1e7In1942Wp35DqeXOm+JJ7H5/P9tn6S6/pJr+vntpr+Qhbvth8NG9JlOxr2o0OZbbwfLQzPfn/H0wY/29/BuL/3G/+0v2+l6R0+f+zs75fO6UYxpaePNQfwVvef8dqneLzb4n5+8fbzPbZ4PvJ5JEUAikWLpnwyoSwRO+/zE6f0oth8CLG5JW5E5pf8M8dEmLh8XdByTdPDWJDmkW+BBiC+RYQfyMJt0oeiUIBoY/MvdwGDt6jXQRG1rsv76LwIKkGVYwDT1TXYK2FkCXvdETgFL9F9aQjsbQDowGUdDQqBVdgRZDWrn5yCwhLf04DRyqIxKbboZ+hBdf7xKA33GdzsDAOMquYTU5+kR7jpCQbIiv/83BTkcS1kXV8CwFPyh5j6QXS0oJyOQLSrU/KGqhs0XcIk9deNYGZX6VKTneuHTXE4I5mSI0OPalLkNPDdW0LK84YOULLPu+oMVej/nIAM2u0hLtIob3ryPO2K+JDU1uAoW+6eMSNlOIbTYzin05i1Uq9D+R7F9TQajUaj0Wg0Go1Go9FovoDvOLnQ+ZrzKr/l/M/yK85TLY109wUjdJcaRPFTs0cQ+Zrzkz0e7/0IBhWeYVJLtsYrgEWH89Ir1QOKquG8dHO/TYX5YwDbT+f5x2rPJDR0dw2eROkpj2vy42k2jrpXHjiNefE0I2WH6OV9+8nT6xQVBazzZp6mF/F7wZcj2Il+KtDX9zuaVnZ9/AGA6uaid3sPhWx1SMq7IBbfWqLn78vsK1W+J+UM35Oq9jO3h+9zMSW+z8WWvs9ljt87S0vp3zsr04fvnf0DvLpSRZdPAiAAAAAASUVORK5CYII=" />
                        <span className={Style.navbarText} >get the App</span>
                    </div>
                    <div className={Style.Box2}>
                        <span className={Style.navbarText}>Invertor Relations</span>
                        <span className={Style.navbarText}>Add restaurant</span>
                        <span className={Style.navbarText}><FaUserCircle /><span>Harshit</span></span>
                    </div>
                </div>
                <div className={Style.Content} >
                    <span className={Style.iconname}>Foodtopia</span>
                    <span className={Style.text} >Discover the best food & drinks in {cityName}</span>
                    <div className={Style.inputBoxStyle}>
                        <TiLocation className={Style.location} />
                        <CustomInput value={value} onChange={PlaceFetch} placeholder="Swaroop Nagar" className={Style.input1} />
                        <CiSearch className={Style.search} />
                        <CustomInput placeholder="Search for restaurant, cuisine or a dish" className={Style.input2} />
                    </div>
                    <div className={Style.popOver}>
                        {
                            places?.map((place) =>
                                <>
                                    <span className={Style.places}  onClick={() => handleClick(place)} ><SlLocationPin /> {place?.description}</span>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
import React, { useState,useEffect } from "react";
import Style from "./ItemSection1.module.css"
import { cards } from "./item"
import { AiFillStar } from "react-icons/ai";
// {console.log(item,"iam from item")}
export default function ItemSection1() {
    const [data, setData] = useState([])
    console.log(data, "data aarha")
     
    useEffect(()=>{
        let hotelData = JSON.parse(localStorage.getItem("allHotel"))
        setData(hotelData)
    },[])
    

    return (
        <>
                <div className={Style.mainbox2}  > 
            <div className={Style.mainbox} >
                {
                    data.map((x) =>
                        <> <div key={x.data.id} className={Style.box} > 
                            {console.log(x.data, "map")}
                            <img className={Style.boxImg} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.data.cloudinaryImageId}` } alt="hotel_picture" />
                            <div className={Style.discountTime} >
                                <p className={Style.discount}>{x.data.aggregatedDiscountInfo.header}</p>
                                <p className={Style.time}>{x.data.slaString}</p>
                            </div>

                            <div className={Style.HotelNameRating}  >
                                <p>{x.data.name}</p>
                                <p className={Style.Rating} ><span className={Style.Hotel}>{x.data.avgRating}</span><span><AiFillStar/></span></p>
                            </div>
                            <div>
                                <div className={Style.typeRs}>
                                    <p>{x.data.cuisines[0]},{x.data.cuisines[1]}</p>
                                    <p>{x.data.costForTwoString}</p>
                                </div>
                                <div className={Style.recent} ><img className={Style.growthImg} src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"/><p> {Math.floor(Math.random() * 1000)}+ ordere placed from hear recentry </p><img className={Style.imgSefty} src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" /></div>
                            </div>
                        </div>
                        </>)
                }
            </div>
            </div>

        </>
    )
}
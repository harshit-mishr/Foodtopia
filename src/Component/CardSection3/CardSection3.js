import React from "react";
import CustomButton from "../../Atom/CustomButton";
import CustomInput from "../../Atom/CustomInput";
import Style from "./CardSection3.module.css"
export default function CardSection2() {
    return (
        <>
            <div className={Style.box}>
                <div className={Style.mainBox}>
                    <img className={Style.img} src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" />
                    <div className={Style.content}>
                        <p className={Style.heading} >Get the Foodtopia app</p>
                        <p className={Style.heading2}>We will send you a link, open it on your phone to download the app</p>
                        <div >
                            <div  className={Style.radcheack}>
                            <CustomInput style={{fontSize: '20px'}} className={Style.radioo} type="radio" /><span>Email</span>
                            <CustomInput className={Style.radioo} type="radio" /><span>Phone</span>
                            </div>
                            <div className={Style.buttonInput} >
                           <div className={Style.inputbox}><CustomInput placeholder="Email" className={Style.input} /></div> <CustomButton className={Style.button}  buttonText="Share App Link" />
                            </div>
                            <p className={Style.downloadLink}>Download app from</p>
                            <div className={Style.downloadIcons}>
                                <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">    <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"/></a>
                                <a href="https://itunes.apple.com/app/zomato-food-restaurants/id434613896?mt=8" target="_blank" rel="noopener noreferrer">   <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
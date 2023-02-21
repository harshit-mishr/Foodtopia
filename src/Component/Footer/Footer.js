import React from "react";
import CustomSelect from "../../Atom/CustomSelect";
import Style from "./Footer.module.css"
export default function Footer() {
    const language = [
        "Türkçe",
        "हिंदी",
        "Português (BR)",
        "Indonesian",
        "Português (PT)",
        "Español",
        "Čeština",
        "Slovenčina",
        "Polish",
        "Italian",
        "Vietnamese"]

    const country = [
        "Australia",
        "Brazil",
        "Canada",
        "Chile",
        "Czech Republic",
        "Indonesia",
        "Ireland",
        "Italy",
        "Lebanon",
        "Malaysia",
        "New Zealand",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Singapore",
        "Slovakia",
        "South Africa",
        "Sri Lanka",
        "Turkey",
        "UAE",
        "United Kingdom",
        "USA"
    ]
    return (
        <div className={Style.box} >
            <div className={Style.boxHeading}  >
                <label className={Style.boxIcon}  >Foodtopia</label>
                <div><CustomSelect defaultValue={"English"} array={language} /><CustomSelect defaultValue={"India"} array={country} />
                </div>
            </div>
            <div className={Style.box2}>
                <div>
                    <h3>ABOUT Foodtopia</h3><p>Who We Are</p><p>Blog</p><p>Work With Us</p><p>Investor Relations</p><p>Report Fraud</p><p>Contact Us</p>
                </div>
                <div>
                    <h3>FOODYVERSE</h3><p>Foodtopia</p><p>Blinkit</p><p>Feeding India</p><p>Hyperpure</p><p>Foodyland</p>
                </div>
                <div>
                    <h3>FOR RESTAURANTS</h3><p>Partner With Us</p><p>Apps For You</p><h3>FOR ENTERPRISES</h3><p>Foodtopia For Work</p>
                </div>
                <div>
                    <h3>LEARN MORE</h3><p>Privacy</p><p>Security</p><p>Terms</p><p>Sitemap</p>
                </div>
                <div>
                    <h3>SOCIAL LINKS</h3>
                </div>
            </div>
            <div className={Style.boxFooter} >
                <span>All trademarks are properties of their respective owners. 2008-2023 © Foodtopia™ Ltd. All rights reserved.</span>
            </div>
                <h3 className={Style.boxDesigned}>Designed by <span className={Style.boxownername}> Harshit</span>😎</h3>

        </div>
    )
}
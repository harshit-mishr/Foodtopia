import React from "react";
import ComponentNavBar from "../../Atom/ComponentNavBar/ComponentNavBar";
import Footer from "../../Component/Footer/Footer";
import ItemSection1 from "../../Component/ItemSection1/ItemSection1";


export default function Card() {

    return (
        <>
            <div>
                <ComponentNavBar />
                <ItemSection1/>
                 <Footer/> 

            </div>
        </>
    )
}
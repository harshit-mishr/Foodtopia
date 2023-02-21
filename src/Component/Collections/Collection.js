import React from "react";
import Style from './Collection.module.css'
export default function Collection() {
    return (
        <div className={Style.box}>
            <div className={Style.ContainerText} >  
            <p className={Style.headingtext}>Collections</p>
            <div className={Style.contentText}>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                <p className={Style.LocationText} >All collections in Delhi NCR</p>
            </div>
            </div> 
            <div className={Style.card} >
                <div className={Style.cardItem}>
                    <img className={Style.img} src="https://b.zmtcdn.com/data/pictures/6/19322716/8c1d9e6e5b17e3d28b5c429a028d5024.jpg?output-format=webp" />
                    <div className={Style.textcontainer}> 
                    <p>16 Romantic Dining Places</p>
                    <p>16 Places </p>
                    </div>
                </div>
                <div className={Style.cardItem}>
                    <img className={Style.img} src="https://b.zmtcdn.com/data/pictures/7/20057817/e481174c8bce2617a26509bd7bfa9e5a.jpeg?output-format=webp" />
                    <div  className={Style.textcontainer}> 
                    <p>20 Best Insta-worthy plac...</p>
                    <p>20 Places</p>
                    </div>
                </div>
                <div className={Style.cardItem}>
                    <img className={Style.img} src="https://b.zmtcdn.com/data/pictures/3/3393/c73593b1e11f39056e1340f4d0212958.jpg?output-format=webp" />
                    <div  className={Style.textcontainer}>
                    <p>8 Unique Dining Experience</p>
                    <p>8 Places</p>
                    </div>
                </div>
                <div className={Style.cardItem}>
                    <img className={Style.img} src="https://b.zmtcdn.com/data/pictures/3/18614973/a93c96e96b7465abeda2fdaee71a86ce.jpg?output-format=webp" />
                    <div  className={Style.textcontainer}>
                    <p>16 Serene Rooftop Places</p>
                    <p>16 Places</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
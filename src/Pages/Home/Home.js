import React from "react";
import CardSection1 from "../../Component/CardSection1.js/CardSection1";
import CardSection3 from "../../Component/CardSection3/CardSection3";
import Collection from "../../Component/Collections/Collection";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <CardSection1 />
      <Collection />
      <CardSection3 />
      <Footer/>
    </>
  )
}
import React from "react";

import Header from "@/components/header";
import Herosec from "@/components/herosec";
import ProductGrid from "@/components/hero";
import Footer from "@/components/footer";


const Home=()=>{
  return(
    <div>
      <Header></Header>
      <Herosec></Herosec>
      <ProductGrid></ProductGrid>

      <Footer></Footer>
     
    </div>
  )
}


export default Home
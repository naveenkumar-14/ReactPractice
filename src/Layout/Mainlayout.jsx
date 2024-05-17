import React from 'react'
//import header from layout
import Header from '../Components/Header';
//importing Home into layout
import Home from '../Pages/Home'
import Footer from '../Components/Footer';
import HeroNavBar from '../Components/HeroNavBar';
import Hero from '../Pages/Hero';
const Mainlayout=()=>{

  return(
    <div>
      <div style={{width:'100%',height:'1117px'}}>
        <HeroNavBar/>
        {/*Content of Body */}
        <Hero/>
      </div>
    </div>
  )
}

export default Mainlayout;
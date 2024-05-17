import React from 'react'
//import header from layout
import Header from '../Components/Header';
//importing Home into layout
import Home from '../Pages/Home'
import Footer from '../Components/Footer';
const Mainlayout=()=>{

  return(
    <div>
      <div className='Header' style={{height:'50px',backgroundColor:'beige',}}>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </div>
  )
}

export default Mainlayout;
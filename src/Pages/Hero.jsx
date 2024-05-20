import React from 'react'
import img2 from '../Assets/rafiki.png'
import img1 from '../Assets/Frame1171275031.png'
const Hero = () => {
  return (
    <div className='containers'>
    <div id='content'>
    <text style={{fontSize:'56px',marginRight:'100%',textAlign:'center'}}>Empower Your Business with </text>
    <text style={{color:'#00BBAA',fontSize:'56px',marginRight:'100%'}}>UCB</text>
   

    </div>
    <div id='matter '>
    <text style={{textAlign:'center'}}>Discover the power of UCB's cutting-edge solutions. Explore our
       platform's revolutionary features designed to elevate 
       your business to new heights. </text>
    </div>
    <div id='button'>
      <button style={{color:'white',backgroundColor:'aqua',border:'aqua'}}>Get started</button>
      <text style={{color:'#00BBAA'}}>learn more</text>

    </div>
    <div id ='Image'>
        <img src={img2}alt="" width={985} height={734}  srcset="" />
       </div>
       </div>
  )
}

export default Hero
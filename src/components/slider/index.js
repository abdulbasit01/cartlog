import React from 'react'
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
function Slider() {
    return (
        <div style={{color:'#68bb59',display:'flex',flexDirection:"column",
        alignContent:'center', justifyContent:'center',marginTop:'30px',textTransform:'uppercase',width:'100%',height:'200px'}}>
            <center>
            <div>
            Cartlog
            <h3 style={{color:'#fff',marginTop:'20px'}}>
                Monitor the pulse of eCommerce
            </h3>
            </div>
            </center>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img
            src={Img1}
            width="200"
            height="200"
            style={{position:'absolute',right:'60%',marginTop:'40px'}}


            />
            
            <img
                        src={Img2}
            width="400"
            height="300"
            style={{zIndex:'100',position:'absolute'}}
            />
            <img
                        src={Img3}
                        width="200"
                        height="200"
                    style={{position:'absolute',left:'60%',marginTop:'40px'}}
/>    
            </div>

        </div>
    )
}

export default Slider

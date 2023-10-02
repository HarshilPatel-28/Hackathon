import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.png'
import i3 from '../images/i3.jpg'


const Home = () => {
  return (
    <>
    <div id='work'>
     {/* <h2>WORK</h2> */}
     <section>
     <article>
     <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
     >
        
            
                <div key="" className="workItem">

                <img src={i1} alt="carousel" />
                
                
                </div>
           
                <div key="" className="workItem">

                <img src={i2} alt="carousel" />
                
                
                </div>
                <div key="" className="workItem">

                <img src={i3} alt="carousel" />
                
                
                </div>
           
        
     </Carousel>
     </article>
     </section>
    </div>
    </>
  )
}

export default Home

import React from 'react'
import'./railings.css'
import continuelogo from '../../assets/Continuous-Railing.webp'
import modularlogo from '../../assets/MODULAR-RAILING.webp'
const Railings = () => {
  return (
    <div className='railing__container' >
        <div className='railheading'>
         <h1>Railings</h1>
         <p>As the market leader, we are actively committed to providing well-tested Brass <span className='bolded'>Railing</span> that is stunningly beautiful and has a timeless appearance. We provide a variety of specifications and customization options for our brass railings to meet customer demand. We offer latest and trendy designs as per requirement.&nbsp;</p>
         </div>
         <div className='railings__second-part'>
            <div> <img src={continuelogo} alt="Continuous-Railing" />
            </div>
            <div className='railing__second-para'>
            <h1>Continous Railing</h1>
            <p>A hand crafted Brass metal and White metal continuous railing with brass antique finish for staircase. We design continuous railing in either contemporary or traditional style.</p>
            </div>
         </div>
         <div className='railings__third-part'>
            <div className='railing__third-para'> 
            <h1>Modular Railing</h1>
            <p>A hand crafted Brass metal and White metal modular railing with brass antique finish for home. We design modular railing in either contemporary or traditional style.</p>
            </div>
            <div >
            <img src={modularlogo} alt="Continuous-Railing" />
            
            </div>         
         </div>

          <div className='railings__fourth-part'>
            <div> <img src={continuelogo} alt="Continuous-Railing" />
            </div>
            <div className='railing__fourth-para'>
            <h1>Continous Railing</h1>
            <p>A hand crafted Brass metal and White metal continuous railing with brass antique finish for staircase. We design continuous railing in either contemporary or traditional style.</p>
            </div>
          </div>

 


       
    </div>
  )
}

export default Railings
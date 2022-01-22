import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const  Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
         <div className="gpt3__footer-heading">
            <h1 className="gradient__text">
                Do You Want to Experience the Future 
                Before Others? 
            </h1> 
        </div>   
        <div className="gpt3__footer-btn">
         <p>Early Access Requested</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
              <img src={gpt3Logo} alt="logo" />
              <p>Couterwood k12 190 DK Alknjkcb, All Rights Reserved</p>
              </div>  

              <div className="gpt3__footer-links_div">
               <h4>Links</h4>
               <p>Contents</p>
               <p>Social Media</p>
               <p>Commitment</p>
               <p>Counters</p>
               </div>
              <div className="gpt3__footer-links_div">
               <h4>Company</h4>
               <p>Power Housing</p>
               <p>Social Meetings</p>
               <p>Customer Alignment</p>
               </div>
              <div className="gpt3__footer-links_div">
               <h4>Get in Touch</h4>
               <p>23 Ave Maria Street</p>
               <p>091290930</p>
               <p>Skyler.net</p>
               </div>
               </div>
               <div className="gpt3__footer-copyright">
                <p>2021 GPT-3. All rights Reserved.</p>
               </div>
        </div>
    )
}

export default Footer

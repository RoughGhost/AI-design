import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
          <div className="gpt3__possibility-image">
           <img src={possibilityImage} alt="possibility" />
          </div>
          <div className="gpt3__possibility-content">
           <h4>Request Early to get Started</h4>
           <h1 className="gradient__text">The Possibilities are beyond 
           your Imagination.
           </h1>
           <p>Do you need Travelling Assistance? Virtual AI 
               is here for you and is Likely to do More on your 
               end.
           </p>
           <h4>Request for Early Access to get Started</h4>
          </div>
        </div>
    )
}

export default Possibility

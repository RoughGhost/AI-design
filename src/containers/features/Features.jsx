import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
    {
        title:'Improving end distrust Instantly',
        text:'Getting a formal pep talk about AI and also an Introduction to the future enhacment'
    },
    {
        title:'Become the tended Active',
        text:'Getting a formal pep talk about AI and also an Introduction to the future enhacment'
    },
    {
        title:'Missing Something and Willing to inquire More?',
        text:'Getting a formal pep talk about AI and also an Introduction to the future enhacment'
    },
    {
        title:'Really? Message or am I nothing?',
        text:'Getting a formal pep talk about AI and also an Introduction to the future enhacment'
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
           <div className="gpt3__features-heading">
           <h1 className="gradient__text">
               The Future is Now and you ust need to Realize It.
               Step Into Future Today and Make it Happen.
           </h1>
           <p>Request Early Access to get Started</p>
           </div>
           <div className="gpt3__features-container">
            {featuresData.map((item,index) => (
                <Feature title={item.title} text={item.text}  key={item.title + index}/>
            ))}
           </div>
        </div>
    )
}

export default Features

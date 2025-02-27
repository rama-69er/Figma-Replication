import React from 'react'

import "../css/about.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className='aboutPage'>
            <div className="row">
                <div className="col-lg-6">
                    <div className='aboutHeading'>
                        <p>WELCOME TO REGISTERKARO.IN</p>
                        <h3><span>About</span><span> Register Karo</span></h3>
                    </div>
                    <div className='aboutContent'>
                        <p>
                            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
                        </p>
                        <p>
                            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
                        </p>
                    </div>
                    <button className='theme-btn'>Learn More <FontAwesomeIcon icon={faArrowCircleRight}/></button>
                </div>
                <div className="col-lg-6">
                    <img src="group.png" alt="group_photo" />
                </div>
            </div>
        </div>
    )
}

export default About;

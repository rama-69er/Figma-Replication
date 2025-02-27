import React from 'react'
import "../css/why.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faShieldHalved, faUserLarge } from '@fortawesome/free-solid-svg-icons'

function Why() {
    return (
        <div className='whyPage'>
            <div className="row">
                <div className="col-md-6">
                    <div className='whyHeading'>
                        <p>WHY REGISTERKARO.IN</p>
                        <h3><span></span><span>Why Choose Register Karo</span></h3>
                    </div>
                    <div className='whyContent'>
                        <p>
                            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
                        </p>
                        <p>
                            It is with consistent services and results that build trust wmith the people and that in turn help us to serve the business better.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="whyCards bg-danger text-light">
                                <div>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <h6>Confidential & Safe</h6>
                                <p>All your private information is safe with us</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="whyCards bg-success  text-light">
                                <div>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                                <h6>No Hidden Fees</h6>
                                <p>Everything is put before you with no charges or conditions</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="whyCards bg-info  text-light">
                                <div>
                                    <FontAwesomeIcon icon={faUserLarge} />
                                </div>
                                <h6>Expert CA/CS Assitance</h6>
                                <p>Prompt support from out in-house expert professionals</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="whyCards bg-secondary text-light">
                                <div>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <h6>Confidential & Safe</h6>
                                <p>All your private information is safe with us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why

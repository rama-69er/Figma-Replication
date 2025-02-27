import React from 'react';
import '../css/rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function Rating() {
    return (
        <div className='ratingPage'>

            <h2 className='text-light'>What people says about us . . .</h2>

            <MDBCarousel showIndicators fade interval={2250}>

                <MDBCarouselItem itemId={1}>
                    <div className='ratingCards'>
                        <div>
                            <p>
                                <span>
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi at commodi amet tenetur enim, minima quidem praesentium nulla blanditiis atque quaerat consequuntur eos, aliquid nihil ullam, fugiat obcaecati asperiores! Eligrighti neque nulla officiis ex, nemo omnis numquam. Quis odit, dolorum incidunt vero sed odio voluptatem nemo molestias eaque molestiae veritatis possimus sapiente, libero dolor.
                            </p>
                        </div>
                        <div className='row'>
                            <div className="col-md-1 text-center">
                                <img src="https://media.licdn.com/dms/image/v2/D5635AQEMf6TbZbsaNw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737956655773?e=1741233600&v=beta&t=NtnXKqh0clPx9qAD9PN8eG9T8hz9uUbKzHQShfrK42U" alt="rdx" />
                            </div>
                            <div className='col-md-4'>
                                <h5>Ramanand Dubey</h5>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <div className='ratingCards'>
                        <div>
                            <p>
                                <span>
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStarHalf} />
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi at commodi amet tenetur enim, minima quidem praesentium nulla blanditiis atque quaerat consequuntur eos, aliquid nihil ullam, fugiat obcaecati asperiores! Eligrighti neque nulla officiis ex, nemo omnis numquam. Quis odit, dolorum incidunt vero sed odio voluptatem nemo molestias eaque molestiae veritatis possimus sapiente, libero dolor.
                            </p>
                        </div>
                        <div className='row'>
                            <div className="col-md-1 text-center">
                                <img src="https://media.licdn.com/dms/image/v2/D4D35AQFPT-oLZdgBqg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1722668128485?e=1741237200&v=beta&t=-gIYsR23uGv9ha173xUN4RctwYnuQiGsOAHO7sI8oUA" alt="rdx" />
                            </div>
                            <div className='col-md-4'>
                                <h5>Avinash Srivastava</h5>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <div className='ratingCards'>
                        <div>
                            <p>
                                <span>
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStarHalf} />
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi at commodi amet tenetur enim, minima quidem praesentium nulla blanditiis atque quaerat consequuntur eos, aliquid nihil ullam, fugiat obcaecati asperiores! Eligrighti neque nulla officiis ex, nemo omnis numquam. Quis odit, dolorum incidunt vero sed odio voluptatem nemo molestias eaque molestiae veritatis possimus sapiente, libero dolor.
                            </p>
                        </div>
                        <div className='row'>
                            <div className="col-md-1 text-center">
                                <img src="https://media.licdn.com/dms/image/v2/D5635AQGVIU-vr54CNg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727970098006?e=1741237200&v=beta&t=PBnR-40PteFet2d8SQcJr7i_p7laCxgf92i4eT-TnyY" alt="rdx" />
                            </div>
                            <div className='col-md-4'>
                                <h5>Vaibhav Singh</h5>
                                <p>Mechanical Engineer</p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>

            </MDBCarousel>
        </div>
    )
}

export default Rating;
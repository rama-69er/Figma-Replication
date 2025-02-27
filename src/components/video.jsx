import React from 'react'
import "../css/video.css"

import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

function Video() {
    return (
        <div className='videoPage'>
            <div className="row">
                <div className="col-md-6">
                    <div className="videoContent">
                        <h2>Our Video Introductions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sit corrupti, deleniti voluptatem iure nulla.</p>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2">
                                <span><FontAwesomeIcon size='2xl' icon={faLightbulb} style={{ color: "#FFD43B", }} /></span>
                            </div>
                            <div className="col-lg-10">
                                <div className='d-flex flex-column px-2'>
                                    <h4>Explore Ideas Together</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, praesentium voluptas debitis animi quas eaque.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2">
                                <span><FontAwesomeIcon size='xl' icon={faDesktop} style={{ color: "#FFD43B", }} /></span>
                            </div>
                            <div className="col-lg-10">
                                <div className='d-flex flex-column px-2'>
                                    <h4>Bring those ideas to life</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, praesentium voluptas debitis animi quas eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_HU7i5peA24?si=ur7tCnRhZ2kEoCog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Video

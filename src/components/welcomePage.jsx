import React from 'react'

import "../css/welcomePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faCartShopping, faCircleNodes, faGears, faLaptopCode, faUsers, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const cards = [{
    id: 1,
    icon: faGears,
    heading: "Company Formation",
    para: "Build web-based solutions that enhance customer experiance.",
}, {
    id: 2,
    icon: faLaptopCode,
    heading: "Company Secretatial Services",
    para: "Make data-driven decisions and utilize technology to reach business goals.",
}, {
    id: 3,
    icon: faUsers,
    heading: "Virtual Office Address",
    para: "Foster customer relationships by effectively serving your market.",
}, {
    id: 4,
    icon: faCircleNodes,
    heading: "Annual Compliances Services",
    para: "Turn your ideas into modern products with our design experts.",
}, {
    id: 5,
    icon: faCartShopping,
    heading: "Payroll Services",
    para: "Expand your business across the globe with minimal efforts.",
}, {
    id: 6,
    icon: faVolumeHigh,
    heading: "Bookkeeping Services",
    para: "Steering user behaviours with creative design, data insights & technology.",
}]

function WelcomePage() {
    return (
        <div className='welcomePage'>
            <div className='my-4'>
                <p>WELCOME TO REGISTERKARO.IN</p>
                <h2>Explore Our Services</h2>
            </div>
            <div>
                <div className="row">
                    {cards.map((data) =>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div key={data.id} className="welcomePage-cards">
                                <div className='icon'>
                                    <FontAwesomeIcon icon={data.icon} />
                                </div>
                                <h4>{data.heading}</h4>
                                <p>{data.para}</p>
                                <Link className='text-dark' to="#">Learn More <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button className="theme-btn">
                See All Services
            </button>
        </div>
    )
}

export default WelcomePage;

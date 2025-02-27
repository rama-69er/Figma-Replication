import React from 'react'
import Header from '../components/header';

import "../css/homePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faPeopleGroup, faStar } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import WelcomePage from '../components/welcomePage';
import About from '../components/about';
import Why from '../components/why';
import Video from '../components/video';
import Clients from '../components/clients';
import Blog from '../components/blog';
import Rating from '../components/rating';
import Faq from '../components/faq';
import Footer from '../components/footer';


function HomePage() {
    return (
        <section className='homePage'>
            <Header />
            <div className="main">
                <span>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /> Google Rating <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                </span>
                <div>
                    <h1>
                        Your truster patner for compliance business needs
                    </h1>
                </div>
                <hr color='red' width="3%" style={{ margin: "2rem 0" }} />
                <div>
                    <p>
                        An online business compliance platform that helps enterpreneur and other indivisuals with various, <strong>registrations</strong>, <strong>tax filings</strong>, and other <strong>legal matters</strong>.
                    </p>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span className='d-flex align-items-center'>
                            <span>
                                <FontAwesomeIcon icon={faMicrosoft} />
                            </span>
                            <span className='d-flex flex-column mx-2'>
                                <span className=''>4.5+</span>
                                <span>Customer Rating</span>
                            </span>
                        </span>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span className='d-flex align-items-center'>
                            <span>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </span>
                            <span className='d-flex flex-column mx-2'>
                                <span className=''>20,000+</span>
                                <span>Clients</span>
                            </span>
                        </span>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span className='d-flex align-items-center'>
                            <span>
                                <FontAwesomeIcon icon={faHandshake} />
                            </span>
                            <span className='d-flex flex-column mx-2'>
                                <span className=''>99.8%</span>
                                <span>Financial Stability</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="row m-0 py-4">
                    <div className="col-lg-3 col-md-4 col-sm-12 my-4">
                        <button className="theme-btn w-100">
                            Talk an Expert
                        </button>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 my-2 h5 d-flex align-items-center">
                        <FontAwesomeIcon className='mx-2' icon={faPlayCircle} color='red' size='2xl' />
                        <span>See how it works</span>
                    </div>
                    <div className="main-sidePlates">
                        <ul>
                            <li>Annual Compliances</li>
                            <li>Payroll Services</li>
                            <li>Company Formation</li>
                            <li>Annual Compliances</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="main-bottom text-center">
                    <h4>Trusted By Over 100+ Startups and freelance business</h4>
                    <div>
                        <span>
                            <img src="oracle.png" alt="oracle" />
                        </span>
                        <span>
                            <img src="https://morpheusdata.com/wp-content/uploads/2020/04/morpheus-logo-v2.svg" alt="morpheus" />
                        </span>
                        <span>
                            <img src="samsung.png" alt="samsung" />
                        </span>
                        <span >
                            <img src="monday.avif" alt="monday.com" />
                        </span>
                        <span>
                            <img src="https://morpheusdata.com/wp-content/uploads/2020/04/morpheus-logo-v2.svg" alt="morpheus" />
                        </span>
                        <span >
                            <img src="segment.png" alt="segment" />
                        </span>
                    </div>
                </div>
            </div>
            <WelcomePage />
            <About />
            <Why />
            <Video />
            <Clients />
            <Blog />
            <Rating />
            <Faq />
            <Footer />
        </section>
    )
}

export default HomePage;

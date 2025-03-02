import React from 'react';

import "../css/header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <header>
            <div className='topPad'>
                <ul>
                    <li>
                        <p><FontAwesomeIcon icon={faEnvelope} /> www.registerkaro.in</p>
                    </li>
                    <li>
                        <p><FontAwesomeIcon icon={faPhone} /> +91-8302491984</p>
                    </li>
                    <li>
                        <a className="text-light mx-3" href="www.instagram.com" ><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="text-light mx-3" href="www.facebook.com" ><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="text-light mx-3" href="www.twitter.com" ><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="text-light mx-3" href="www.pinterest.com" ><FontAwesomeIcon icon={faPinterest} /></a>
                    </li>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=96&q=75" alt="error" />
                        <span id='register'>Register</span>
                        <span id='karo'>Karo</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center justify-content-end me-auto mb-2 mb-lg-0 w-100 text-end">
                            <li className="nav-item px-2">
                                <a className="nav-link text-dark active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item px-2 dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul className="dropdown-menu">

                                </ul>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-dark" href="/">Blog</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-dark" href="/">Contact Us</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-dark" href="/">About Us</a>
                            </li>
                            <li className="nav-item px-2 d-flex align-items-start">
                                <FontAwesomeIcon icon={faSearch} size="xl" />
                            </li>
                            <button className="btn btn-lg btn-warning text-light mx-3">
                                Talk an Expert
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

        </header >
    )
}

export default Header;

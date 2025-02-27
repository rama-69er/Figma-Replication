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
                <span>
                    <FontAwesomeIcon icon={faEnvelope} /> www.registerkaro.in
                </span>
                <span>
                    <FontAwesomeIcon icon={faPhone} /> +91-8302491984
                </span>
                <span>
                    <a className="text-light mx-3" href="www.instagram.com" ><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="text-light mx-3" href="www.facebook.com" ><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="text-light mx-3" href="www.twitter.com" ><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="text-light mx-3" href="www.pinterest.com" ><FontAwesomeIcon icon={faPinterest} /></a>
                </span>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=96&q=75" alt="error" />
                        <span id='register'>Register</span>
                        <span id='karo'>Karo</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon d-flex align-items-center">
                            <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav d-flex align-items-center justify-content-end me-auto mb-2 mb-lg-0 w-100 text-end">
                            <li class="nav-item px-2">
                                <a class="nav-a text-dark active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-a text-dark dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul class="dropdown-menu">
                                    
                                </ul>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-a text-dark" href="/">Blog</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-a text-dark" href="/">Contact Us</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-a text-dark" href="/">About Us</a>
                            </li>
                            <li class="nav-item px-2 d-flex align-items-start">
                                <FontAwesomeIcon icon={faSearch} size="xl" />
                            </li>
                            <button class="btn btn-lg btn-warning text-light mx-3">
                                Talk an Expert
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;

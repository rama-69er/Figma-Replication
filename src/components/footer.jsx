import React from 'react';
import "../css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-md-4">
                    <p>
                        Design outstanding interfaces with advanced Figma features in a matter of minutes.
                    </p>
                    <ul className='logos'>
                        <li class="nav-item" >
                            <a className="text-light" href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">
                                <FontAwesomeIcon icon={faApple} />
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <a className='navbar-brand p-0 m-0' href="#">
                        START A BUSINESS
                    </a>
                    <ul>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Features</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Solutions</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Integrations</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Enterprise</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Solutions</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <a className='navbar-brand p-0 m-0' href="#">
                        REGISTERATION
                    </a>
                    <ul>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Patners</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Community</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Developers</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">App</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <a className='navbar-brand p-0 m-0' href="#">
                        COMLIANCE & TAX
                    </a>
                    <ul>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Channels</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Scale</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Watch the Demo</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Our Competition</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <a className='navbar-brand p-0 m-0' href="#">
                        BIS & CDSCO
                    </a>
                    <ul>
                        <li class="nav-item" >
                            <a className="text-light" href="#">About Us</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">News</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Leadership</a>
                        </li>
                        <li class="nav-item" >
                            <a className="text-light" href="#">Media Kit</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>
                <img src="my_logo.jpg" alt="Register Karo" />
                <p className='text-secondary'>© 2025 Registerkaro. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;

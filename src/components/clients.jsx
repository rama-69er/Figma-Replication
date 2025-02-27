import React from 'react'
import "../css/clients.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSheetPlastic, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

function Clients() {
    return (
        <>
            <div className='clientsPage'>

                <div className="container">
                    <h2>Our Happy Clients</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea corporis odio consequuntur possimus dolore enim exercitationem, deserunt totam quaerat tempora! Maiores voluptas velit veniam obcaecati? Aliquam porro quidem sint earum quod nemo fugit deleniti illum culpa, adipisci esse eos a?</p>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="udemy" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="clientsLogo">
                                <img src="https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ" alt="udemy" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='h5' to="#">Show more &#8594;</button>
            </div>
            <div className="clientsBottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <span className='d-flex align-items-center justify-content-center bg-danger'><FontAwesomeIcon icon={faSheetPlastic} /></span>
                            <span> Fill Up Application</span>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <span className='d-flex align-items-center justify-content-center bg-success'><FontAwesomeIcon icon={faCreditCard} /></span>
                            <span> Make Online Payment</span>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <span className='d-flex align-items-center justify-content-center bg-warning'><FontAwesomeIcon icon={faHeadset} /></span>
                            <span> Processing Application</span>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <span className='d-flex align-items-center justify-content-center bg-secondary'><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                            <span> Get Confirm Mail</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Clients

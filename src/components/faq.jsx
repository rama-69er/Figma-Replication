import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/faq.css"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

function Faq() {
    return (
        <>
            <div className="faqPage">
                <div>
                    <p>
                        FAQ !!!
                    </p>
                    <h2>Frequent Ask Questions</h2>
                </div>
                <ul>
                    <li>
                        Can I recover deleted files from desktop with this software ? <span>&#10749;</span>
                    </li>
                    <li>
                        Can I recover deleted files from desktop with this software ? <span>&#10749;</span>
                    </li>
                    <li>
                        Can I recover deleted files from desktop with this software ? <span>&#10749;</span>
                    </li>
                    <li>
                        Can I recover deleted files from desktop with this software ? <span>&#10749;</span>
                    </li>
                    <li>
                        Can I recover deleted files from desktop with this software ? <span>&#10749;</span>
                    </li>
                </ul>
                <button className="theme-btn my-0">
                    Show More &#8680;
                </button>
            </div>
            <div className="faqBottom">
                <div>
                    <p>WHY RESISTER KARO</p>
                    <h2>Some Numbers are important</h2>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>1M+</span>
                        <h4>Customers</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>12+</span>
                        <h4>Years of Excellence</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>41+</span>
                        <h4>R&D Engineers</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>78+</span>
                        <h4>Countries</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>3287+</span>
                        <h4>Patners</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <span>41+</span>
                        <h4>Awards Received</h4>
                    </div>
                </div>
            </div>
            <div className="formPage">
                <p>1% OF THE INDUSTRY</p>
                <h2>Welcome to your new digital reality.Now.</h2>
                <form action="/">
                    <input type="email" placeholder="Enter Your Email . . ." />
                    <button>Submit</button>
                </form>
                <div className="row">
                    <div className="col-md-4 text-light">
                        <FontAwesomeIcon icon={faCheckCircle} /> Instant Results
                    </div>
                    <div className="col-md-4 text-light">
                        <FontAwesomeIcon icon={faCheckCircle} /> User-Friendly Interface
                    </div>
                    <div className="col-md-4 text-light">
                        <FontAwesomeIcon icon={faCheckCircle} /> Personalized Customization
                    </div>
                </div>
            </div>
            <div className="faqLogos">
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
        </>
    )
}

export default Faq;

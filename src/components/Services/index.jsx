import './index.scss'
import {GrUserWorker} from "react-icons/gr";
import {IoTriangle} from "react-icons/io5";
import {FaCashRegister, FaCrown, FaNetworkWired} from "react-icons/fa";
import {MdAssuredWorkload} from "react-icons/md";
import {GiCash} from "react-icons/gi";
import {FaArrowUpRightDots} from "react-icons/fa6";
import {BiBarcodeReader} from "react-icons/bi";

function Services() {
    return (
        <section id={"services"}>
            <div className={"container"}>
                <div className={"title"}>
                    <h3>SERVICES</h3>
                    <h4>Our Exclusive Services We Offer For You</h4>
                </div>
                <div className={"row"}>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <GrUserWorker/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Financial Planning</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <FaNetworkWired/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Investments Management</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <MdAssuredWorkload/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Business Loan</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <FaCashRegister/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Taxes Consulting</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <GiCash/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Insurance Consulting</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <FaCrown/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Retirement Planning</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <FaArrowUpRightDots/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Risk Management</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className={"card col-3 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <BiBarcodeReader/>
                        </div>
                        <IoTriangle className={"triangle"}/>
                        <div className={"titles"}>
                            <h2>Technology Consulting</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
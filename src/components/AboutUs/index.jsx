import './index.scss'
import {GrUserWorker} from "react-icons/gr";
import {FaMapMarkedAlt, FaNetworkWired} from "react-icons/fa";
import {FaScrewdriverWrench} from "react-icons/fa6";

function AboutUs() {
    return (
        <section id={"aboutUs"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"row row1"}>
                            <div className={"box col-5 col-md-5 col-sm-5 col-xs-12"}>
                                <div className={"icon"}>
                                    <GrUserWorker/>
                                </div>
                                <h2>Professional Consultants</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                            <div className={"box box1 col-5 col-md-5 col-sm-5 col-xs-12"}>
                                <div className={"icon"}>
                                    <FaScrewdriverWrench/>
                                </div>
                                <h2>Comprehensive Services</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                            <div className={"box col-5 col-md-5 col-sm-5 col-xs-12"}>
                                <div className={"icon"}>
                                    <FaNetworkWired/>
                                </div>
                                <h2>A Culture that Delivers</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                            <div className={"box col-5 col-md-5 col-sm-5 col-xs-12"}>
                                <div className={"icon"}>
                                    <FaMapMarkedAlt/>
                                </div>
                                <h2>Industry Experience</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                    </div>
                    <div className={"box2 col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <h3>ABOUT UNION CORPORATION</h3>
                        <h4>More than 40M+ Trusted Our Financial & Conusultation Institution</h4>
                        <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.</h5>
                        <h5>A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                            mouth.</h5>
                        <a>LEARN MORE</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
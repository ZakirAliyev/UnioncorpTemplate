import './index.scss'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

function TopNavbar() {
    return (
        <section id={"topNavbar"}>
            <div className={"container"}>
                <div className={"wrapper"}>
                    <div>Call Us: +2 392 3929 210</div>
                    <div>Location: San Francisco, California, USA</div>
                </div>
                <div className={"boxes"}>
                    <a href={"https://facebook.com"} className={"box"}>
                        <FaFacebookF/>
                    </a>
                    <a href={"https://facebook.com"} className={"box"}>
                        <FaInstagram/>
                    </a>
                    <a href={"https://facebook.com"} className={"box"}>
                        <FaTwitter/>
                    </a>
                    <a href={"https://facebook.com"} className={"box"}>
                        <FaLinkedinIn/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default TopNavbar;
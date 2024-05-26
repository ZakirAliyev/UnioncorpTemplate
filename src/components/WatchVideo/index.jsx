import './index.scss'
import {FaPlay} from "react-icons/fa";

function WatchVideo() {
    return (
        <section id={"watchVideo"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}></div>
                    <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <h2>ABOUT UNION CORPORATION</h2>
                        <h3>Quality Makes the Belief for Customers</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.</p>
                        <div className={"box1"}>
                            <div className={"circle"}>
                                <FaPlay />
                            </div>
                            <h4>Watch Video</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WatchVideo;
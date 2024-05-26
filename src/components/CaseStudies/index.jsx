import './index.scss'

function CaseStudies() {
    return (
        <section id={"caseStudies"}>
            <div className={"title"}>
                <h2>CASE STUDIES</h2>
                <h3>We Take Every Case Studies Very Seriously</h3>
            </div>
            <div className={"row1 row"}>
                <div className={"box1 col-3 col-md-6 col-sm-12 col-xs-12"}>
                    <img src={"https://preview.colorlib.com/theme/unioncorp/images/gallery-1.jpg"}
                         alt={"SectionImage"}/>
                </div>
                <div className={"box1 col-3 col-md-6 col-sm-12 col-xs-12"}>
                    <img src={"https://preview.colorlib.com/theme/unioncorp/images/gallery-2.jpg"}
                         alt={"SectionImage"}/>
                </div>
                <div className={"box1 col-3 col-md-6 col-sm-12 col-xs-12"}>
                    <img src={"https://preview.colorlib.com/theme/unioncorp/images/gallery-3.jpg"}
                         alt={"SectionImage"}/>
                </div>
                <div className={"box1 col-3 col-md-6 col-sm-12 col-xs-12"}>
                    <img src={"https://preview.colorlib.com/theme/unioncorp/images/gallery-4.jpg"}
                         alt={"SectionImage"}/>
                </div>
            </div>
            <section id={"caseStudies1"}>
                <h6>GREAT REVIEWS FOR OUR SERVICES</h6>
                <p>Technical Statistics</p>
                <div className={"row2 row"}>
                    <div className={"col-2 col-md-6 col-sm-12 col-xs-12"}>
                        <h4>60</h4>
                        <h5>YEAR OF EXPERIENCED</h5>
                    </div>
                    <div className={"col-2 col-md-6 col-sm-12 col-xs-12"}>
                        <h4>9,200</h4>
                        <h5>SATISFIED CUSTOMERS</h5>
                    </div>
                    <div className={"col-2 col-md-6 col-sm-12 col-xs-12"}>
                        <h4>5,800</h4>
                        <h5>PROJECT COMPLETED</h5>
                    </div>
                    <div className={"col-2 col-md-6 col-sm-12 col-xs-12"}>
                        <h4>100</h4>
                        <h5>GET AWARDS</h5>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default CaseStudies;
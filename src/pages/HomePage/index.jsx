import Banner from "../../components/Banner/index.jsx";
import AboutUs from "../../components/AboutUs/index.jsx";
import WatchVideo from "../../components/WatchVideo/index.jsx";
import Services from "../../components/Services/index.jsx";
import CaseStudies from "../../components/CaseStudies/index.jsx";

function HomePage() {
    return (
        <>
            <Banner/>
            <AboutUs/>
            <WatchVideo/>
            <Services/>
            <CaseStudies/>
        </>
    );
}

export default HomePage;
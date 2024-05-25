import './index.scss'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className={"container"}>
                <nav>
                    <h1>
                        <div>UNION<span>CORP.</span><br/></div>
                        <span className={"slogan"}>FINANCE & CONSULTATION</span>
                    </h1>
                    <ul>
                        <Link className={"link"} to={'/'}>Home</Link>
                        <Link className={"link"} to={'/'}>About</Link>
                        {/*<Link className={"link"} to={'/'}>Services</Link>*/}
                        {/*<Link className={"link"} to={'/'}>Work</Link>*/}
                        {/*<Link className={"link"} to={'/'}>Pricing</Link>*/}
                        {/*<Link className={"link"} to={'/'}>Blog</Link>*/}
                        {/*<Link className={"link"} to={'/'}>Contact</Link>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
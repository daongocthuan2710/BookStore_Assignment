import React from "react";
import { Link } from "react-router-dom";
import LogoApp from "../../../assets/bookworm_icon.svg";
 function Footer () {
    return (
        <footer className="bg-light text-center text-white mt-5">

            <div
                className="text-center p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
            >
                thuandao2710@gmail.com 0825015***
                <Link to="/homePage" className="nav-link">
                            <img
                                className="img-responsive"
                                src={LogoApp}
                                alt="logo"
                            />
                        </Link>
            </div>
        </footer>
    );
};
export default Footer;
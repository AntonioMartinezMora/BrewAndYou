import React from "react";
import {Link} from "react-router-dom"
import { FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";
import '../Style/App.css'; 

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer__container">
            <div className="footer__left">
                <div className="footer__pages">
                    <Link
                        to={"/about"}
                        className="footer__page--link"
                    >
                        About
                    </Link>
                    <Link
                        to={"/terms"}
                        className="footer__page--link"
                    >
                        Terms
                    </Link>
                    <Link
                        to={"/contact"}
                        className="footer__page--link"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="footer__center">
                Keep up with us 
                <a 
                    href={"https://twitter.com/societyjersey"}
                    target="_blank"
                    className="footer__social--link"
                >
                    <FaTwitterSquare />
                </a>
                <a 
                    href={"https://twitter.com/societyjersey"}
                    target="_blank"
                    className="footer__social--link"
                >
                    <FaInstagramSquare/>
                </a>
                 
            </div>

            <div className="footer__right">
                &copy; {year} BrewedAndYou  
            </div>
        </div>
        </footer>
    )
}

export default Footer;
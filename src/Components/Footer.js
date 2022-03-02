import React from "react";
import {Link} from "react-router-dom"
import { FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";
import '../Style/App.css'; 
import '../Style/Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer__left">
                <Link
                    to={"/"}
                >
                    www.brewedandyou.co
                </Link>
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
                Keep up with us <FaTwitterSquare /> <FaInstagramSquare/>
            </div>

            <div className="footer__right">
                &copy; {year} BrewedAndYou  
            </div>
        </footer>
    )
}

export default Footer;

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
    
    handleNavigation = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    render() {
        const currentYear = new Date().getFullYear();

        const navigation = [
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Art Gallery", path: "/art-gallery" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" }
        ];

        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__top">
                        <Link
                            to="/"
                            className="footer__brand"
                            aria-label="Jason Carcamo, homepage"
                        >
                            JASON CARCAMO
                            <span className="footer__brand-dot">.</span>
                        </Link>

                        <div className="footer__availability">
                            <span
                                className="footer__availability-dot"
                                aria-hidden="true"
                            />

                            <span>
                                Open to collaborations
                            </span>
                        </div>
                    </div>

                    <div className="footer__feature">
                        <p className="footer__eyebrow">
                            HAVE A PROJECT OR AN IDEA?
                        </p>

                        <Link
                            to="/contact"
                            className="footer__headline"
                            aria-label="Have something in mind? Contact me"
                            onClick={this.handleNavigation}
                        >
                            <span className="footer__headline-line">
                                Have something
                            </span>

                            <span className="footer__headline-line footer__headline-line--accent">
                                in mind?

                                <span
                                    className="footer__headline-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </span>
                        </Link>

                        <p className="footer__description">
                            Development, art, or something
                            entirely new. Let's make it happen.
                        </p>
                    </div>

                    <div className="footer__separator" />

                    <div className="footer__links">
                        <nav
                            className="footer__navigation"
                            aria-label="Footer navigation"
                        >
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer__nav-link footer__nav-link--active"
                                            : "footer__nav-link"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="footer__socials">
                            <a
                                href="https://github.com/jasoncarcamo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                                <span aria-hidden="true">↗</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jasoncarcamo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>
                            © {currentYear} Jason Carcamo
                        </p>

                        <p>
                            Full-Stack Developer & Fine Artist
                        </p>

                        <p>
                            Long Island, NY
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

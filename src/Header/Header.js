
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
            scrolled: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, {
            passive: true
        });

        window.addEventListener("resize", this.handleResize);
        document.addEventListener("keydown", this.handleKeyDown);

        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleScroll() {
        const scrolled = window.scrollY > 30;

        if (this.state.scrolled !== scrolled) {
            this.setState({ scrolled });
        }
    }

    handleResize() {
        if (window.innerWidth > 900 && this.state.menuOpen) {
            this.closeMenu();
        }
    }

    handleKeyDown(event) {
        if (event.key === "Escape" && this.state.menuOpen) {
            this.closeMenu();
            this.menuButton?.focus();
        }
    }

    toggleMenu() {
        this.setState((previousState) => ({
            menuOpen: !previousState.menuOpen
        }));
    }

    closeMenu() {
        if (this.state.menuOpen) {
            this.setState({ menuOpen: false });
        }
        
        this.handleNavigation();
    }

    handleNavigation = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    render() {
        const { menuOpen, scrolled } = this.state;

        const navigation = [
            { path: "/", label: "Home" },
            { path: "/projects", label: "Projects" },
            { path: "/art-gallery", label: "Art Gallery" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" }
        ];

        return (
            <header
                className={[
                    "site-header",
                    scrolled ? "site-header--scrolled" : "",
                    menuOpen ? "site-header--menu-open" : ""
                ].filter(Boolean).join(" ")}
            >
                <div className="site-header__inner">
                    <Link
                        to="/"
                        className="site-header__brand"
                        onClick={this.closeMenu}
                        aria-label="Jason Carcamo — Home"
                    >
                        <span
                            className="site-header__monogram"
                            aria-hidden="true"
                        >
                            JC
                        </span>

                        <span className="site-header__brand-name">
                            Jason Carcamo
                        </span>
                    </Link>

                    <nav
                        id="primary-navigation"
                        className={[
                            "site-header__nav",
                            menuOpen ? "site-header__nav--open" : ""
                        ].filter(Boolean).join(" ")}
                        aria-label="Primary navigation"
                    >
                        <ul className="site-header__links">
                            {navigation.map(({ path, label }) => (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        end={path === "/"}
                                        onClick={this.closeMenu}
                                        className={({ isActive }) =>
                                            [
                                                "site-header__link",
                                                isActive
                                                    ? "site-header__link--active"
                                                    : ""
                                            ].filter(Boolean).join(" ")
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="site-header__actions">
                        <Link
                            to="/contact"
                            className="site-header__contact"
                            onClick={this.closeMenu}
                        >
                            <span>Let's Connect</span>
                            <span aria-hidden="true">→</span>
                        </Link>

                        <button
                            ref={(element) => {
                                this.menuButton = element;
                            }}
                            type="button"
                            className={[
                                "site-header__menu",
                                menuOpen ? "site-header__menu--open" : ""
                            ].filter(Boolean).join(" ")}
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={menuOpen}
                            aria-controls="primary-navigation"
                            onClick={this.toggleMenu}
                        >
                            <span className="site-header__menu-lines">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

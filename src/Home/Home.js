
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SEO from "../SEO/SEO";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: 0,
            reducedMotion: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleMotionChange = this.handleMotionChange.bind(this);
    }

    componentDidMount() {

        this.motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        this.setState({
            reducedMotion: this.motionQuery.matches
        });

        this.motionQuery.addEventListener(
            "change",
            this.handleMotionChange
        );

        window.addEventListener("scroll", this.handleScroll, {
            passive: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    
        if (this.scrollFrame) {
            window.cancelAnimationFrame(this.scrollFrame);
        }
    
        if (this.motionQuery) {
            this.motionQuery.removeEventListener(
                "change",
                this.handleMotionChange
            );
        }
    }

    handleMotionChange(event) {
        this.setState({
            reducedMotion: event.matches
        });
    }

    handleScroll() {
        if (this.state.reducedMotion) {
            return;
        }

        if (this.scrollFrame) {
            return;
        }

        this.scrollFrame = window.requestAnimationFrame(() => {
            this.scrollFrame = null;

            this.setState({
                scrollY: window.scrollY
            });
        });
    }

    render() {
        const { scrollY, reducedMotion } = this.state;

        const parallaxOffset = reducedMotion
            ? 0
            : Math.min(scrollY * 0.18, 140);

        return (
            <section
                className="home-hero"
                aria-labelledby="home-title"
            >
                <SEO
                    title="Jason Carcamo | React.js Developer, Fine artist & Founder"
                    description="Jason Carcamo is a React.js full-stack developer, fine artist, and founder of Carcamo Studios LLC. Explore his web development projects and original artwork."
                    path="/"
                />
                <div
                    className="home-hero__background"
                    aria-hidden="true"
                    style={{
                        transform: `translate3d(0, ${parallaxOffset}px, 0)`
                    }}
                />

                <div
                    className="home-hero__shade"
                    aria-hidden="true"
                />

                <div className="home-hero__container">
                    <div className="home-hero__content">
                        <p className="home-hero__eyebrow">
                            React.js Full-Stack Developer
                            <span aria-hidden="true"> & </span>
                            Fine Artist
                        </p>

                        <h1
                            id="home-title"
                            className="home-hero__title"
                        >
                            Jason Carcamo
                        </h1>

                        <p className="home-hero__subtitle">
                            Where Creativity Meets Craftsmanship.
                        </p>

                        <p className="home-hero__description">
                            I specialize in building modern, responsive web
                            applications using React.js, JavaScript, Node.js,
                            Express.js, and PostgreSQL. Combining technical
                            expertise with creative design, I develop
                            high-performance digital experiences.
                        </p>

                        <div className="home-hero__actions">
                            <Link
                                to="/projects"
                                className="home-hero__button home-hero__button--primary"
                            >
                                Explore My Work
                                <span aria-hidden="true">↗</span>
                            </Link>

                            <Link
                                to="/art-gallery"
                                className="home-hero__button home-hero__button--outline"
                            >
                                View Art Gallery
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="home-hero__scroll-indicator"
                    aria-hidden="true"
                >
                    <span>Scroll to Explore</span>
                    <span className="home-hero__scroll-line" />
                </div>
            </section>
        );
    }
}

export default Home;

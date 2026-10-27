import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import SEO from "../SEO/SEO";

class About extends Component {

    render() {
        return (
            <div className="about">
                <SEO
                    title="Jason Carcamo | Developer, Artist & Founder"
                    description="Learn about Jason Carcamo, React.js full-stack developer, fine artist, and founder of Carcamo Studios LLC, a web development company at carcamostudios.com."
                    path="/about"
                />
                
                <section
                    className="about__hero"
                    aria-labelledby="about-title"
                >
                    <div className="about__hero-content">
                        <p className="about__eyebrow">
                            Developer · Fine Artist · Founder
                        </p>

                        <h1 id="about-title">
                            A Passion for
                            <br />
                            <em>Creation.</em>
                        </h1>

                        
                        <p className="about__hero-description">
                            I'm Jason Carcamo, a React.js full-stack developer,
                            fine artist, and founder of Carcamo Studios LLC.
                            I create modern web applications and original artwork
                            through a combination of technical precision
                            and artistic creativity.
                        </p>


                        <div
                            className="about__hero-decoration"
                            aria-hidden="true"
                        >
                            <span />
                            <span>JC</span>
                        </div>
                    </div>
                </section>

                <section
                    className="about__introduction"
                    aria-labelledby="about-introduction-title"
                >
                    <div className="about__container about__split">
                        <div className="about__visual">
                            <div className="about__visual-inner">
                                <span className="about__visual-monogram">
                                    JC
                                </span>

                                <span className="about__visual-caption">
                                    Jason Carcamo
                                </span>
                            </div>
                        </div>

                        <div className="about__copy">
                            <p className="about__eyebrow">
                                A Little About Me
                            </p>

                            <h2 id="about-introduction-title">
                                Where Technology
                                <br />
                                Meets <em>Artistry.</em>
                            </h2>

                            <p>
                                My work exists at the intersection
                                of technology and creativity. As a
                                developer, I enjoy transforming
                                ideas into functional, thoughtful
                                digital experiences.
                            </p>

                            <p>
                                As an artist, I explore traditional
                                techniques, composition, color,
                                and the expressive possibilities
                                of working by hand.
                            </p>

                            <p>
                                These two disciplines continually
                                influence each other. Art strengthens
                                my attention to detail, while
                                development challenges me to solve
                                problems with structure and purpose.
                            </p>

                            <Link
                                to="/projects"
                                className="about__text-link"
                            >
                                Explore My Development Work
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section
                    className="about__development"
                    aria-labelledby="about-development-title"
                >
                    <div className="about__container about__split">
                        <div className="about__copy">
                            <p className="about__eyebrow">
                                Jason Carcamo | React.js Full-Stack Developer
                            </p>

                            <h2 id="about-development-title">
                                Built with Purpose.
                                <br />
                                <em>Designed to Last.</em>
                            </h2>

                            <p>
                                I specialize in building responsive
                                websites and full-stack applications
                                using modern web technologies.
                                My approach prioritizes clean
                                architecture, usability, performance,
                                and accessibility.
                            </p>

                            <p>
                                From user interfaces to backend
                                systems and databases, I enjoy
                                understanding how every part of
                                an application works together.
                            </p>

                            <ul
                                className="about__skills"
                                aria-label="Development skills"
                            >
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                                <li>REST APIs</li>
                                <li>HTML5 & CSS3</li>
                                <li>Responsive Design</li>
                                <li>Web Accessibility</li>
                                <li>Performance & SEO</li>
                            </ul>

                            <Link
                                to="/projects"
                                className="about__text-link"
                            >
                                View Projects
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>

                        <div className="about__feature-art about__feature-art--code">
                            <div className="about__feature-art-content">
                                <span className="about__feature-number">
                                    01 / DEVELOPMENT
                                </span>

                                <span className="about__feature-symbol">
                                    &lt;/&gt;
                                </span>

                                <span className="about__feature-caption">
                                    Engineering thoughtful
                                    digital experiences.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="about__art"
                    aria-labelledby="about-art-title"
                >
                    <div className="about__container about__split">
                        <div className="about__feature-art about__feature-art--painting">
                            <div className="about__feature-art-content">
                                <span className="about__feature-number">
                                    02 / FINE ART
                                </span>

                                <span className="about__feature-symbol about__feature-symbol--serif">
                                    Art
                                </span>

                                <span className="about__feature-caption">
                                    Exploring light, color,
                                    and classical expression.
                                </span>
                            </div>
                        </div>

                        <div className="about__copy">
                            <p className="about__eyebrow">
                                Jason Carcamo | Fine Artist
                            </p>

                            <h2 id="about-art-title">
                                Inspired by Light.
                                <br />
                                <em>Drawn to the Timeless.</em>
                            </h2>

                            <p>
                                Fine art allows me to explore
                                ideas beyond the screen. I enjoy
                                traditional drawing and painting,
                                particularly oil painting and
                                the study of light, form, and color.
                            </p>

                            <p>
                                I'm drawn to the craftsmanship
                                found in classical artwork and
                                the process of developing a
                                composition from its earliest
                                sketches to its final details.
                            </p>

                            <p>
                                Whether I'm painting on canvas
                                or building an application,
                                I value patience, thoughtful
                                execution, and continuous learning.
                            </p>

                            <Link
                                to="/art-gallery"
                                className="about__text-link"
                            >
                                Visit the Art Gallery
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </section>
                
                <section
                    className="about__founder"
                    aria-labelledby="about-founder-title"
                >
                    <div className="about__container about__split">
                        <div className="about__founder-visual">
                            <div className="about__founder-visual-inner">
                                <span className="about__founder-number">
                                    03 / ENTREPRENEURSHIP
                                </span>

                                <span className="about__founder-monogram">
                                    CS
                                </span>

                                <span className="about__founder-caption">
                                    Carcamo Studios LLC
                                </span>
                            </div>
                        </div>

                        <div className="about__copy">
                            <p className="about__eyebrow">
                                Jason Carcamo | Founder of Carcamo Studios LLC
                            </p>

                            <h2 id="about-founder-title">
                                Building Beyond
                                <br />
                                <em>the Code.</em>
                            </h2>

                            <p>
                                I'm the founder of Carcamo Studios LLC,
                                a web development company focused on
                                creating modern digital experiences
                                for businesses and entrepreneurs.
                            </p>

                            <p>
                                Through Carcamo Studios, I bring together
                                my experience in React.js, full-stack
                                development, responsive design, and
                                search engine optimization to build
                                websites and applications with
                                purpose and precision.
                            </p>

                            <p>
                                My goal is to combine thoughtful design,
                                technical craftsmanship, and long-term
                                performance to help businesses
                                establish a stronger digital presence.
                            </p>

                            <a
                                href="https://www.carcamostudios.com/"
                                className="about__text-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Carcamo Studios LLC website"
                            >
                                Visit Carcamo Studios
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    className="about__closing"
                    aria-labelledby="about-closing-title"
                >
                    <div className="about__closing-content">
                        <p className="about__eyebrow">
                            The Next Chapter
                        </p>

                        <h2 id="about-closing-title">
                            Every Great Idea
                            <br />
                            Begins with a <em>Conversation.</em>
                        </h2>

                        <p>
                            Whether you're interested in
                            collaborating on a digital project
                            or connecting through art,
                            I'd be glad to hear from you.
                        </p>

                        <Link
                            to="/contact"
                            className="about__contact-button"
                        >
                            Let's Connect
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default About;

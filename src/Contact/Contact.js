import React, { Component } from "react";
import "./Contact.css";
import SEO from "../SEO/SEO";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            error: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            error: ""
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            name,
            email,
            subject,
            message
        } = this.state;

        if (
            !name.trim() ||
            !email.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            this.setState({
                error: "Please complete all fields before continuing."
            });

            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            this.setState({
                error: "Please enter a valid email address."
            });

            return;
        }

        const recipient = "jasoncarcamo30@yahoo.com";

        const emailSubject = encodeURIComponent(
            `Portfolio Inquiry: ${subject.trim()}`
        );

        const emailBody = encodeURIComponent(
            `Name: ${name.trim()}\n` +
            `Email: ${email.trim()}\n` +
            `Subject: ${subject.trim()}\n\n` +
            `Message:\n${message.trim()}`
        );

        window.location.href =
            `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    }

    render() {
        const {
            name,
            email,
            subject,
            message,
            error
        } = this.state;

        return (
            <div className="contact">
                <SEO
                    title="Contact Jason Carcamo | Developer, Artist & Founder"
                    description="Contact Jason Carcamo, React.js full-stack developer, fine artist, and founder of Carcamo Studios LLC, for web development and creative collaborations."
                    path="/contact"
                />
                
                <section
                    className="contact__hero"
                    aria-labelledby="contact-title"
                >
                    <div className="contact__hero-inner">
                        <p className="contact__eyebrow">
                            Let's Begin a Conversation
                        </p>

                        <h1 id="contact-title">
                            Let's Create Something
                            <br />
                            <em>Remarkable.</em>
                        </h1>

                        <p className="contact__hero-description">
                            Whether it's a digital experience,
                            a creative collaboration, or simply
                            an introduction, I'd love to hear
                            from you.
                        </p>

                        <div
                            className="contact__hero-ornament"
                            aria-hidden="true"
                        >
                            <span />
                            <span>JC</span>
                            <span />
                        </div>
                    </div>
                </section>

                <section
                    className="contact__main"
                    aria-label="Contact information and inquiry form"
                >
                    <div className="contact__container">
                        <div className="contact__layout">
                            <div className="contact__information">
                                <p className="contact__eyebrow">
                                    Get in Touch
                                </p>

                                <h2>
                                    Have an Idea
                                    <br />
                                    <em>in Mind?</em>
                                </h2>

                                <p className="contact__information-description">
                                    Tell me about your project,
                                    your vision, or what you're
                                    hoping to create. I'm always
                                    interested in meaningful work
                                    and creative opportunities.
                                </p>

                                <div className="contact__detail">
                                    <span className="contact__detail-label">
                                        Email
                                    </span>

                                    <a
                                        href="mailto:jasoncarcamo30@yahoo.com"
                                        className="contact__detail-value"
                                        target="_blank"
                                    >
                                        jasoncarcamo30@yahoo.com
                                    </a>
                                </div>

                                <div className="contact__detail">
                                    <span className="contact__detail-label">
                                        Based In
                                    </span>

                                    <span className="contact__detail-value">
                                        Long Island, New York
                                    </span>
                                </div>

                                <div className="contact__detail">
                                    <span className="contact__detail-label">
                                        Connect Online
                                    </span>

                                    <div className="contact__socials">
                                        <a
                                            href="https://github.com/jasoncarcamo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub ↗
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/jasoncarcamo/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn ↗
                                        </a>
                                    </div>
                                </div>

                                <div className="contact__specialties">
                                    <span>Web Development</span>
                                    <span>Full-Stack Applications</span>
                                    <span>Fine Art</span>
                                    <span>Creative Collaboration</span>
                                </div>
                            </div>

                            <div className="contact__form-panel">
                                <div className="contact__form-heading">
                                    <p className="contact__eyebrow">
                                        Send an Inquiry
                                    </p>

                                    <h2>
                                        Your Message
                                    </h2>

                                    <p>
                                        Fill out the form below
                                        to prepare an email.
                                    </p>
                                </div>

                                <form
                                    className="contact__form"
                                    onSubmit={this.handleSubmit}
                                    noValidate
                                >
                                    <div className="contact__form-row">
                                        <div className="contact__field">
                                            <label htmlFor="contact-name">
                                                Your Name
                                            </label>

                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={this.handleChange}
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                maxLength={100}
                                                required
                                            />
                                        </div>

                                        <div className="contact__field">
                                            <label htmlFor="contact-email">
                                                Email Address
                                            </label>

                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={this.handleChange}
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                maxLength={254}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact__field">
                                        <label htmlFor="contact-subject">
                                            What is this regarding?
                                        </label>

                                        <select
                                            id="contact-subject"
                                            name="subject"
                                            value={subject}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            <option value="">
                                                Select a topic
                                            </option>

                                            <option value="Web Development">
                                                Web Development
                                            </option>

                                            <option value="Full-Stack Application">
                                                Full-Stack Application
                                            </option>

                                            <option value="Fine Art">
                                                Fine Art
                                            </option>

                                            <option value="Creative Collaboration">
                                                Creative Collaboration
                                            </option>

                                            <option value="General Inquiry">
                                                General Inquiry
                                            </option>
                                        </select>
                                    </div>

                                    <div className="contact__field">
                                        <label htmlFor="contact-message">
                                            Tell Me About Your Idea
                                        </label>

                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={message}
                                            onChange={this.handleChange}
                                            placeholder="Share a little about your project, idea, or question..."
                                            rows={7}
                                            maxLength={5000}
                                            required
                                        />
                                    </div>

                                    {error && (
                                        <p
                                            className="contact__error"
                                            role="alert"
                                        >
                                            {error}
                                        </p>
                                    )}

                                    <button
                                        className="contact__submit"
                                        type="submit"
                                    >
                                        Open Email to Send
                                        <span aria-hidden="true">↗</span>
                                    </button>

                                    <p className="contact__form-note">
                                        This opens your email application.
                                        Review and send the message there.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="contact__closing"
                    aria-labelledby="contact-closing-title"
                >
                    <div className="contact__closing-inner">
                        <p className="contact__eyebrow">
                            Creativity & Craftsmanship
                        </p>

                        <h2 id="contact-closing-title">
                            Great Work Begins
                            <br />
                            with <em>Connection.</em>
                        </h2>

                        <p>
                            Thank you for visiting my portfolio.
                            I look forward to the possibility
                            of creating something meaningful together.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;

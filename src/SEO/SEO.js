
import React, { Component } from "react";

class SEO extends Component {
    static defaultProps = {
        title: "Jason Carcamo | React.js Full-Stack Developer",
        description:
            "Jason Carcamo is a React.js full-stack developer specializing in JavaScript, Node.js, Express.js, PostgreSQL, responsive websites, and modern web applications.",
        path: "/",
        image: "/images/social-preview.jpg"
    };

    componentDidMount() {
        this.updateSEO();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.title !== this.props.title ||
            prevProps.description !== this.props.description ||
            prevProps.path !== this.props.path ||
            prevProps.image !== this.props.image
        ) {
            this.updateSEO();
        }
    }

    updateMeta(attribute, key, content) {
        let element = document.head.querySelector(
            `meta[${attribute}="${key}"]`
        );

        if (!element) {
            element = document.createElement("meta");
            element.setAttribute(attribute, key);
            document.head.appendChild(element);
        }

        element.setAttribute("content", content);
    }

    updateSEO() {
        const {
            title,
            description,
            path,
            image
        } = this.props;

        const baseURL = "https://www.jasoncarcamo.com";
        const canonicalURL = `${baseURL}${path}`;
        const imageURL = new URL(image, baseURL).href;

        document.title = title;

        this.updateMeta("name", "description", description);
        this.updateMeta("name", "robots", "index, follow");

        this.updateMeta("property", "og:type", "website");
        this.updateMeta("property", "og:site_name", "Jason Carcamo");
        this.updateMeta("property", "og:title", title);
        this.updateMeta("property", "og:description", description);
        this.updateMeta("property", "og:url", canonicalURL);
        this.updateMeta("property", "og:image", imageURL);

        this.updateMeta("name", "twitter:card", "summary_large_image");
        this.updateMeta("name", "twitter:title", title);
        this.updateMeta("name", "twitter:description", description);
        this.updateMeta("name", "twitter:image", imageURL);

        let canonical = document.head.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }

        canonical.setAttribute("href", canonicalURL);
    }

    render() {
        return null;
    }
}

export default SEO;

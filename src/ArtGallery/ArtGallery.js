import React, { Component } from "react";
import { Link } from "react-router-dom";
import artworks from "./data";
import "./ArtGallery.css";
import SEO from "../SEO/SEO";

class ArtGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: "all"
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(category) {
        this.setState({
            activeFilter: category
        });
    }

    renderArtwork(artwork) {
        return (
            <article
                className="art-gallery__card"
                key={artwork.id}
            >
                <div className="art-gallery__image">
                    {artwork.image ? (
                        <img
                            src={artwork.image}
                            alt={`${artwork.title}, ${artwork.medium}`}
                            loading="lazy"
                            decoding="async"
                            onError={(event) => {
                                event.currentTarget.hidden = true;
                            }}
                        />
                    ) : (
                        <div
                            className="art-gallery__placeholder"
                            aria-label="Artwork image coming soon"
                            role="img"
                        >
                            <span
                                className="art-gallery__placeholder-symbol"
                                aria-hidden="true"
                            >
                                JC
                            </span>

                            <span className="art-gallery__placeholder-text">
                                Artwork Coming Soon
                            </span>
                        </div>
                    )}

                    <span className="art-gallery__image-medium">
                        {artwork.medium}
                    </span>
                </div>

                <div className="art-gallery__card-content">
                    <div className="art-gallery__card-heading">
                        <h2>{artwork.title}</h2>

                        <span>{artwork.year}</span>
                    </div>

                    <p className="art-gallery__description">
                        {artwork.description}
                    </p>

                    <div className="art-gallery__details">
                        <span>{artwork.dimensions}</span>

                        <span
                            className="art-gallery__status"
                        >
                            {artwork.status}
                        </span>
                    </div>
                </div>
            </article>
        );
    }

    render() {
        const { activeFilter } = this.state;

        const filters = [
            { id: "all", label: "All Artwork" },
            { id: "oil-painting", label: "Oil Paintings" },
            { id: "graphite", label: "Graphite" },
            { id: "drawing", label: "Drawings" },
            { id: "oil-pastel", label: "Oil Pastels" },
            {id: "digital-art", label: "Digital Art"}
        ];

        const visibleArtworks = activeFilter === "all"
            ? artworks
            : artworks.filter(
                (artwork) => artwork.category === activeFilter
            );

        return (
            <div className="art-gallery">
                <SEO
                    title="Fine Art & Digital Art | Jason Carcamo"
                    description="Explore oil paintings, traditional drawings, and digital artwork by Jason Carcamo, fine artist, React.js developer, and founder of Carcamo Studios LLC."
                    path="/art-gallery"
                />

                <section
                    className="art-gallery__hero"
                    aria-labelledby="art-gallery-title"
                >
                    <div className="art-gallery__hero-content">
                        <p className="art-gallery__eyebrow">
                            The Artist's Collection
                        </p>

                        <h1 id="art-gallery-title">
                            Art <em>Gallery</em>
                        </h1>

                        <p className="art-gallery__intro">
                            An exploration of creativity through
                            traditional mediums, classical
                            techniques, and expressive compositions.
                        </p>

                        <span className="art-gallery__hero-line" />
                    </div>
                </section>

                <section
                    className="art-gallery__collection"
                    aria-label="Artwork collection"
                >
                    <div className="art-gallery__container">
                        <div className="art-gallery__section-heading">
                            <div>
                                <p className="art-gallery__eyebrow">
                                    Explore the Collection
                                </p>

                                <h2>
                                    Selected <em>Works</em>
                                </h2>
                            </div>

                            <p>
                                A growing collection of original
                                paintings and drawings.
                            </p>
                        </div>

                        {/*<div
                            className="art-gallery__filters"
                            role="group"
                            aria-label="Filter artwork by medium"
                        >
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    type="button"
                                    className={
                                        activeFilter === filter.id
                                            ? "art-gallery__filter art-gallery__filter--active"
                                            : "art-gallery__filter"
                                    }
                                    aria-pressed={
                                        activeFilter === filter.id
                                    }
                                    onClick={() => {
                                        this.handleFilter(filter.id);
                                    }}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>*/}

                        {/*<p
                            className="art-gallery__count"
                            role="status"
                        >
                            Showing {visibleArtworks.length} artworks
                            <span> · Sample collection</span>
                        </p>

                        <div className="art-gallery__grid">
                            {visibleArtworks.map((artwork) =>
                                this.renderArtwork(artwork)
                            )}
                        </div>*/}
                        
                        
                        <div
                            className="art-gallery__coming-soon"
                            role="status"
                        >
                            <span className="art-gallery__coming-soon-eyebrow">
                                THE COLLECTION
                            </span>

                            <h2>
                                Artwork <em>Coming Soon.</em>
                            </h2>

                            <p>
                                A curated collection of original paintings,
                                drawings, and digital artwork is currently
                                being prepared. New pieces will be
                                unveiled here soon.
                            </p>

                            <span
                                className="art-gallery__coming-soon-decoration"
                                aria-hidden="true"
                            >
                                ✦
                            </span>
                        </div>

                    </div>
                </section>

                <section
                    className="art-gallery__contact"
                    aria-labelledby="art-contact-title"
                >
                    <div className="art-gallery__contact-inner">
                        <p className="art-gallery__eyebrow">
                            Art & Creativity
                        </p>

                        <h2 id="art-contact-title">
                            Let's Create Something
                            <em> Beautiful.</em>
                        </h2>

                        <p>
                            Interested in my artwork or discussing
                            a creative collaboration? I'd love
                            to hear from you.
                        </p>

                        <Link
                            to="/contact"
                            className="art-gallery__contact-link"
                        >
                            Get in Touch
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ArtGallery;

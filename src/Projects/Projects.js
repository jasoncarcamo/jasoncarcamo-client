import React, { Component } from "react";
import projects from "./data";
import "./Projects.css";
import SEO from "../SEO/SEO";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: "all"
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        document.title = "Web Development Projects | Jason Carcamo";
    }

    handleFilter(category) {
        this.setState({
            activeFilter: category
        });
    }

    renderProject(project) {
        return (
            <article className="projects__card" key={project.id}>
                <div className="projects__image">
                    <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                            event.currentTarget.hidden = true;
                        }}
                    />

                    <span className="projects__image-label">
                        {project.category === "fullstack"
                            ? "Full-Stack"
                            : project.category === "frontend"
                                ? "Frontend"
                                : "Mobile"}
                    </span>
                </div>

                <div className="projects__card-content">
                    <h2 className="projects__card-title">
                        {project.title}
                    </h2>

                    <p className="projects__description">
                        {project.description}
                    </p>

                    <ul
                        className="projects__technologies"
                        aria-label={`${project.title} technologies`}
                    >
                        {project.technologies.map((technology) => (
                            <li key={technology}>
                                {technology}
                            </li>
                        ))}
                    </ul>

                    <div className="projects__links">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live demo (opens in new tab)`}
                            >
                                Live Demo <span aria-hidden="true">↗</span>
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                            >
                                GitHub <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    render() {
        const { activeFilter } = this.state;

        const filters = [
            { id: "all", label: "All Projects" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "frontend", label: "Frontend" },
            { id: "mobile", label: "Mobile Apps" }
        ];

        const visibleProjects = activeFilter === "all"
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

        return (
            <div className="projects">
                <SEO
                    title="React.js & Full-Stack Projects | Jason Carcamo"
                    description="Explore React.js and full-stack projects by Jason Carcamo, founder of Carcamo Studios LLC, featuring JavaScript, Node.js, Express.js, PostgreSQL, and REST APIs."
                    path="/projects"
                />
                
                <section
                    className="projects__hero"
                    aria-labelledby="projects-title"
                >
                    <div className="projects__hero-content">
                        <p className="projects__eyebrow">
                            Development Portfolio
                        </p>

                        <h1 id="projects-title">
                            Selected <em>Projects</em>
                        </h1>

                        <p className="projects__intro">
                            A collection of websites, full-stack
                            applications, and mobile experiences
                            built with creativity, precision,
                            and attention to detail.
                        </p>
                    </div>
                </section>

                <section
                    className="projects__portfolio"
                    aria-label="Project portfolio"
                >
                    <div className="projects__container">
                        <div
                            className="projects__filters"
                            role="group"
                            aria-label="Filter projects by category"
                        >
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    type="button"
                                    className={
                                        activeFilter === filter.id
                                            ? "projects__filter projects__filter--active"
                                            : "projects__filter"
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
                        </div>

                        <p className="projects__count" role="status">
                            Showing {visibleProjects.length} projects
                        </p>

                        <div className="projects__grid">
                            {visibleProjects.map((project) =>
                                this.renderProject(project)
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;

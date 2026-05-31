import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';
import { projects } from '../../data/projects';
import { SITE_URL } from '../../data/site';

const Projects = ({ hideAllBtn = false, showAll = false, twoColumnDesktop = false }) => {
    const displayedProjects = showAll ? projects : projects.filter(project => project.showInHome);
    const gridClass = twoColumnDesktop
        ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

    return (
        <Section id="projects" className="bg-white">
            <Container>
                <div className="mb-16">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold">
                        Selected <span className="text-color-primary italic">Works</span>
                    </h2>
                    <p className="opacity-80 mt-4 text-lg">A showcase of recent Webflow and design projects.</p>
                </div>

                <div className={gridClass}>
                    {displayedProjects.map((project) => (
                        <article
                            key={project.id}
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                            className="group bg-white border-2 border-black p-4 flex flex-col h-full transition-all duration-300 card-shadow transition-shadow"
                        >
                            <meta itemProp="creator" content="Ketu Patel" />
                            <link itemProp="url" href={project.link} />
                            <div className="aspect-[4/3] overflow-hidden border-b-2 border-black mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    itemProp="image"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-grow flex flex-col">
                                <span className="text-color-primary-accessible font-bold uppercase tracking-wider text-sm block mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3" itemProp="name">{project.title}</h3>
                                <p className="opacity-80 mb-4 line-clamp-3" itemProp="description">
                                    {project.description}
                                </p>
                                <meta itemProp="keywords" content={project.features.join(', ')} />
                                <link itemProp="mainEntityOfPage" href={`${SITE_URL}/work#project-${project.id}`} />

                                {project.features && project.features.length > 0 && (
                                    <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 mb-6 list-none">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm font-medium opacity-90">
                                                <span className="w-1.5 h-1.5 bg-color-primary-accessible flex-shrink-0" aria-hidden="true"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="mt-auto">
                                {project.link ? (
                                    <Button
                                        variant="secondary"
                                        href={project.link}
                                        className="w-full"
                                        ariaLabel={`View ${project.title} project (opens in new tab)`}
                                    >
                                        View Project
                                    </Button>
                                ) : (
                                    <Button variant="secondary" className="w-full opacity-50 cursor-not-allowed" disabled ariaLabel={`${project.title} coming soon`}>
                                        Coming Soon
                                    </Button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {!hideAllBtn && (
                    <div className="mt-20 text-center">
                        <Button variant="primary" href="/work" className="px-12">View All Projects</Button>
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default Projects;

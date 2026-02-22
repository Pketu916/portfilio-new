import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';
import { projects } from '../../data/projects';

const Projects = ({ hideAllBtn = false, showAll = false }) => {
    const displayedProjects = showAll ? projects : projects.filter(project => project.showInHome);

    return (
        <Section id="projects" className="bg-white">
            <Container>
                <div className="mb-16">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold">
                        Selected <span className="text-color-primary italic">Works</span>
                    </h2>
                    <p className="opacity-80 mt-4 text-lg">A showcase of recent Webflow and design projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white border-2 border-black p-4 flex flex-col h-full transition-all duration-300 card-shadow transition-shadow"
                        >
                            <div className="aspect-[4/3] overflow-hidden border-b-2 border-black mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-grow flex flex-col">
                                <span className="text-color-primary font-bold uppercase tracking-wider text-sm block mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="opacity-80 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                {project.features && project.features.length > 0 && (
                                    <ul className="mt-auto space-y-2 mb-6">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm font-medium opacity-90">
                                                <span className="w-1.5 h-1.5 mt-1.5 bg-color-primary flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="mt-auto">
                                {project.link ? (
                                    <Button variant="secondary" href={project.link} className="w-full">
                                        View Project
                                    </Button>
                                ) : (
                                    <Button variant="secondary" className="w-full opacity-50 cursor-not-allowed">
                                        Coming Soon
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {!hideAllBtn && (
                    <div className="mt-20 text-center">
                        <Button variant="primary" href="/work" className="px-12">See All Projects</Button>
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default Projects;

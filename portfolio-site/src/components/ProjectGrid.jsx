import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

function ProjectGrid() {
    return (
        <section id="projects" style={{ padding: '4rem 0' }}>
            <div className="container">
                {/* Removed redundant "Projects" title above the grid */}

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projectsData.map((project) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="glass-card"
                            style={{
                                display: 'block',
                                padding: '2rem',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>
                            <span style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                View Analysis &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectGrid;

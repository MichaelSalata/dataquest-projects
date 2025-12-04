import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';

function ProjectView() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const [iframeHeight, setIframeHeight] = useState('80vh');

    if (!project) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Project not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 'bold' }}>
                        &larr; Back to Portfolio
                    </Link>
                    <span style={{ color: 'var(--text-secondary)' }}>{project.title}</span>
                </div>
            </nav>

            <main style={{ flex: 1, background: '#fff' }}>
                <iframe
                    src={project.htmlFile}
                    title={project.title}
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 60px)',
                        border: 'none',
                        display: 'block'
                    }}
                />
            </main>
        </div>
    );
}

export default ProjectView;

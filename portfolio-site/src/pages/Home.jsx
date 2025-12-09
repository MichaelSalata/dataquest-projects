import { useState } from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import Certificates from '../components/Certificates';

function Home() {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header style={{ marginBottom: '3rem', textAlign: 'left' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Michael Salata
                </h1>
            </header>
            <Hero />

            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button
                    onClick={() => setActiveTab('projects')}
                    style={{
                        padding: '0.75rem 2rem',
                        borderRadius: '2rem',
                        border: 'none',
                        background: activeTab === 'projects' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.1)',
                        color: activeTab === 'projects' ? '#fff' : 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => setActiveTab('certificates')}
                    style={{
                        padding: '0.75rem 2rem',
                        borderRadius: '2rem',
                        border: 'none',
                        background: activeTab === 'certificates' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.1)',
                        color: activeTab === 'certificates' ? '#fff' : 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Certificates
                </button>
            </div>

            {activeTab === 'projects' ? <ProjectGrid /> : <Certificates />}
        </div>
    );
}

export default Home;

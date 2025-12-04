import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header style={{ marginBottom: '3rem', textAlign: 'left' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Michael Salata
                </h1>
            </header>
            <Hero />
            <ProjectGrid />
        </div>
    );
}

export default Home;

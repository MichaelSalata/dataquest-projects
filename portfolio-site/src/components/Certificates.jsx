import certificatesData from '../data/certificates.json';

function Certificates() {
    // Use basename for GitHub Pages, but allow for local development
    const basename = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;

    return (
        <section id="certificates" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {certificatesData.map((cert) => (
                        <a
                            href={`${basename}/certificates/${cert.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={cert.id}
                            className="glass-card"
                            style={{
                                display: 'block',
                                padding: '2rem',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {cert.title}
                            </h3>
                            <span style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                View Certificate &rarr;
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;

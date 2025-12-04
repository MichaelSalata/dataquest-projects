function Hero() {
    return (
        <section className="hero" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
                    Data Analysis <span className="gradient-text">Portfolio</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    A collection of data science and analysis projects completed during my Dataquest journey.
                    Exploring insights through Python, SQL, and Machine Learning.
                </p>
                <a href="#projects" className="btn btn-primary">
                    View Projects
                </a>
            </div>
        </section>
    );
}

export default Hero;

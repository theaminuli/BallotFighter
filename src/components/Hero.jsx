

function Hero() {
	return (
		<section className="hero">
			<div className="hero-content container">
				<div className="hero-text">
					<div className="hero-badge">🗳️ Election 2026</div>
					<h1 className="hero-title">
						Fighting on the <span className="highlight">Ballot</span>,
						<br />
						Building a <span className="highlight">Just State</span>
					</h1>
					<p className="hero-description">
						Returning the power of the people to the people. Join the Ballot Fighter Alliance —
						where transparency, accountability, and ethical politics become reality.
					</p>
					<div className="hero-actions">
						<button className="btn btn-primary">Join the Movement ✊</button>
						<button className="btn btn-primary">Read Manifesto 📋</button>
					</div>
					<div className="hero-statsx">
						<div className="stat-item">
							<strong>50,000+</strong>
							<span>Volunteers</span>
						</div>
						<div className="stat-item">
							<strong>৳25 Lakh</strong>
							<span>Raised</span>
						</div>
						<div className="stat-item">
							<strong>64</strong>
							<span>Districts</span>
						</div>
					</div>
				</div>
				<div className="hero-visual">
					<div className="visual-card">
						<div className="visual-icon">⚖️</div>
						<h3>Transparent Leadership</h3>
						<p>Full candidate biographies, qualifications, and performance records</p>
					</div>
					<div className="visual-card">
						<div className="visual-icon">🎯</div>
						<h3>Clear Vision</h3>
						<p>5-year roadmap for every sector with measurable goals</p>
					</div>
					<div className="visual-card">
						<div className="visual-icon">💪</div>
						<h3>People's Power</h3>
						<p>Crowdfunded campaigns, volunteer-driven movement</p>
					</div>
				</div>
			</div>
			<div className="hero-wave">
				<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
					<path fill="#ffffff" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
				</svg>
			</div>
		</section>
	);
}

export default Hero;



function Footer({ setCurrentSection }) {
	const quickLinks = [
		{ name: 'Leadership', section: 'leadership' },
		{ name: 'Manifesto', section: 'manifesto' },
		{ name: 'Join Us', section: 'volunteers' },
		{ name: 'Donate', section: 'crowdfunding' }
	];

	const handleLinkClick = (section) => {
		setCurrentSection(section);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<div className="footer-brand">
							<span className="footer-icon">⚖️</span>
							<div>
								<h3>BallotFighter</h3>
								<p>Power to the People</p>
							</div>
						</div>
						<p className="footer-description">
							Fighting on the ballot, building a just state — returning the power of the people
							to the people through transparent, accountable, and ethical politics.
						</p>
						<div className="social-links">
							<a href="#" className="social-link">📘 Facebook</a>
							<a href="#" className="social-link">🐦 Twitter</a>
							<a href="#" className="social-link">📷 Instagram</a>
							<a href="#" className="social-link">📺 YouTube</a>
						</div>
					</div>

					<div className="footer-section">
						<h4>Quick Links</h4>
						<ul className="footer-links">
							{quickLinks.map(link => (
								<li key={link.section}>
									<button onClick={() => handleLinkClick(link.section)}>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-section">
						<h4>Resources</h4>
						<ul className="footer-links">
							<li><a href="#">Download Manifesto</a></li>
							<li><a href="#">Campaign Materials</a></li>
							<li><a href="#">Training Resources</a></li>
							<li><a href="#">Financial Reports</a></li>
						</ul>
					</div>

					<div className="footer-section">
						<h4>Contact Us</h4>
						<div className="contact-info">
							<p>📧 info@ballotfighter.com</p>
							<p>📞 +880-XXX-XXXXXX</p>
							<p>📍 Dhaka, Bangladesh</p>
						</div>
						<button className="btn btn-primary newsletter-btn">
							Subscribe to Newsletter
						</button>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="footer-stats">
						<span>👥 50,000+ Volunteers</span>
						<span>💰 ৳25 Lakh Raised</span>
						<span>📍 64 Districts</span>
					</div>
					<div className="footer-legal">
						<p>© 2026 Ballot Fighter Alliance. All rights reserved.</p>
						<div className="legal-links">
							<a href="#">Privacy Policy</a>
							<span>•</span>
							<a href="#">Terms of Service</a>
							<span>•</span>
							<a href="#">Transparency Report</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

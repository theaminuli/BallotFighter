import { useState } from 'react';

function Navigation({ currentSection, setCurrentSection }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: 'leadership', label: 'Leadership', icon: '👥' },
		{ id: 'manifesto', label: 'Manifesto', icon: '📋' },
		{ id: 'competitors', label: 'Competitors', icon: '🎯' },
		{ id: 'store', label: 'Store', icon: '🛍️' },
		{ id: 'content-generator', label: 'Content', icon: '🎨' },
		{ id: 'crowdfunding', label: 'Donate', icon: '💰' },
		{ id: 'news', label: 'News', icon: '📰' },
		{ id: 'volunteers', label: 'Join Us', icon: '✊' },
		{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
	];

	const handleNavClick = (sectionId) => {
		setCurrentSection(sectionId);
		setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<nav className="navigation">
			<div className="nav-container">
				<div className="nav-brand" onClick={() => handleNavClick('home')}>
					<span className="brand-icon">/</span>
					<span className="brand-text">
						<strong>BallotFighter</strong>
						<span className="brand-tagline">Power to the People</span>
					</span>
				</div>

				<button
					className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
					{menuItems.map((item) => (
						<li key={item.id}>
							<button
								className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
								onClick={() => handleNavClick(item.id)}
							>
								<span className="nav-icon">{item.icon}</span>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;

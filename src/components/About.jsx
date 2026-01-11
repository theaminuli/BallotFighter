

function About() {
	const principles = [
		{
			icon: '🎯',
			title: 'Our Mission',
			description: 'Establishing transparent and accountable politics based on principles, performance and merit — not individuals.'
		},
		{
			icon: '🗳️',
			title: 'Democracy First',
			description: 'We fight on the ballot — the people own the people\'s votes. Strengthening vote security and democratic systems.'
		},
		{
			icon: '💻',
			title: 'Digital Innovation',
			description: 'AI-powered election management hub. Data-driven strategies, digital campaigning, and cyber security in one place.'
		}
	];

	return (
		<section className="about section">
			<div className="container">
				<div className="section-title">
					<h2>What is Ballot Fighter Alliance?</h2>
					<p>A revolutionary movement for transparent, ethical, and people-powered politics</p>
				</div>

				<div className="about-content">
					<div className="about-main">
						<h3>Our Vision: A Just State for All</h3>
						<p>
							BallotFighter.com is the central digital headquarters of the Election Alliance, where all
							information related to elections, leadership and manifestos will be available to leaders,
							activists, supporters and the public — transparently, easily, and technology-based.
						</p>
						<p>
							We believe in electing leadership based on <strong>principles</strong>, <strong>performance</strong>,
							and <strong>merit</strong>. Every candidate's biography, qualifications, and track record will be
							publicly available. No hidden agendas. No corruption. Just honest, capable leaders serving the people.
						</p>
					</div>

					<div className="principles-grid">
						{principles.map((principle, index) => (
							<div key={index} className="principle-card">
								<div className="principle-icon">{principle.icon}</div>
								<h4>{principle.title}</h4>
								<p>{principle.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="alliance-info">
					<h3>The Alliance Structure</h3>
					<p>
						Our alliance brings together multiple parties and independent leaders committed to ethical governance.
						We've pre-announced our cabinet structure so you know exactly who will serve in which position and why
						they're qualified. Complete transparency from day one.
					</p>
					<div className="roadmap-preview">
						<h4>📅 5-Year Roadmap Highlights</h4>
						<ul>
							<li>✅ Year 1: Anti-corruption reforms & transparent governance systems</li>
							<li>✅ Year 2-3: Economic revival & job creation (1 million new jobs)</li>
							<li>✅ Year 3-4: Education & healthcare modernization</li>
							<li>✅ Year 5: Digital Bangladesh 2.0 & sustainable development</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

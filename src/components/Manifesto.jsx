import { useState } from 'react';

function Manifesto() {
	const [selectedSector, setSelectedSector] = useState('overview');

	const sectors = [
		{ id: 'overview', name: 'Overview', icon: '📋' },
		{ id: 'agriculture', name: 'Agriculture', icon: '🌾' },
		{ id: 'education', name: 'Education', icon: '📚' },
		{ id: 'health', name: 'Health', icon: '🏥' },
		{ id: 'industry', name: 'Industry', icon: '🏭' },
		{ id: 'technology', name: 'Technology', icon: '💻' },
		{ id: 'tourism', name: 'Tourism', icon: '✈️' },
		{ id: 'corruption', name: 'Anti-Corruption', icon: '⚖️' },
		{ id: 'employment', name: 'Employment', icon: '💼' },
		{ id: 'climate', name: 'Climate', icon: '🌍' }
	];

	const manifestoData = {
		overview: {
			title: 'Our Vision for Bangladesh 2031',
			subtitle: 'A 5-Year Roadmap to Build a Just, Prosperous, and Digital Nation',
			content: [
				{
					heading: 'Core Principles',
					points: [
						'Transparency in all government operations',
						'Merit-based appointments and promotions',
						'Zero tolerance for corruption',
						'Data-driven decision making',
						'People-first policies'
					]
				},
				{
					heading: '5-Year Goals',
					points: [
						'GDP growth: 8% annually',
						'Unemployment: Below 3%',
						'Literacy rate: 95%',
						'Digital literacy: 75%',
						'Corruption perception index: Top 50 globally'
					]
				}
			]
		},
		agriculture: {
			title: 'Agricultural Revolution',
			subtitle: 'Making farming profitable, sustainable, and technology-driven',
			content: [
				{
					heading: 'Immediate Actions (Year 1)',
					points: [
						'Increase minimum support price by 30%',
						'Provide interest-free loans up to ৳5 lakh',
						'Establish 100 modern cold storage facilities',
						'Launch mobile app for direct farmer-buyer connection'
					]
				},
				{
					heading: 'Long-term Vision',
					points: [
						'Climate-resilient crop varieties for all districts',
						'Organic farming certification for export markets',
						'Drone technology for precision agriculture',
						'50% reduction in post-harvest losses'
					]
				}
			]
		},
		education: {
			title: 'Education Transformation',
			subtitle: 'World-class education accessible to every child',
			content: [
				{
					heading: 'School Level Reforms',
					points: [
						'Free quality education from primary to grade 12',
						'Digital classroom in every school by 2028',
						'Teacher salary increase by 50%',
						'Skills training integrated into curriculum'
					]
				},
				{
					heading: 'Higher Education',
					points: [
						'Merit-based scholarships for 100,000 students',
						'Partnership with top global universities',
						'Research funding increased to 2% of GDP',
						'Job-ready graduates through industry partnerships'
					]
				}
			]
		},
		health: {
			title: 'Healthcare for All',
			subtitle: 'Quality healthcare as a fundamental right',
			content: [
				{
					heading: 'Primary Healthcare',
					points: [
						'Community health center in every union',
						'Free basic healthcare for all citizens',
						'Mobile health units for remote areas',
						'24/7 ambulance service nationwide'
					]
				},
				{
					heading: 'Hospital Infrastructure',
					points: [
						'Modern district hospitals in all 64 districts',
						'Specialist doctors in rural areas (incentive program)',
						'Telemedicine platform connecting 10,000 villages',
						'Cancer treatment centers in 8 divisions'
					]
				}
			]
		},
		technology: {
			title: 'Digital Bangladesh 2.0',
			subtitle: 'Building a tech-powered, paperless nation',
			content: [
				{
					heading: 'Digital Infrastructure',
					points: [
						'High-speed internet in every village',
						'5G network in all cities by 2027',
						'Free Wi-Fi in public spaces',
						'Cybersecurity framework for all govt services'
					]
				},
				{
					heading: 'E-Governance',
					points: [
						'100% paperless government offices',
						'All services available online',
						'Blockchain-based land records',
						'AI-powered citizen service centers'
					]
				}
			]
		},
		corruption: {
			title: 'Zero Corruption Policy',
			subtitle: 'Making Bangladesh corruption-free through transparency and accountability',
			content: [
				{
					heading: 'Immediate Measures',
					points: [
						'All govt officials to declare assets publicly',
						'Fast-track courts for corruption cases',
						'Whistleblower protection act',
						'Real-time spending dashboard for all projects'
					]
				},
				{
					heading: 'Systemic Changes',
					points: [
						'Digital payment for all govt transactions',
						'Independent anti-corruption commission with prosecution power',
						'Mandatory rotation of officials in sensitive positions',
						'Citizen feedback system for all services'
					]
				}
			]
		},
		employment: {
			title: 'Job Creation & Startups',
			subtitle: '1 million jobs in 5 years',
			content: [
				{
					heading: 'Job Creation Strategy',
					points: [
						'Government jobs: 200,000 positions (merit-based)',
						'Private sector incentives for job creation',
						'Startup fund: ৳1000 crore for young entrepreneurs',
						'Skills training for 500,000 youth annually'
					]
				},
				{
					heading: 'Startup Ecosystem',
					points: [
						'Interest-free loans up to ৳50 lakh for startups',
						'Tax holiday for first 3 years',
						'Startup incubators in every division',
						'Fast-track licensing and permits'
					]
				}
			]
		},
		climate: {
			title: 'Climate Protection Plan',
			subtitle: 'Sustainable development for future generations',
			content: [
				{
					heading: 'Renewable Energy',
					points: [
						'50% energy from renewable sources by 2031',
						'Solar panels for 1 million households (subsidized)',
						'Wind energy farms in coastal areas',
						'Green building codes for all new construction'
					]
				},
				{
					heading: 'Environmental Protection',
					points: [
						'Reforestation: 100 million trees in 5 years',
						'River cleaning and restoration project',
						'Plastic ban enforcement with alternatives',
						'Climate-resilient infrastructure for coastal areas'
					]
				}
			]
		}
	};

	const currentData = manifestoData[selectedSector] || manifestoData.overview;

	return (
		<section className="manifesto section">
			<div className="container">
				<div className="section-title">
					<h2>Election Manifesto 2026</h2>
					<p>Our comprehensive plan to build a just, prosperous Bangladesh</p>
				</div>

				<div className="manifesto-layout">
					<div className="manifesto-sidebar">
						<h3>Sectors</h3>
						{sectors.map(sector => (
							<button
								key={sector.id}
								className={`sector-btn ${selectedSector === sector.id ? 'active' : ''}`}
								onClick={() => setSelectedSector(sector.id)}
							>
								<span className="sector-icon">{sector.icon}</span>
								<span>{sector.name}</span>
							</button>
						))}
					</div>

					<div className="manifesto-content">
						<div className="manifesto-header">
							<h2>{currentData.title}</h2>
							<p className="manifesto-subtitle">{currentData.subtitle}</p>
						</div>

						<div className="manifesto-body">
							{currentData.content.map((section, index) => (
								<div key={index} className="manifesto-section">
									<h3>{section.heading}</h3>
									<ul className="manifesto-list">
										{section.points.map((point, idx) => (
											<li key={idx}>
												<span className="check-icon">✓</span>
												{point}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						<div className="manifesto-actions">
							<button className="btn btn-primary">Download Full Manifesto PDF</button>
							<button className="btn btn-outline">Share This Plan</button>
						</div>
					</div>
				</div>

				<div className="commitment-box">
					<h3>📜 Our Commitment</h3>
					<p>
						This manifesto is not just a document — it's a binding contract with the people of Bangladesh.
						We will publish quarterly progress reports and hold ourselves accountable for every promise.
						If we fail to deliver, the people have the right to demand answers.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Manifesto;

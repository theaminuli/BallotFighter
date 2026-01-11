import { useState } from 'react';

function Leadership() {
	const [selectedMinistry, setSelectedMinistry] = useState('all');

	const leaders = [
		{
			id: 1,
			name: 'Dr. Rashida Hasan',
			position: 'Prime Minister Candidate',
			ministry: 'governance',
			image: '👩‍💼',
			education: 'PhD in Public Administration, Harvard University',
			experience: '25 years in public service & NGO leadership',
			achievements: [
				'Led 3 major anti-corruption campaigns',
				'Established transparency framework adopted by 12 districts',
				'Published 5 books on ethical governance'
			],
			corruptionFree: true,
			track: 'No pending cases, all assets publicly declared'
		},
		{
			id: 2,
			name: 'Eng. Kamal Ahmed',
			position: 'Minister of Infrastructure',
			ministry: 'infrastructure',
			image: '👨‍🔧',
			education: 'MSc Civil Engineering, BUET',
			experience: '20 years in infrastructure development',
			achievements: [
				'Built 50+ bridges in rural areas',
				'Reduced construction costs by 30% through innovation',
				'Zero corruption record in ৳500 crore projects'
			],
			corruptionFree: true,
			track: 'Transparent project management, audit-cleared'
		},
		{
			id: 3,
			name: 'Dr. Fatema Rahman',
			position: 'Minister of Education',
			ministry: 'education',
			image: '👩‍🏫',
			education: 'PhD Education Policy, Cambridge University',
			experience: '18 years in education reform',
			achievements: [
				'Improved literacy rate by 15% in pilot districts',
				'Launched digital classroom initiative (1000+ schools)',
				'Trained 5000+ teachers in modern pedagogy'
			],
			corruptionFree: true,
			track: 'Clean record, independently audited programs'
		},
		{
			id: 4,
			name: 'Dr. Shahidul Islam',
			position: 'Minister of Health',
			ministry: 'health',
			image: '👨‍⚕️',
			education: 'MBBS, MPH from Johns Hopkins',
			experience: '22 years in public health',
			achievements: [
				'Reduced maternal mortality by 40% in assigned zones',
				'Set up 100 community health centers',
				'Led COVID-19 response team (zero fund misappropriation)'
			],
			corruptionFree: true,
			track: 'WHO certified, transparent fund management'
		},
		{
			id: 5,
			name: 'Tanvir Hassan',
			position: 'Minister of Technology',
			ministry: 'technology',
			image: '👨‍💻',
			education: 'Computer Science, MIT',
			experience: '15 years in tech entrepreneurship',
			achievements: [
				'Founded 3 successful tech startups',
				'Created 2000+ tech jobs',
				'Built national cybersecurity framework'
			],
			corruptionFree: true,
			track: 'No conflicts of interest, divested from businesses'
		},
		{
			id: 6,
			name: 'Nusrat Jahan',
			position: 'Minister of Agriculture',
			ministry: 'agriculture',
			image: '👩‍🌾',
			education: 'PhD Agricultural Economics',
			experience: '16 years in agricultural development',
			achievements: [
				'Increased farmer income by 45% in pilot areas',
				'Introduced climate-resilient farming techniques',
				'Established 50 farmer cooperatives'
			],
			corruptionFree: true,
			track: 'Transparent subsidy distribution, zero complaints'
		}
	];

	const ministries = [
		{ id: 'all', label: 'All Leaders', icon: '👥' },
		{ id: 'governance', label: 'Governance', icon: '⚖️' },
		{ id: 'education', label: 'Education', icon: '📚' },
		{ id: 'health', label: 'Health', icon: '🏥' },
		{ id: 'infrastructure', label: 'Infrastructure', icon: '🏗️' },
		{ id: 'technology', label: 'Technology', icon: '💻' },
		{ id: 'agriculture', label: 'Agriculture', icon: '🌾' }
	];

	const filteredLeaders = selectedMinistry === 'all'
		? leaders
		: leaders.filter(leader => leader.ministry === selectedMinistry);

	return (
		<section className="leadership section">
			<div className="container">
				<div className="section-title">
					<h2>Our Leadership Team</h2>
					<p>Meet the qualified, corruption-free leaders who will serve the nation</p>
				</div>

				<div className="ministry-filter">
					{ministries.map(ministry => (
						<button
							key={ministry.id}
							className={`filter-btn ${selectedMinistry === ministry.id ? 'active' : ''}`}
							onClick={() => setSelectedMinistry(ministry.id)}
						>
							<span className="filter-icon">{ministry.icon}</span>
							{ministry.label}
						</button>
					))}
				</div>

				<div className="leaders-grid">
					{filteredLeaders.map(leader => (
						<div key={leader.id} className="leader-card">
							<div className="leader-header">
								<div className="leader-avatar">{leader.image}</div>
								<div className="leader-info">
									<h3>{leader.name}</h3>
									<p className="leader-position">{leader.position}</p>
								</div>
								{leader.corruptionFree && (
									<div className="verified-badge" title="Corruption-Free Verified">
										✅
									</div>
								)}
							</div>

							<div className="leader-details">
								<div className="detail-item">
									<strong>🎓 Education:</strong>
									<p>{leader.education}</p>
								</div>
								<div className="detail-item">
									<strong>💼 Experience:</strong>
									<p>{leader.experience}</p>
								</div>
								<div className="detail-item">
									<strong>🏆 Key Achievements:</strong>
									<ul>
										{leader.achievements.map((achievement, index) => (
											<li key={index}>{achievement}</li>
										))}
									</ul>
								</div>
								<div className="detail-item track-record">
									<strong>📊 Track Record:</strong>
									<p>{leader.track}</p>
								</div>
							</div>

							<div className="leader-actions">
								<button className="btn-detail">View Full Biography</button>
								<button className="btn-report">Performance Report</button>
							</div>
						</div>
					))}
				</div>

				<div className="transparency-note">
					<h3>💡 Complete Transparency Promise</h3>
					<p>
						Every leader's biography, assets, educational certificates, and work history are
						publicly available. We believe the people have the right to know who they're voting for.
						No hidden agendas. No corruption. Just qualified, dedicated public servants.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Leadership;

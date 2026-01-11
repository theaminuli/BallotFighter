import { useState } from 'react';

function Volunteers() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		district: '',
		squad: '',
		skills: []
	});

	const squads = [
		{ id: 'youth', name: 'Youth Squad', icon: '💪', description: 'Age 18-35, grassroots campaigning' },
		{ id: 'cyber', name: 'Cyber Squad', icon: '💻', description: 'Social media & digital campaigns' },
		{ id: 'defense', name: 'Vote Defense Squad', icon: '🛡️', description: 'Polling booth monitoring' },
		{ id: 'booth', name: 'Booth Level Team', icon: '🗳️', description: 'Local organizing & outreach' },
		{ id: 'women', name: 'Women Wing', icon: '👩', description: 'Women empowerment & mobilization' },
		{ id: 'student', name: 'Student Wing', icon: '🎓', description: 'Campus campaigns & youth outreach' }
	];

	const skills = [
		'Social Media',
		'Content Creation',
		'Graphic Design',
		'Video Editing',
		'Public Speaking',
		'Event Management',
		'Data Entry',
		'Translation',
		'Legal Support',
		'Medical Support'
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Thank you for joining! We will contact you soon.');
	};

	const toggleSkill = (skill) => {
		setFormData(prev => ({
			...prev,
			skills: prev.skills.includes(skill)
				? prev.skills.filter(s => s !== skill)
				: [...prev.skills, skill]
		}));
	};

	return (
		<section className="volunteers section">
			<div className="container">
				<div className="section-title">
					<h2>Join the Movement</h2>
					<p>Be part of an organized, trained election force — the Ballot Fighter Squad</p>
				</div>

				<div className="volunteer-hero">
					<div className="hero-content-text">
						<h3>Why Volunteer?</h3>
						<ul className="benefits-list">
							<li>✊ Be part of historic democratic change</li>
							<li>🎓 Gain valuable organizing & leadership skills</li>
							<li>🤝 Connect with like-minded changemakers</li>
							<li>📜 Certificate of participation</li>
							<li>🎯 Direct impact on election outcomes</li>
						</ul>
					</div>
					<div className="hero-stats-volunteers">
						<div className="stat-card">
							<div className="stat-number">50,000+</div>
							<div className="stat-label">Active Volunteers</div>
						</div>
						<div className="stat-card">
							<div className="stat-number">64</div>
							<div className="stat-label">District Teams</div>
						</div>
						<div className="stat-card">
							<div className="stat-number">500+</div>
							<div className="stat-label">Training Sessions</div>
						</div>
					</div>
				</div>

				<div className="squads-section">
					<h3>Choose Your Squad</h3>
					<div className="squads-grid">
						{squads.map(squad => (
							<div
								key={squad.id}
								className={`squad-card ${formData.squad === squad.id ? 'selected' : ''}`}
								onClick={() => setFormData({ ...formData, squad: squad.id })}
							>
								<div className="squad-icon">{squad.icon}</div>
								<h4>{squad.name}</h4>
								<p>{squad.description}</p>
								{formData.squad === squad.id && (
									<div className="selected-badge">✓ Selected</div>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="registration-form-section">
					<h3>Registration Form</h3>
					<form className="volunteer-form" onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group">
								<label>Full Name *</label>
								<input
									type="text"
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									placeholder="Enter your name"
								/>
							</div>
							<div className="form-group">
								<label>Email Address *</label>
								<input
									type="email"
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									placeholder="your@email.com"
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group">
								<label>Phone Number *</label>
								<input
									type="tel"
									required
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									placeholder="+880..."
								/>
							</div>
							<div className="form-group">
								<label>District *</label>
								<select
									required
									value={formData.district}
									onChange={(e) => setFormData({ ...formData, district: e.target.value })}
								>
									<option value="">Select District</option>
									<option value="dhaka">Dhaka</option>
									<option value="chittagong">Chittagong</option>
									<option value="rajshahi">Rajshahi</option>
									<option value="khulna">Khulna</option>
									<option value="sylhet">Sylhet</option>
									<option value="barisal">Barisal</option>
									<option value="rangpur">Rangpur</option>
									<option value="mymensingh">Mymensingh</option>
								</select>
							</div>
						</div>

						<div className="form-group">
							<label>Select Your Skills (optional)</label>
							<div className="skills-grid">
								{skills.map(skill => (
									<button
										key={skill}
										type="button"
										className={`skill-tag ${formData.skills.includes(skill) ? 'selected' : ''}`}
										onClick={() => toggleSkill(skill)}
									>
										{skill}
										{formData.skills.includes(skill) && ' ✓'}
									</button>
								))}
							</div>
						</div>

						<div className="form-group">
							<label>Why do you want to volunteer? (optional)</label>
							<textarea
								rows="4"
								placeholder="Tell us your motivation..."
							/>
						</div>

						<div className="form-group checkbox-group">
							<label>
								<input type="checkbox" required />
								I commit to ethical campaigning and transparent politics
							</label>
						</div>

						<button type="submit" className="btn btn-primary submit-btn">
							✊ Join the Squad
						</button>
					</form>
				</div>

				<div className="training-info">
					<h3>📚 Training & Support</h3>
					<div className="training-grid">
						<div className="training-card">
							<span className="training-icon">🎓</span>
							<h4>Free Training</h4>
							<p>Comprehensive training on campaign strategies, voter outreach, and election laws</p>
						</div>
						<div className="training-card">
							<span className="training-icon">📱</span>
							<h4>Mobile App</h4>
							<p>Dedicated volunteer app for coordination, reporting, and real-time updates</p>
						</div>
						<div className="training-card">
							<span className="training-icon">🎯</span>
							<h4>Clear Tasks</h4>
							<p>Specific, measurable tasks assigned based on your skills and availability</p>
						</div>
						<div className="training-card">
							<span className="training-icon">🏆</span>
							<h4>Recognition</h4>
							<p>Certificates, badges, and public recognition for outstanding volunteers</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Volunteers;

import { useState } from 'react';

function Crowdfunding() {
	const [amount, setAmount] = useState('');
	const [customAmount, setCustomAmount] = useState('');
	const [donorInfo, setDonorInfo] = useState({
		name: '',
		email: '',
		phone: '',
		paymentMethod: 'bKash'
	});

	const presetAmounts = [100, 500, 1000, 5000, 10000];

	const campaigns = [
		{
			id: 1,
			name: 'General Campaign Fund',
			raised: 2500000,
			goal: 5000000,
			donors: 1250,
			description: 'Support our grassroots movement across Bangladesh'
		},
		{
			id: 2,
			name: 'Digital Campaign',
			raised: 800000,
			goal: 1500000,
			donors: 420,
			description: 'Fund our online outreach and social media campaigns'
		},
		{
			id: 3,
			name: 'Rural Outreach',
			raised: 600000,
			goal: 2000000,
			donors: 380,
			description: 'Bring our message to villages and rural communities'
		},
		{
			id: 4,
			name: 'Training & Education',
			raised: 400000,
			goal: 1000000,
			donors: 290,
			description: 'Train volunteers and educate voters about our vision'
		}
	];

	const recentDonors = [
		{ name: 'Karim Ahmed', amount: 5000, time: '2 minutes ago', location: 'Dhaka' },
		{ name: 'Fatima Hassan', amount: 1000, time: '15 minutes ago', location: 'Chittagong' },
		{ name: 'Rahim Khan', amount: 2000, time: '1 hour ago', location: 'Sylhet' },
		{ name: 'Nusrat Jahan', amount: 10000, time: '2 hours ago', location: 'Rajshahi' },
		{ name: 'Tanvir Islam', amount: 500, time: '3 hours ago', location: 'Khulna' }
	];

	const getPercentage = (raised, goal) => {
		return Math.round((raised / goal) * 100);
	};

	const formatAmount = (num) => {
		if (num >= 10000000) return `৳${(num / 10000000).toFixed(1)} Cr`;
		if (num >= 100000) return `৳${(num / 100000).toFixed(1)} L`;
		return `৳${num.toLocaleString()}`;
	};

	return (
		<section className="crowdfunding section">
			<div className="container">
				<div className="section-title">
					<h2>Support Our Campaign</h2>
					<p>100% transparent funding — every taka counts, every transaction public</p>
				</div>

				<div className="funding-hero">
					<div className="hero-stats">
						<div className="stat-box">
							<span className="stat-icon">💰</span>
							<div>
								<div className="stat-value">৳25 Lakh</div>
								<div className="stat-label">Total Raised</div>
							</div>
						</div>
						<div className="stat-box">
							<span className="stat-icon">👥</span>
							<div>
								<div className="stat-value">2,340</div>
								<div className="stat-label">Donors</div>
							</div>
						</div>
						<div className="stat-box">
							<span className="stat-icon">🎯</span>
							<div>
								<div className="stat-value">৳1 Crore</div>
								<div className="stat-label">Goal</div>
							</div>
						</div>
					</div>
				</div>

				<div className="donation-section">
					<div className="donation-form-container">
						<h3>Make a Donation</h3>
						<p className="form-subtitle">Choose an amount or enter your own</p>

						<div className="amount-buttons">
							{presetAmounts.map(preset => (
								<button
									key={preset}
									className={`amount-btn ${amount === preset ? 'active' : ''}`}
									onClick={() => { setAmount(preset); setCustomAmount(''); }}
								>
									৳{preset}
								</button>
							))}
						</div>

						<div className="custom-amount">
							<label>Or enter custom amount</label>
							<input
								type="number"
								placeholder="৳ Amount"
								value={customAmount}
								onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
							/>
						</div>

						<div className="donor-info">
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Enter your name"
									value={donorInfo.name}
									onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
								/>
							</div>
							<div className="form-group">
								<label>Email Address</label>
								<input
									type="email"
									placeholder="your@email.com"
									value={donorInfo.email}
									onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
								/>
							</div>
							<div className="form-group">
								<label>Phone Number</label>
								<input
									type="tel"
									placeholder="+880..."
									value={donorInfo.phone}
									onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
								/>
							</div>
							<div className="form-group">
								<label>Payment Method</label>
								<select
									value={donorInfo.paymentMethod}
									onChange={(e) => setDonorInfo({ ...donorInfo, paymentMethod: e.target.value })}
								>
									<option>bKash</option>
									<option>Nagad</option>
									<option>Rocket</option>
									<option>Bank Transfer</option>
									<option>Card Payment</option>
								</select>
							</div>
						</div>

						<button className="btn btn-primary donate-btn">
							💳 Donate Now
						</button>

						<div className="security-note">
							<span className="security-icon">🔒</span>
							<small>Secure payment • All transactions are publicly recorded • Tax receipt provided</small>
						</div>
					</div>

					<div className="campaign-list">
						<h3>Active Campaigns</h3>
						{campaigns.map(campaign => (
							<div key={campaign.id} className="campaign-card">
								<h4>{campaign.name}</h4>
								<p>{campaign.description}</p>
								<div className="campaign-progress">
									<div className="progress-bar">
										<div
											className="progress-fill"
											style={{ width: `${getPercentage(campaign.raised, campaign.goal)}%` }}
										/>
									</div>
									<div className="progress-stats">
										<span className="raised">{formatAmount(campaign.raised)} raised</span>
										<span className="goal">Goal: {formatAmount(campaign.goal)}</span>
									</div>
								</div>
								<div className="campaign-meta">
									<span>👥 {campaign.donors} donors</span>
									<span>{getPercentage(campaign.raised, campaign.goal)}% funded</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="recent-donations">
					<h3>Recent Donations</h3>
					<div className="donations-list">
						{recentDonors.map((donor, index) => (
							<div key={index} className="donor-item">
								<div className="donor-avatar">👤</div>
								<div className="donor-details">
									<div className="donor-name">{donor.name}</div>
									<div className="donor-meta">
										{donor.location} • {donor.time}
									</div>
								</div>
								<div className="donor-amount">৳{donor.amount.toLocaleString()}</div>
							</div>
						))}
					</div>
				</div>

				<div className="transparency-section">
					<h3>💎 Complete Financial Transparency</h3>
					<div className="transparency-grid">
						<div className="transparency-card">
							<h4>📊 Real-time Dashboard</h4>
							<p>Every donation and expense is tracked in real-time and publicly visible</p>
							<button className="btn btn-outline">View Live Dashboard</button>
						</div>
						<div className="transparency-card">
							<h4>📝 Monthly Reports</h4>
							<p>Detailed monthly financial reports with complete breakdown of spending</p>
							<button className="btn btn-outline">View Reports</button>
						</div>
						<div className="transparency-card">
							<h4>🔍 Independent Audit</h4>
							<p>Audited by certified public accountants — reports available publicly</p>
							<button className="btn btn-outline">View Audit Reports</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Crowdfunding;

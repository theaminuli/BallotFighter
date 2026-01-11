

function Dashboard() {
	const districtData = [
		{ name: 'Dhaka', volunteers: 8500, funding: 450000, events: 45, engagement: 92 },
		{ name: 'Chittagong', volunteers: 6200, funding: 320000, events: 38, engagement: 88 },
		{ name: 'Rajshahi', volunteers: 4100, funding: 210000, events: 28, engagement: 85 },
		{ name: 'Khulna', volunteers: 3800, funding: 195000, events: 25, engagement: 83 },
		{ name: 'Sylhet', volunteers: 3500, funding: 180000, events: 22, engagement: 80 },
		{ name: 'Barisal', volunteers: 2900, funding: 150000, events: 18, engagement: 78 }
	];

	const campaignMetrics = [
		{ metric: 'Voter Contacts', value: '2.5M', change: '+15%', icon: '📞' },
		{ metric: 'Social Reach', value: '8.3M', change: '+28%', icon: '📱' },
		{ metric: 'Rally Attendance', value: '450K', change: '+35%', icon: '🎪' },
		{ metric: 'Online Engagement', value: '12M', change: '+42%', icon: '💬' }
	];

	return (
		<section className="dashboard section">
			<div className="container">
				<div className="section-title">
					<h2>Campaign Dashboard</h2>
					<p>Real-time data-driven insights into campaign performance</p>
				</div>

				<div className="dashboard-header">
					<div className="header-card">
						<span className="header-icon">🗳️</span>
						<div>
							<div className="header-value">64 / 64</div>
							<div className="header-label">Districts Active</div>
						</div>
					</div>
					<div className="header-card">
						<span className="header-icon">👥</span>
						<div>
							<div className="header-value">50,246</div>
							<div className="header-label">Total Volunteers</div>
						</div>
					</div>
					<div className="header-card">
						<span className="header-icon">💰</span>
						<div>
							<div className="header-value">৳2.5 Cr</div>
							<div className="header-label">Campaign Fund</div>
						</div>
					</div>
					<div className="header-card">
						<span className="header-icon">📊</span>
						<div>
							<div className="header-value">85%</div>
							<div className="header-label">Voter Awareness</div>
						</div>
					</div>
				</div>

				<div className="metrics-section">
					<h3>Campaign Performance</h3>
					<div className="metrics-grid">
						{campaignMetrics.map((item, index) => (
							<div key={index} className="metric-card">
								<div className="metric-icon">{item.icon}</div>
								<div className="metric-content">
									<div className="metric-label">{item.metric}</div>
									<div className="metric-value">{item.value}</div>
									<div className="metric-change positive">{item.change} this month</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="district-analysis">
					<h3>District-wise Performance</h3>
					<div className="district-table">
						<div className="table-header">
							<div>District</div>
							<div>Volunteers</div>
							<div>Funding</div>
							<div>Events</div>
							<div>Engagement</div>
						</div>
						{districtData.map((district, index) => (
							<div key={index} className="table-row">
								<div className="district-name">
									<span className="district-icon">📍</span>
									{district.name}
								</div>
								<div>{district.volunteers.toLocaleString()}</div>
								<div>৳{(district.funding / 1000).toFixed(0)}K</div>
								<div>{district.events}</div>
								<div>
									<div className="engagement-bar">
										<div
											className="engagement-fill"
											style={{ width: `${district.engagement}%` }}
										/>
									</div>
									<span>{district.engagement}%</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="activity-feed">
					<h3>Recent Activity</h3>
					<div className="activity-list">
						<div className="activity-item">
							<span className="activity-icon success">✓</span>
							<div className="activity-content">
								<strong>New volunteer center opened</strong>
								<p>Sylhet region now has 5 active centers • 2 hours ago</p>
							</div>
						</div>
						<div className="activity-item">
							<span className="activity-icon info">💰</span>
							<div className="activity-content">
								<strong>Funding milestone reached</strong>
								<p>Crossed ৳25 Lakh with 2,340 donors • 5 hours ago</p>
							</div>
						</div>
						<div className="activity-item">
							<span className="activity-icon warning">📢</span>
							<div className="activity-content">
								<strong>Rally scheduled</strong>
								<p>Chittagong mega rally on Friday 4 PM • 1 day ago</p>
							</div>
						</div>
						<div className="activity-item">
							<span className="activity-icon success">🎯</span>
							<div className="activity-content">
								<strong>Training completed</strong>
								<p>500 volunteers trained in digital campaigning • 2 days ago</p>
							</div>
						</div>
					</div>
				</div>

				<div className="data-note">
					<h3>📈 Data-Driven Strategy</h3>
					<p>
						This dashboard provides real-time insights to help us make informed decisions.
						All data is collected ethically, analyzed scientifically, and used to maximize
						campaign effectiveness. We track what works, adjust what doesn't, and allocate
						resources where they're needed most.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;

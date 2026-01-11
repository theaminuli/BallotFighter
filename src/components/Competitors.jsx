import { useState } from 'react';

const Competitors = () => {
	const [selectedDivision, setSelectedDivision] = useState('all');
	const [selectedDistrict, setSelectedDistrict] = useState('all');
	const [selectedSeat, setSelectedSeat] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	const divisions = [
		'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna',
		'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'
	];

	// Sample districts data (all 64 districts)
	const districts = {
		'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
		'Chattogram': ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cumilla', "Cox's Bazar", 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
		'Rajshahi': ['Bogura', 'Joypurhat', 'Naogaon', 'Natore', 'Chapainawabganj', 'Pabna', 'Rajshahi', 'Sirajganj'],
		'Khulna': ['Bagerhat', 'Chuadanga', 'Jashore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'],
		'Barishal': ['Barguna', 'Barishal', 'Bhola', 'Jhalokathi', 'Patuakhali', 'Pirojpur'],
		'Sylhet': ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
		'Rangpur': ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
		'Mymensingh': ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur']
	};

	// Sample competitor data
	const competitors = [
		{
			id: 1,
			name: 'Abdul Karim Rahman',
			party: 'Ballot Fighter Alliance',
			division: 'Dhaka',
			district: 'Dhaka',
			seat: 'Dhaka-10',
			age: 48,
			education: 'Masters in Economics',
			experience: '15 years in public service',
			strongPoints: ['Economic policy expert', 'Strong grassroots network', 'Clean record'],
			weakPoints: ['New to electoral politics'],
			supportBase: 'Urban middle class, youth',
			fundingLevel: 'Medium',
			winProbability: 72
		},
		{
			id: 2,
			name: 'Fatema Begum',
			party: 'Rival Party A',
			division: 'Dhaka',
			district: 'Dhaka',
			seat: 'Dhaka-10',
			age: 55,
			education: 'Law Degree',
			experience: 'Former MP (2 terms)',
			strongPoints: ['Experienced politician', 'Strong party backing', 'Good local connections'],
			weakPoints: ['Corruption allegations', 'Declining popularity'],
			supportBase: 'Traditional party supporters',
			fundingLevel: 'High',
			winProbability: 45
		},
		{
			id: 3,
			name: 'Mohammad Hossain',
			party: 'Independent',
			division: 'Dhaka',
			district: 'Dhaka',
			seat: 'Dhaka-10',
			age: 42,
			education: 'MBA',
			experience: 'Business leader, 5 years social work',
			strongPoints: ['Self-funded', 'Fresh face', 'Business acumen'],
			weakPoints: ['Lack of political experience', 'Limited reach'],
			supportBase: 'Business community',
			fundingLevel: 'High',
			winProbability: 28
		},
		{
			id: 4,
			name: 'Ayesha Khan',
			party: 'Ballot Fighter Alliance',
			division: 'Chattogram',
			district: 'Chattogram',
			seat: 'Chattogram-5',
			age: 39,
			education: 'PhD in Public Administration',
			experience: '10 years NGO leadership',
			strongPoints: ['Women empowerment advocate', 'Strong education background', 'Youth appeal'],
			weakPoints: ['First time candidate'],
			supportBase: 'Women, educated youth',
			fundingLevel: 'Medium',
			winProbability: 65
		},
		{
			id: 5,
			name: 'Rahim Uddin',
			party: 'Ballot Fighter Alliance',
			division: 'Rajshahi',
			district: 'Rajshahi',
			seat: 'Rajshahi-3',
			age: 51,
			education: 'Agricultural Science',
			experience: 'Farmer leader, 20 years grassroots work',
			strongPoints: ['Deep rural connections', 'Agricultural expertise', 'Trusted leader'],
			weakPoints: ['Limited urban appeal'],
			supportBase: 'Farmers, rural communities',
			fundingLevel: 'Low',
			winProbability: 68
		}
	];

	const getFilteredDistricts = () => {
		if (selectedDivision === 'all') {
			return Object.values(districts).flat();
		}
		return districts[selectedDivision] || [];
	};

	const getFilteredCompetitors = () => {
		return competitors.filter(competitor => {
			const matchesDivision = selectedDivision === 'all' || competitor.division === selectedDivision;
			const matchesDistrict = selectedDistrict === 'all' || competitor.district === selectedDistrict;
			const matchesSeat = selectedSeat === 'all' || competitor.seat === selectedSeat;
			const matchesSearch = searchQuery === '' ||
				competitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				competitor.party.toLowerCase().includes(searchQuery.toLowerCase()) ||
				competitor.seat.toLowerCase().includes(searchQuery.toLowerCase());

			return matchesDivision && matchesDistrict && matchesSeat && matchesSearch;
		});
	};

	const getUniqueSeats = () => {
		const filtered = competitors.filter(c =>
			(selectedDivision === 'all' || c.division === selectedDivision) &&
			(selectedDistrict === 'all' || c.district === selectedDistrict)
		);
		return [...new Set(filtered.map(c => c.seat))];
	};

	const filteredCompetitors = getFilteredCompetitors();

	const getWinProbabilityColor = (probability) => {
		if (probability >= 60) return 'var(--success)';
		if (probability >= 40) return 'var(--accent)';
		return 'var(--danger)';
	};

	return (
		<section className="competitors">
			<div className="container">
				<div className="section-header">
					<h1>🎯 Competitor Analysis</h1>
					<p className="section-subtitle">
						Complete overview of all candidates across 64 districts of Bangladesh
					</p>
				</div>

				{/* Why Competitor Analysis Section */}
				<div className="analysis-benefits">
					<h3>📊 Why Competitor Analysis Matters</h3>
					<div className="benefits-grid">
						<div className="benefit-card">
							<span className="benefit-icon">🔍</span>
							<h4>Informed Voting</h4>
							<p>Compare candidates side-by-side to make educated choices based on qualifications and track records</p>
						</div>
						<div className="benefit-card">
							<span className="benefit-icon">⚖️</span>
							<h4>Transparency</h4>
							<p>Access complete information about all candidates including strengths, weaknesses, and funding sources</p>
						</div>
						<div className="benefit-card">
							<span className="benefit-icon">📈</span>
							<h4>Strategic Insights</h4>
							<p>Understand electoral dynamics, winning probabilities, and support bases in your constituency</p>
						</div>
						<div className="benefit-card">
							<span className="benefit-icon">🎯</span>
							<h4>Accountability</h4>
							<p>Hold candidates accountable by tracking their promises, backgrounds, and public records</p>
						</div>
						<div className="benefit-card">
							<span className="benefit-icon">💪</span>
							<h4>Campaign Strategy</h4>
							<p>Identify competitive gaps and opportunities for Ballot Fighter candidates to win seats</p>
						</div>
						<div className="benefit-card">
							<span className="benefit-icon">👥</span>
							<h4>Voter Awareness</h4>
							<p>Educate the public about all options available, preventing misinformation and tactical voting</p>
						</div>
					</div>
				</div>

				{/* Search and Filters */}
				<div className="competitors-filters">
					<div className="search-box">
						<span className="search-icon">🔍</span>
						<input
							type="text"
							placeholder="Search by candidate name, party, or seat..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					<div className="filter-group">
						<label>
							<span>📍 Division:</span>
							<select
								value={selectedDivision}
								onChange={(e) => {
									setSelectedDivision(e.target.value);
									setSelectedDistrict('all');
									setSelectedSeat('all');
								}}
							>
								<option value="all">All Divisions</option>
								{divisions.map(div => (
									<option key={div} value={div}>{div}</option>
								))}
							</select>
						</label>

						<label>
							<span>🏙️ District:</span>
							<select
								value={selectedDistrict}
								onChange={(e) => {
									setSelectedDistrict(e.target.value);
									setSelectedSeat('all');
								}}
							>
								<option value="all">All Districts</option>
								{getFilteredDistricts().map(dist => (
									<option key={dist} value={dist}>{dist}</option>
								))}
							</select>
						</label>

						<label>
							<span>🎫 Seat:</span>
							<select
								value={selectedSeat}
								onChange={(e) => setSelectedSeat(e.target.value)}
							>
								<option value="all">All Seats</option>
								{getUniqueSeats().map(seat => (
									<option key={seat} value={seat}>{seat}</option>
								))}
							</select>
						</label>
					</div>
				</div>

				{/* Results Summary */}
				<div className="results-summary">
					<h3>
						{filteredCompetitors.length} Candidate{filteredCompetitors.length !== 1 ? 's' : ''} Found
						{selectedSeat !== 'all' && ` in ${selectedSeat}`}
					</h3>
					{selectedSeat !== 'all' && (
						<p className="seat-info">
							Comparing all candidates competing for this seat
						</p>
					)}
				</div>

				{/* Competitors Grid */}
				<div className="competitors-grid">
					{filteredCompetitors.map(competitor => (
						<div key={competitor.id} className="competitor-card">
							<div className="competitor-header">
								<div className="competitor-avatar">
									{competitor.name.charAt(0)}
								</div>
								<div className="competitor-info">
									<h3>{competitor.name}</h3>
									<div className="competitor-meta">
										<span className="party-badge">{competitor.party}</span>
										<span className="seat-badge">{competitor.seat}</span>
									</div>
								</div>
								<div
									className="win-probability"
									style={{ color: getWinProbabilityColor(competitor.winProbability) }}
								>
									<strong>{competitor.winProbability}%</strong>
									<span>Win Rate</span>
								</div>
							</div>

							<div className="competitor-details">
								<div className="detail-row">
									<span className="detail-label">📍 Location:</span>
									<span>{competitor.district}, {competitor.division}</span>
								</div>
								<div className="detail-row">
									<span className="detail-label">👤 Age:</span>
									<span>{competitor.age} years</span>
								</div>
								<div className="detail-row">
									<span className="detail-label">🎓 Education:</span>
									<span>{competitor.education}</span>
								</div>
								<div className="detail-row">
									<span className="detail-label">💼 Experience:</span>
									<span>{competitor.experience}</span>
								</div>
								<div className="detail-row">
									<span className="detail-label">👥 Support Base:</span>
									<span>{competitor.supportBase}</span>
								</div>
								<div className="detail-row">
									<span className="detail-label">💰 Funding:</span>
									<span className={`funding-level ${competitor.fundingLevel.toLowerCase()}`}>
										{competitor.fundingLevel}
									</span>
								</div>
							</div>

							<div className="competitor-analysis">
								<div className="strengths">
									<h4>✅ Strengths</h4>
									<ul>
										{competitor.strongPoints.map((point, idx) => (
											<li key={idx}>{point}</li>
										))}
									</ul>
								</div>
								<div className="weaknesses">
									<h4>⚠️ Weaknesses</h4>
									<ul>
										{competitor.weakPoints.map((point, idx) => (
											<li key={idx}>{point}</li>
										))}
									</ul>
								</div>
							</div>

							<div className="competitor-actions">
								<button className="btn btn-primary">View Full Profile</button>
								<button className="btn btn-secondary">Compare</button>
							</div>
						</div>
					))}
				</div>

				{filteredCompetitors.length === 0 && (
					<div className="no-results">
						<span className="no-results-icon">🔍</span>
						<h3>No Candidates Found</h3>
						<p>Try adjusting your filters or search criteria</p>
					</div>
				)}

				{/* Instructions for adding more data */}
				<div className="data-notice">
					<h4>💡 Data Coverage</h4>
					<p>
						This is a sample implementation showing competitor analysis framework.
						In production, this will include all candidates from all 300 constituencies
						across 64 districts of Bangladesh with real-time updates and verified information.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Competitors;

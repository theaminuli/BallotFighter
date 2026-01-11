import { useState } from 'react';

function News() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const categories = [
		{ id: 'all', name: 'All News', icon: '📰' },
		{ id: 'campaign', name: 'Campaign Updates', icon: '📢' },
		{ id: 'press', name: 'Press Releases', icon: '📄' },
		{ id: 'events', name: 'Events', icon: '🎪' },
		{ id: 'media', name: 'Media Coverage', icon: '📺' }
	];

	const newsArticles = [
		{
			id: 1,
			category: 'campaign',
			title: 'Ballot Fighter Alliance Announces 50-District Tour',
			excerpt: 'Starting next week, our leadership team will visit all 64 districts to connect directly with voters...',
			date: '2 hours ago',
			image: '🗺️',
			author: 'Campaign Team'
		},
		{
			id: 2,
			category: 'press',
			title: 'Zero Corruption Pledge Signed by All Alliance Candidates',
			excerpt: 'In a historic move, every single candidate has publicly signed and declared assets...',
			date: '5 hours ago',
			image: '✍️',
			author: 'Press Office'
		},
		{
			id: 3,
			category: 'events',
			title: 'Mega Rally in Dhaka Draws 100,000 Supporters',
			excerpt: 'Record-breaking turnout at Suhrawardy Udyan as supporters rally for transparent politics...',
			date: '1 day ago',
			image: '🎉',
			author: 'Events Team'
		},
		{
			id: 4,
			category: 'media',
			title: 'International Media Highlights Bangladesh Democracy Movement',
			excerpt: 'BBC, CNN, and Al Jazeera feature Ballot Fighter Alliance as model for transparent politics...',
			date: '2 days ago',
			image: '🌍',
			author: 'Media Relations'
		},
		{
			id: 5,
			category: 'campaign',
			title: 'Digital Voter Registration Drive Reaches 500,000 Youth',
			excerpt: 'Our mobile app campaign successfully registers half a million first-time voters...',
			date: '3 days ago',
			image: '📱',
			author: 'Digital Team'
		},
		{
			id: 6,
			category: 'press',
			title: 'Manifesto Booklet Distribution Begins Nationwide',
			excerpt: 'Over 5 million copies of our detailed manifesto being distributed door-to-door...',
			date: '4 days ago',
			image: '📚',
			author: 'Press Office'
		}
	];

	const liveUpdates = [
		{ text: 'New volunteer center opened in Sylhet', time: '10 min ago', icon: '🎯' },
		{ text: 'Leadership debate scheduled for Friday 8 PM', time: '30 min ago', icon: '🎙️' },
		{ text: 'Crowdfunding crosses ৳30 Lakh milestone', time: '1 hour ago', icon: '💰' },
		{ text: 'Youth Squad training session in Chittagong', time: '2 hours ago', icon: '👥' }
	];

	const filteredNews = selectedCategory === 'all'
		? newsArticles
		: newsArticles.filter(article => article.category === selectedCategory);

	return (
		<section className="news section">
			<div className="container">
				<div className="section-title">
					<h2>News & Updates</h2>
					<p>Stay informed with real-time campaign updates and announcements</p>
				</div>

				<div className="live-updates-banner">
					<h3>🔴 Live Updates</h3>
					<div className="updates-ticker">
						{liveUpdates.map((update, index) => (
							<div key={index} className="update-item">
								<span className="update-icon">{update.icon}</span>
								<span className="update-text">{update.text}</span>
								<span className="update-time">{update.time}</span>
							</div>
						))}
					</div>
				</div>

				<div className="news-categories">
					{categories.map(cat => (
						<button
							key={cat.id}
							className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
							onClick={() => setSelectedCategory(cat.id)}
						>
							<span>{cat.icon}</span>
							{cat.name}
						</button>
					))}
				</div>

				<div className="news-grid">
					{filteredNews.map(article => (
						<article key={article.id} className="news-card">
							<div className="news-image">{article.image}</div>
							<div className="news-content">
								<div className="news-meta">
									<span className="news-category">{article.category}</span>
									<span className="news-date">⏰ {article.date}</span>
								</div>
								<h3>{article.title}</h3>
								<p>{article.excerpt}</p>
								<div className="news-footer">
									<span className="news-author">By {article.author}</span>
									<button className="btn-read-more">Read More →</button>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="newsletter-section">
					<div className="newsletter-content">
						<h3>📧 Subscribe to Updates</h3>
						<p>Get daily campaign updates, event notifications, and breaking news directly to your inbox</p>
						<div className="newsletter-form">
							<input type="email" placeholder="Enter your email" />
							<button className="btn btn-primary">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default News;

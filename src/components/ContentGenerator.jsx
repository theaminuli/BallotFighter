import { useState } from 'react';

function ContentGenerator() {
	const [selectedTool, setSelectedTool] = useState('dp-frame');
	const [generatedContent, setGeneratedContent] = useState(null);

	const tools = [
		{ id: 'dp-frame', name: 'DP Frame', icon: '🖼️', description: 'Add campaign frame to your profile picture' },
		{ id: 'cover-photo', name: 'Cover Photo', icon: '📸', description: 'Generate cover photos with slogans' },
		{ id: 'poster', name: 'Quote Poster', icon: '📄', description: 'Create motivational quote posters' },
		{ id: 'sticker', name: 'Slogan Sticker', icon: '🎯', description: 'Design stickers for social media' },
		{ id: 'video', name: 'Video Template', icon: '🎬', description: 'Customizable video templates' },
		{ id: 'ai-dp', name: 'AI DP Generator', icon: '🤖', description: '"I am Ballot Fighter" AI profile pics' }
	];

	const slogans = [
		"I Fight on the Ballot 🗳️",
		"Power to the People 💪",
		"Vote for Change ✊",
		"Transparent Politics 🔍",
		"Justice for All ⚖️",
		"Building Tomorrow 🌅"
	];

	const colors = [
		{ name: 'Primary Blue', value: '#1e40af' },
		{ name: 'Purple', value: '#7c3aed' },
		{ name: 'Orange', value: '#f59e0b' },
		{ name: 'Green', value: '#10b981' }
	];

	const generateContent = () => {
		setGeneratedContent({
			tool: selectedTool,
			timestamp: new Date().toISOString()
		});
	};

	return (
		<section className="content-generator section">
			<div className="container">
				<div className="section-title">
					<h2>Digital Content Generator</h2>
					<p>Create campaign materials in seconds — share on social media instantly</p>
				</div>

				<div className="generator-layout">
					<div className="tools-sidebar">
						<h3>Choose Tool</h3>
						{tools.map(tool => (
							<button
								key={tool.id}
								className={`tool-btn ${selectedTool === tool.id ? 'active' : ''}`}
								onClick={() => setSelectedTool(tool.id)}
							>
								<span className="tool-icon">{tool.icon}</span>
								<div className="tool-info">
									<div className="tool-name">{tool.name}</div>
									<div className="tool-desc">{tool.description}</div>
								</div>
							</button>
						))}
					</div>

					<div className="generator-workspace">
						<div className="workspace-header">
							<h3>
								{tools.find(t => t.id === selectedTool)?.icon}{' '}
								{tools.find(t => t.id === selectedTool)?.name}
							</h3>
							<p>{tools.find(t => t.id === selectedTool)?.description}</p>
						</div>

						<div className="generator-controls">
							<div className="control-group">
								<label>Select Slogan</label>
								<div className="slogan-options">
									{slogans.map((slogan, index) => (
										<button key={index} className="slogan-btn">
											{slogan}
										</button>
									))}
								</div>
							</div>

							<div className="control-group">
								<label>Choose Color Theme</label>
								<div className="color-options">
									{colors.map((color, index) => (
										<button
											key={index}
											className="color-btn"
											style={{ background: color.value }}
											title={color.name}
										/>
									))}
								</div>
							</div>

							{selectedTool === 'ai-dp' && (
								<div className="control-group">
									<label>Upload Your Photo</label>
									<div className="upload-area">
										<span className="upload-icon">📤</span>
										<p>Click to upload or drag and drop</p>
										<small>JPG, PNG up to 10MB</small>
									</div>
								</div>
							)}

							<button className="btn btn-primary generate-btn" onClick={generateContent}>
								🎨 Generate Content
							</button>
						</div>

						<div className="preview-area">
							<h4>Preview</h4>
							{generatedContent ? (
								<div className="preview-content">
									<div className="preview-sample">
										<div className="sample-frame">
											<div className="sample-image">👤</div>
											<div className="sample-overlay">
												<div className="sample-text">I Fight on the Ballot 🗳️</div>
											</div>
										</div>
									</div>
									<div className="preview-actions">
										<button className="btn btn-primary">📥 Download</button>
										<button className="btn btn-secondary">📱 Share on Social Media</button>
									</div>
								</div>
							) : (
								<div className="preview-placeholder">
									<span className="placeholder-icon">🎨</span>
									<p>Your generated content will appear here</p>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="templates-showcase">
					<h3>Popular Templates</h3>
					<div className="templates-grid">
						{[1, 2, 3, 4, 5, 6].map(num => (
							<div key={num} className="template-card">
								<div className="template-preview">
									<div className="template-icon">🎨</div>
									<div className="template-label">Template {num}</div>
								</div>
								<button className="btn-use-template">Use This</button>
							</div>
						))}
					</div>
				</div>

				<div className="sharing-guide">
					<h3>📱 How to Share Effectively</h3>
					<div className="guide-steps">
						<div className="guide-step">
							<span className="step-number">1</span>
							<div>
								<strong>Generate Content</strong>
								<p>Choose template, customize with slogan and colors</p>
							</div>
						</div>
						<div className="guide-step">
							<span className="step-number">2</span>
							<div>
								<strong>Download</strong>
								<p>Save to your device in high quality</p>
							</div>
						</div>
						<div className="guide-step">
							<span className="step-number">3</span>
							<div>
								<strong>Share Everywhere</strong>
								<p>Facebook, Instagram, Twitter, WhatsApp — spread the word!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContentGenerator;

import { useState } from 'react';
import About from './components/About';
import Competitors from './components/Competitors';
import ContentGenerator from './components/ContentGenerator';
import Crowdfunding from './components/Crowdfunding';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Leadership from './components/Leadership';
import Manifesto from './components/Manifesto';
import Navigation from './components/Navigation';
import News from './components/News';
import Store from './components/Store';
import Volunteers from './components/Volunteers';

function App() {
	const [currentSection, setCurrentSection] = useState('home');

	const renderSection = () => {
		switch (currentSection) {
			case 'home':
				return (
					<>
						<Hero />
						<About />
					</>
				);
			case 'leadership':
				return <Leadership />;
			case 'manifesto':
				return <Manifesto />;
			case 'competitors':
				return <Competitors />;
			case 'store':
				return <Store />;
			case 'content-generator':
				return <ContentGenerator />;
			case 'crowdfunding':
				return <Crowdfunding />;
			case 'news':
				return <News />;
			case 'volunteers':
				return <Volunteers />;
			case 'dashboard':
				return <Dashboard />;
			default:
				return <Hero />;
		}
	};

	return (
		<div className="app">
			<Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
			<main>{renderSection()}</main>
			<Footer setCurrentSection={setCurrentSection} />
		</div>
	);
}

export default App;

import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/Loader';

// Lazy load components
const CharacterInfo = lazy(() =>
	import('./components/characters/CharacterInfo')
);
const CharacterPage = lazy(() =>
	import('./components/characters/CharacterPage')
);
const Films = lazy(() => import('./components/films/Films'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const Home = lazy(() => import('./components/Home'));
const Planets = lazy(() => import('./components/planets/Planets'));
const Species = lazy(() => import('./components/species/Species'));
const Starships = lazy(() => import('./components/starships/Starships'));
const Vehicles = lazy(() => import('./components/vehicles/Vehicles'));

const App = () => {
	return (
		<div className='App'>
			<Suspense fallback={Loader}>
				<Header />
				<HeroSection />
				<Switch>
					<Route exact path='/characters' component={CharacterPage} />
					<Route path='/characters/:id' component={CharacterInfo} />
					<Route exact path='/films' component={Films} />
					<Route path='/planets' component={Planets} />
					<Route exact path='/species' component={Species} />
					<Route path='/starships' component={Starships} />
					<Route exact path='/vehicles' component={Vehicles} />

					<Route exact path='/' component={Home} />
				</Switch>
				<Footer />
			</Suspense>
		</div>
	);
};

export default App;

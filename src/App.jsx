import { Switch, Route } from 'react-router-dom';
import CharacterPage from './components/characters/CharacterPage';
import CharacterInfo from './components/characters/CharacterInfo';
import Films from './components/films/Films';
import Header from './components/Header';
import Home from './components/Home';
import Planets from './components/planets/Planets';
import Species from './components/species/Species';
import Starships from './components/starships/Starships';
import Vehicles from './components/vehicles/Vehicles';

const App = () => {
	return (
		<div className='App'>
			<Header />
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
		</div>
	);
};

export default App;

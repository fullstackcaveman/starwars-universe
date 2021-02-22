import { Switch, Route } from 'react-router-dom';
import './fonts/STARJEDI.TTF';
import CharacterPage from './components/characters/CharacterPage';
import Home from './components/Home';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/characters'>
					<CharacterPage />
				</Route>
			</Switch>
		</div>
	);
};

export default App;

import { Switch, Route } from 'react-router-dom';
import CharacterPage from './components/characters/CharacterPage';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/characters' component={CharacterPage} />

				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
};

export default App;

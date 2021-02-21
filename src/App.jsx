import { Switch, Route } from 'react-router-dom';

import CharacterPage from './components/characters/CharacterPage';
import Home from './components/Home';

const App = () => {
	return (
		<Switch>
			<div className='App'>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/characters'>
					<CharacterPage />
				</Route>
			</div>
		</Switch>
	);
};

export default App;

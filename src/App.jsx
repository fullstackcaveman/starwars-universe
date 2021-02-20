import { useState, useEffect } from 'react';
import axios from 'axios';
import { AKABAB_BASE_URL } from './constants';
import './App.css';
import Characters from './components/Characters';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [fetchCharacters, setFetchCharacters] = useState('all.json');
	const [fetchCharacter, setFetchCharacter] = useState(1);
	const [page, setPage] = useState(3);

	useEffect(() => {
		const getCharacters = () => {
			axios
				.get(`${AKABAB_BASE_URL}/${fetchCharacters}`)
				.then((res) => {
					console.log(res.data);
					setCharacters(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		getCharacters();
	}, []);

	const setNextPage = () => {
		setPage(page + 1);
	};

	const setPrevPage = () => {
		setPage(page - 1);
	};

	return (
		<div className='App'>
			<h1 className='Header'>Star Wars Characters</h1>
			<Characters
				characters={characters}
				page={page}
				nextpage={setNextPage}
				prevpage={setPrevPage}
			/>
		</div>
	);
};

export default App;

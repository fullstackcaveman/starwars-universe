import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { AKABAB_BASE_URL } from './constants';
import './App.css';
import Characters from './components/Characters';

const App = () => {
	const [characterData, setCharacterData] = useState({
		characters: [],
		fetchCharacters: 'all.json',
		fetchCharacter: 1,
		page: 3,
	});
	// const [characters, setCharacters] = useState([]);
	// const [fetchCharacters, setFetchCharacters] = useState('all.json');
	// const [fetchCharacter, setFetchCharacter] = useState(1);
	// const [page, setPage] = useState(3);

	useEffect(() => {
		const getCharacters = () => {
			axios
				.get(`${AKABAB_BASE_URL}/${characterData.fetchCharacters}`)
				.then((res) => {
					console.log(res.data);
					setCharacterData({ characters: res.data });
				})
				.catch((err) => {
					console.log(err);
				});
		};

		getCharacters();
	}, []);

	// const setNextPage = () => {
	// 	setPage(page + 1);
	// };

	// const setPrevPage = () => {
	// 	setPage(page - 1);
	// };

	return (
		<div className='App'>
			<h1 className='Header'>Star Wars Characters</h1>
			<Characters
				characters={characterData.characters}
				page={characterData.page}
				// nextpage={setNextPage}
				// prevpage={setPrevPage}
			/>
		</div>
	);
};

export default App;

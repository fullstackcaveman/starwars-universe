import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import './styles/main.css';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage] = useState(10);

	useEffect(() => {
		const fetchCharacters = () => {
			setLoading(true);
			axios
				.get(`${BASE_URL}/all.json`)
				.then((res) => {
					setCharacters(res.data);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchCharacters();
	}, []);

	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	const currentCharacters = characters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className='App'>
			<Characters characters={currentCharacters} loading={loading} />
			<Pagination
				charactersPerPage={charactersPerPage}
				totalCharacters={characters.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default App;

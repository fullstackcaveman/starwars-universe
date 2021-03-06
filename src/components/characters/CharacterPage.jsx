import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import Characters from './Characters';
import Pagination from '../Pagination';
import Background from '../Background';

const CharacterPage = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage] = useState(10);

	const pageOne = document.getElementById('page1');
	const pages = document.querySelectorAll('.page-item');

	// GET characters from the api
	useEffect(() => {
		const fetchCharacters = () => {
			setLoading(true);
			axios
				.get(`${BASE_URL}/all.json`)
				.then((res) => {
					setCharacters(res.data);
					setLoading(false);
					console.log(characters);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchCharacters();
	}, []);

	// Sets structure of pagination
	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	const currentCharacters = characters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);

	// Controls which characters to display and button styling
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		// Clears active class from all pagination items
		pages.forEach((page) => {
			page.classList.remove('active');
		});

		// Adds class 'active' to pagination element
		pages.forEach((page) => {
			if (page.id === `page${pageNumber}`) {
				page.classList.add('active');
			}
		});
	};

	// Sets pagination item1 to active
	window.onload = () => {
		pageOne.classList.add('active');
	};

	return (
		<div className='character-page'>
			<h1>Star Wars Characters</h1>
			<Characters characters={currentCharacters} loading={loading} />
			<Pagination
				charactersPerPage={charactersPerPage}
				totalCharacters={characters.length}
				paginate={paginate}
			/>
			<Background />
		</div>
	);
};

export default CharacterPage;

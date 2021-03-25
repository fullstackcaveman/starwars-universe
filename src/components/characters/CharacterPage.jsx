import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { AKABAB_BASE_URL } from '../../constants';
import Background from '../Background';
import Loader from '../Loader';

// Lazy Loading
const Characters = lazy(() => import('./Characters'));
const Pagination = lazy(() => import('../Pagination'));

const CharacterPage = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	// Change this to set characters per page
	const [charactersPerPage] = useState(10);

	const pages = document.querySelectorAll('.page-item');

	// GET characters from the api
	useEffect(() => {
		const fetchCharacters = () => {
			setLoading(true);
			axios
				.get(`${AKABAB_BASE_URL}/all.json`)
				.then((res) => {
					setCharacters(res.data);
					setLoading(false);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchCharacters();
	}, []);

	useEffect(() => {
		const findPage1 = () => {
			const page1 = document.getElementById('page1');
			page1.classList.add('active');
		};
		setTimeout(() => findPage1(), 1500);
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
		const thisPage = document.getElementById(`page${currentPage}`);
		thisPage.classList.remove('active');

		const newPage = document.getElementById(`page${pageNumber}`);
		newPage.classList.add('active');

		setCurrentPage(pageNumber);
	};

	const prevPage = () => {
		const newPage = currentPage - 1;
		if (currentPage > 1) {
			paginate(newPage);
		}
	};

	const nextPage = () => {
		const newPage = currentPage + 1;
		if (currentPage < characters.length / charactersPerPage) {
			paginate(newPage);
		}
	};

	return (
		<div className='character-page'>
			<h1>Characters</h1>
			<Suspense fallback={Loader}>
				<Characters characters={currentCharacters} loading={loading} />
			</Suspense>
			<Suspense fallback={Loader}>
				<Pagination
					charactersPerPage={charactersPerPage}
					totalCharacters={characters.length}
					paginate={paginate}
					prev={prevPage}
					next={nextPage}
				/>
			</Suspense>

			<Background />
		</div>
	);
};

export default CharacterPage;

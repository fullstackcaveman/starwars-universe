import { Link } from 'react-router-dom';

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='pagination'>
			{pageNumbers.map((number) => (
				<li key={number} className={'page-item'} id={`page${number}`}>
					<Link to={`#page=${number}`} className='page-link' onClick={paginate}>
						{number}
					</Link>
				</li>
			))}
		</nav>
	);
};

export default Pagination;

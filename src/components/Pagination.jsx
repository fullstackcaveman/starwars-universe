const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='pagination'>
			{pageNumbers.map((number) => (
				<li key={number} className={'page-item'} id={`page ${number}`}>
					<a className='page-link' onClick={() => paginate(number)} href='!#'>
						{number}
					</a>
				</li>
			))}
		</nav>
	);
};

export default Pagination;

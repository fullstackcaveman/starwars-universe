import Character from './Character';

const Characters = (props) => {
	const { characters, loading } = props;

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className='characters-wrapper'>
			<h1>Star Wars Characters</h1>
			{characters.map((character) => {
				return <Character key={character.name} {...character} />;
			})}
		</div>
	);
};

export default Characters;

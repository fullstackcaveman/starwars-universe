import Loader from '../Loader';
import CharacterCard from './CharacterCard';

const Characters = (props) => {
	const { characters, loading } = props;

	if (loading) {
		return <Loader />;
	}

	return (
		<div className='characters-wrapper'>
			{characters.map((character) => {
				return <CharacterCard key={character.name} {...character} />;
				// return <Character key={character.name} {...character} />;
			})}
		</div>
	);
};

export default Characters;

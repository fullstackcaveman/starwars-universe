import Character from './Character';
import { CharactersWrapper, Button } from '../styles/Characters.styles';

const Characters = (props) => {
	const { characters, page, nextpage, prevpage } = props;

	const clickHandlerNext = () => {
		nextpage();
	};

	const clickHandlerPrev = () => {
		prevpage();
	};

	return (
		<CharactersWrapper>
			{characters.map((character) => {
				return <Character key={character.name} {...character} />;
			})}
			{/* {page === 1 ? (
				<div className='buttons'>
					<Button onClick={clickHandlerNext}>Next</Button>
				</div>
			) : (
				<div className='buttons'>
					<Button onClick={clickHandlerPrev}>Prev</Button>
					<Button onClick={clickHandlerNext}>Next</Button>
				</div>
			)} */}
		</CharactersWrapper>
	);
};

export default Characters;

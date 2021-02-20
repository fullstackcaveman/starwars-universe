import { CharacterWrapper, H2, Button } from '../styles/Character.styles.js';

const Character = (props) => {
	const { name, born, height, hairColor, eyeColor, gender, image } = props;

	const clickHandler = () => {
		const charWrapper = document.getElementById(`${name}`);
		const hide = document.getElementById(`${name}${born}`);
		charWrapper.classList.toggle('expand');
		hide.classList.toggle('hidden');
	};

	return (
		<CharacterWrapper id={name}>
			<div className='container'>
				<H2 className='name'>{name}</H2>
				<Button onClick={clickHandler}>Character Info</Button>
			</div>
			<div id={name + born} className='flex hidden'>
				<div className='row'>
					<img className='image' src={image} alt={name} />
					<div className='info'>
						{born ? (
							<p className='birth'>Birth Year: {born}BBY</p>
						) : (
							<p className='birth'>Birth Year: unknown</p>
						)}
						<p>Height: {height} meters</p>
						{hairColor ? (
							<p>Hair Color: {hairColor}</p>
						) : (
							<p>Hair Color: n/a</p>
						)}
						<p>Eye Color: {eyeColor}</p>
						<p>Gender: {gender}</p>
					</div>
				</div>
			</div>
		</CharacterWrapper>
	);
};

export default Character;

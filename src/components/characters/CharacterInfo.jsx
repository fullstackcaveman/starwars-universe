import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import Background from '../Background';

const CharacterInfo = ({ match }) => {
	const [character, setCharacter] = useState({});

	console.log(match);

	const getCharacter = () => {
		axios
			.get(`${BASE_URL}/id/${match.params.id}.json`)
			.then((res) => {
				console.log(res.data);
				setCharacter(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	console.log(character.name);

	useEffect(() => {
		getCharacter();
	}, []);

	return (
		<>
			<div>
				<h2>{character.name}</h2>
				<h3>{character.species}</h3>
				<h3>{character.homeworld}</h3>
			</div>
			{/* <Background /> */}
		</>
	);
};

export default CharacterInfo;

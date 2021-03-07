import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import {
	Paper,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
} from '@material-ui/core';
import Background from '../Background';

const CharacterInfo = ({ match }) => {
	const [character, setCharacter] = useState({});

	document.title = `Star Wars | ${character.name}`;

	const getCharacter = () => {
		// setLoading(true);
		axios
			.get(`${BASE_URL}/id/${match.params.id}.json`)
			.then((res) => {
				console.log(res.data);
				setCharacter(res.data);
				// setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getCharacter();
	}, []);

	return (
		<>
			<div className='character-info-container'>
				<Card className='character-info-card'>
					<div className='flex'>
						<CardMedia
							component='img'
							alt='character.name'
							image={character.image}
						/>
						<CardContent className='character-data'>
							<Typography component='h1'>{character.name}</Typography>
							<Typography component='h3'>{`Species: ${character.species}`}</Typography>
							<Typography component='h3'>{`Birth: ${character.born}bby`}</Typography>
							<Typography component='h3'>{`Gender: ${character.gender}`}</Typography>
							<Typography component='h3'>{`Height: ${character.height}m`}</Typography>
							<Typography component='h3'>{`Mass: ${character.mass}kg`}</Typography>
							<Typography component='h3'>{`Hair Color: ${character.hairColor}`}</Typography>
							<Typography component='h3'>{`Skin Color: ${character.skinColor}`}</Typography>
							<Typography component='h3'>{`Homeworld: ${character.homeworld}`}</Typography>
						</CardContent>
					</div>
				</Card>
			</div>
			<Background />
		</>
	);
};

export default CharacterInfo;

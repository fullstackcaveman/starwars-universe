import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import Background from '../Background';

const CharacterInfo = ({ match }) => {
	const [character, setCharacter] = useState({});
	const {
		name,
		species,
		born,
		gender,
		height,
		mass,
		hairColor,
		skinColor,
		homeworld,
	} = character;

	document.title = `Star Wars | ${character.name}`;

	const [capSpecies, setCapSpecies] = useState();
	const [capBorn, setCapBorn] = useState();

	const getCharacter = () => {
		// setLoading(true);
		axios
			.get(`${BASE_URL}/id/${match.params.id}.json`)
			.then((res) => {
				const data = res.data;
				console.log(data);
				setCharacter(data);
				setCapSpecies(data.species);
				setCapBorn(data.born);
				// setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getCharacter();
	}, []);

	console.log(capSpecies);

	// console.log(toCapital(capSpecies));

	useEffect(() => {
		const toCapital = (value) => {
			const valueToUse = value.charAt(0).toUpperCase() + value.slice(1);
			if (value === 'species') {
				setCapSpecies(valueToUse);
			} else if (value === 'born') {
				setCapBorn(valueToUse);
			}
		};
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
							<Typography component='h1'>{name}</Typography>

							{!species ? (
								<Typography component='h3'>Species: unknown</Typography>
							) : (
								<Typography component='h3'>{`Species: ${species}`}</Typography>
							)}

							{!born ? (
								<Typography component='h3'>Birth: unknown</Typography>
							) : (
								<Typography component='h3'>{`Birth: ${born}BBY`}</Typography>
							)}

							{!gender ? (
								<Typography component='h3'>Gender: unknown</Typography>
							) : (
								<Typography component='h3'>{`Gender: ${gender}`}</Typography>
							)}

							{!height ? (
								<Typography component='h3'>Height: unknown</Typography>
							) : (
								<Typography component='h3'>{`Height: ${height}m`}</Typography>
							)}

							{!mass ? (
								<Typography component='h3'>Mass: unknown</Typography>
							) : (
								<Typography component='h3'>{`Mass: ${mass}kg`}</Typography>
							)}

							{!hairColor ? (
								<Typography component='h3'>Hair Color: n/a</Typography>
							) : (
								<Typography component='h3'>{`Hair Color: ${hairColor}`}</Typography>
							)}

							{!skinColor ? (
								<Typography component='h3'>Skin Color: n/a</Typography>
							) : (
								<Typography component='h3'>{`Skin Color: ${skinColor}`}</Typography>
							)}

							{!homeworld ? (
								<Typography component='h3'>Homeworld: unknown</Typography>
							) : (
								<Typography component='h3'>{`Homeworld: ${homeworld}`}</Typography>
							)}
						</CardContent>
					</div>
				</Card>
			</div>
			<Background />
		</>
	);
};

export default CharacterInfo;

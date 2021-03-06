import { Switch, Route } from 'react-router-dom';
import Background from './Background';

const Home = () => {
	return (
		<Switch>
			<div id='home' className='home'>
				<div className='starwars'>
					<p>STAR</p>
					<span className='wars'>WARS</span>
				</div>

				<div className='links-container'>
					<a href='./characters'>
						<div className='characters-link'></div>
					</a>
					<a href='./films'>
						<div className='films-link'></div>
					</a>

					<div className='species-link'></div>
					<div className='starships-link'></div>
					<div className='vehicles-link'></div>
					<div className='planets-link'></div>
				</div>

				<Background />
			</div>
		</Switch>
	);
};

export default Home;

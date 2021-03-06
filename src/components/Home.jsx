import { Switch, Route, Link } from 'react-router-dom';
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
					<Link to='/characters'>
						<div className='characters-link'></div>
					</Link>

					<Link to='/films'>
						<div className='films-link'></div>
					</Link>

					<Link to='/species'>
						<div className='species-link'></div>
					</Link>

					<Link to='/starships'>
						<div className='starships-link'></div>
					</Link>

					<Link to='/vehicles'>
						<div className='vehicles-link'></div>
					</Link>

					<Link to='/planets'>
						<div className='planets-link'></div>
					</Link>
				</div>

				<Background />
			</div>
		</Switch>
	);
};

export default Home;

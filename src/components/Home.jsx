import Background from './Background';

const Home = () => {
	return (
		<div id='home' className='home'>
			<div className='starwars'>
				<p>STAR</p>
				<span className='wars'>WARS</span>
			</div>
			<Background />
		</div>
	);
};

export default Home;

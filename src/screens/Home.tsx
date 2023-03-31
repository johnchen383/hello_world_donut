import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import Button from '../components/shared/Button';
import '../styles/screens/home.scss';

function Home() {
	const navigate = useNavigate()
	const [count, setCount] = useState(0);

	return (
		<div className="home">
			<div className="home__container">
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" className="logo" alt="Vite logo" />
					</a>
					<a href="https://reactjs.org" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="home__container__buttons">
					<Button text={`count is ${count}`} onClick ={() => setCount((count) => count + 1)}/>
					<Button text="Another" onClick={() => navigate("/another")}/>
				</div>
			</div>
		</div>
	);
}

export default Home;

import React from 'react';
import {useNavigate} from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import Button from '../components/shared/Button';
import '../styles/screens/another.scss';

function Another() {
	const navigate = useNavigate();
	return (
		<div className="another">
			<div className="another__container">
				<Dashboard title="Another" />
				<Button text="Back" onClick={() => navigate(-1)}/>
			</div>
		</div>
	);
}

export default Another;

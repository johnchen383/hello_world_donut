import React from 'react';
import Button from './shared/Button';
import "../styles/components/dashboard.scss"

function Dashboard({ title }: { title: string }) {
	return (
		<div className="dashboard">
			<div className="dashboard__title">{title} Dashboard</div>
			<div className="dashboard__container">
				<Button text="Ctrl One"/>
				<Button text="Ctrl Two"/>
			</div>
		</div>
	);
}

export default Dashboard;

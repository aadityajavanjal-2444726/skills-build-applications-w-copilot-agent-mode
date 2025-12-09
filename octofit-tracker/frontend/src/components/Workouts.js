import React, { useEffect, useState } from 'react';

const Workouts = () => {
	const [workouts, setWorkouts] = useState([]);
	const endpoint = "https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/workouts/";

	useEffect(() => {
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setWorkouts(data.results || data);
				console.log('Workouts API endpoint:', endpoint);
				console.log('Fetched workouts:', data);
			})
			.catch(err => console.error('Error fetching workouts:', err));
	}, [endpoint]);

	return (
		<div>Workouts Component</div>
	);
};

export default Workouts;

import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
	const [leaders, setLeaders] = useState([]);
	const endpoint = "https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/leaderboard/";

	useEffect(() => {
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setLeaders(data.results || data);
				console.log('Leaderboard API endpoint:', endpoint);
				console.log('Fetched leaderboard:', data);
			})
			.catch(err => console.error('Error fetching leaderboard:', err));
	}, [endpoint]);

	return (
		<div>Leaderboard Component</div>
	);
};

export default Leaderboard;

import React, { useEffect, useState } from 'react';

const Teams = () => {
	const [teams, setTeams] = useState([]);
	const endpoint = "https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/teams/";

	useEffect(() => {
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setTeams(data.results || data);
				console.log('Teams API endpoint:', endpoint);
				console.log('Fetched teams:', data);
			})
			.catch(err => console.error('Error fetching teams:', err));
	}, [endpoint]);

	return (
		<div>Teams Component</div>
	);
};

export default Teams;

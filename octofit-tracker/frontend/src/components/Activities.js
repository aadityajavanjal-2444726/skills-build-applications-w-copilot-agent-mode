import React, { useEffect, useState } from 'react';

const Activities = () => {
	const [activities, setActivities] = useState([]);
	const endpoint = "https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/activities/";

	useEffect(() => {
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setActivities(data.results || data);
				console.log('Activities API endpoint:', endpoint);
				console.log('Fetched activities:', data);
			})
			.catch(err => console.error('Error fetching activities:', err));
	}, [endpoint]);

	return (
		<div>Activities Component</div>
	);
};

export default Activities;

import React, { useEffect, useState } from 'react';

const Users = () => {
	const [users, setUsers] = useState([]);
	const endpoint = "https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/users/";

	useEffect(() => {
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setUsers(data.results || data);
				console.log('Users API endpoint:', endpoint);
				console.log('Fetched users:', data);
			})
			.catch(err => console.error('Error fetching users:', err));
	}, [endpoint]);

	return (
		<div>Users Component</div>
	);
};

export default Users;

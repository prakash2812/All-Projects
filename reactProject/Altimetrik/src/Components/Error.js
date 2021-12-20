import React from 'react';

function Error({ user }) {
	const { name, date } = user
	console.log("Error info ", user)

	return (
		<div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
			{
				date ? <p>Sorry, {name} validity has expired!</p> : name !== '' ? <p>Sorry, {name} is not a verified student!</p> : null
			}
		</div>
	)
}

export default Error;

import React, { useState, createContext } from 'react';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

export function checkValidity(joiningDate, validityDate) {

	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search({ data, submitHandler, inputHandler }) {
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName"
						name='setName'
						onChange={(e) => inputHandler(e)}
						type="text" className="mr-30 mt-10" />
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate"
						onChange={(e) => inputHandler(e)}
						type="date" className="mr-30 mt-10" />
				</div>
			</label>
			<button type="button" data-testid="addBtn"
				onClick={submitHandler}
				className="small mb-0">Add</button>
		</div>

	);
}

export default Search;

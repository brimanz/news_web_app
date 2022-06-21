import React, {useState} from 'react'


const useSelect = (initialState, queries) =>{

	const [state, updateState] = useState(initialState);


	const SelectNews = () => (
		<select 
			className="form-control mb-3"
			onChange={e => updateState(e.target.value)}
		>
			{queries.map(query =>(
				<option 
					key={query.value} 
					value={query.value}
				>
					{query.label}
				</option>
			))}
		</select>
	);

	return[state, SelectNews];
}


export default useSelect;
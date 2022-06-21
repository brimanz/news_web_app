import React from 'react'
import {DiReact} from "react-icons/di";


//components import
import useSelect from '../hooks/useSelect'


const Form = ({setCategory}) =>{

	const QUERIES = [,
		{value: 'date', label: 'Date'},
	]

	//using custom hook
	const [category, SelectNews] = useSelect('date', QUERIES);

	//submit form
	const searchNews = e =>{
		e.preventDefault();

		setCategory(category);
	}


	return(
		<div className="row">
			<div className="col-4 mt-5">
				<form
					onSubmit={searchNews}
				>
					<h2>Search news</h2>
					<SelectNews/>

					<div>
						<input
							type="submit"
							className="btn btn-danger"
							value="Search"
						/>

					</div>
				</form>
			</div>
		</div>
	);
}


export default Form;
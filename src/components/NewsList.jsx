import React from 'react'

//components import
import News from './News'


const NewsList = ({result}) =>{
	return(
		<div className="row">
			{result.map(result =>(
				<News
					key={result.objectID}
					result={result}
				/>
			))}
		</div>
	);
}


export default NewsList;
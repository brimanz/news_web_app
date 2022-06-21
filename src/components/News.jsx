import React from 'react'
import {BsFillHeartFill, BsFillChatRightTextFill} from "react-icons/bs";



const News = ({result}) =>{

	//data extract
	const {title, url, author, num_comments} = result;

	return(
		<div className="col-sm-12 col-md-6 col-lg-4 mt-4">
			<div className="card">
				<div className="card-header">
					<h3>{title}</h3>
				</div>
				<div className="card-body">
					<p>Author: {author}</p>
				</div>
				<div className="card-footer row">
					<a 
						href={url}
						className="col-sm-4 col-xs-4 col-lg-5 mt-2">Read more...</a>
					<p className="col-sm-8 col-xs-8 mt-2 col-lg-7">
						<BsFillChatRightTextFill className="mx-1"/>{num_comments}
						<BsFillHeartFill
							className="col-sm-5 mt-1 heart mx-1"
							value={{color:"rgba(255,0,0,0.4)"}}
							size="1.2rem"
						/>
					</p>
					
				</div>
			</div>
		</div>
	);
}


export default News;
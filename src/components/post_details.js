//import React, {Component} from 'react';
import React from 'react';

//var url = 'https://www.osomstore.com/wp-json/wp/v2/posts/';

// class PostDetails extends Component {

// 	render(){
// 		return(
// 			<p>Hello, this is the post WP-API url: {url}</p>
// 		);
// 	};

// }

const PostDetails = ({post}) => {

	const url = 'https://www.osomstore.com/wp-json/wp/v2/posts/';
	/* HTTP requests starts */
	var thePost = [];
	function reqListener () {
	  //console.log(this.responseText); //WORKS!
		var thePost = JSON.parse(oReq.responseText)
		console.log(thePost); // array with 2 objects, one object for each post.
		console.log(thePost[0].title.rendered);
		console.log(post);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", url);
	oReq.send();
	
	/* HTTP requests ends */	

	return(
		/*
		React element has to return only one element. In this case one <div> and wrap the rest with it
		*/
		<div className="post-wrapper">
			<p>Hello, this is the post WP-API url:</p>
			<a href={url}>{url}</a>
			<p>I'm fetching the post data into the console but not rendering on the site (╯°□°)╯︵ ┻━┻ </p>
			<p>{}</p>
			
		</div>
	);

}

export default PostDetails;
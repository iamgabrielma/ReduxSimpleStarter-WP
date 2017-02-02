// import React, { Component } from 'react';
import React from 'react';
// export default class App extends Component {
//   render() {
//     return (
//       <div>React simple starter for WP - Check the console!</div>
//     );
//   }
// }

var myApp = React.createClass({

	render: function(){

		var doingItWithStyle = {
            color: 'red',
            padding: 20,
            width: 550,
            margin: '0 auto',
            fontFamily: 'Georgia',
            fontSize: 22,
            fontWeight: 'bold'
		}

		return(
			<p style={doingItWithStyle}>Hola!</p>
			<Picture />		
		);
	}
});

export default myApp;
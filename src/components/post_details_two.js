
import React from 'react';

var Picture = React.createClass({
	render: function(){



		return(<div><img src="http://lorempixel.com/550/350/"></img></div>);
	}
});

var Quote = React.createClass({
	render: function(){
		
		var doingItWithStyle = {
			backgroundColor: 'ffde00',
            color: 'red',
            padding: 20,
            width: 550,
            margin: '0 auto',
            fontFamily: 'Georgia',
            fontSize: 22,
            fontWeight: 'bold'
		}

		return(<div style={doingItWithStyle}><p>Testing a react class</p></div>);
	}
});

export default Picture;
//export default Quote;

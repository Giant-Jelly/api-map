import React, { Component } from 'react';
import injectSheet from 'react-jss'

const styles = {
	'box': {
		background: '#000',
		'width': '100px',
		'height': '100px',
		'&:hover':{
			background: '#ff8330'
		},

		'& h1': {
			color: '#fff'
		}
	}
}

class Box extends Component {

	render() {
		return (
			<div className={this.props.classes.box}>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default injectSheet(styles)(Box)

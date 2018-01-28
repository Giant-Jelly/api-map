import React, { Component } from 'react';
import injectSheet from 'react-jss'
import Nav from '../Nav/Nav.js'

const styles = {
	'home': {
		background: '#fff',
		width: '100%',
		height: '100%',
		'& h1': {
			color: '#000'
		}
	}
}

const HomePage = ({classes}) =>
	<div className={classes.home}>
		<Nav />
	</div>

export default injectSheet(styles)(HomePage)

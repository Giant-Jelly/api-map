import React, { Component } from 'react';
import injectSheet from 'react-jss'

const styles = {
	'nav': {
		background: '#45535c',
		width: '100%',
		height: '60px',
		display: 'block',
		'padding': '10px'
	},
	'logo':{
		width: '60px',
		color: '#fff',
		float: 'left',
		'margin-right': '20px'
	},
	'navList': {
		'list-style-type': 'none',
    	overflow: 'hidden',
	},
	'navListItem': {
		float: 'left'
	},
	'navListItemText': {
		display: 'block',
	    color: 'white',
	    'text-align': 'center',
	    padding: '20px 16px',
	    'text-decoration': 'none',
	}
}

const Nav = ({classes}) =>
	<div className={classes.nav}>
		<img src="assets/logo.png" className={classes.logo} />
		<ul className={classes.navList}>
			<li className={classes.navListItem}>
				<a className={classes.navListItemText}>Home</a>
			</li>
			<li className={classes.navListItem}>
				<a className={classes.navListItemText}>Login</a>
			</li>
		</ul>
	</div>

export default injectSheet(styles)(Nav)

import React, { Component } from 'react';
import injectSheet from 'react-jss'

const styles = {
	'nav': {
		background: '#45535c',
		width: '100%',
		height: '60px',
		display: 'block',
		'padding': '10px',
		'text-align': 'center'
	},
	'logo':{
		width: '60px',
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
	    color: '#111',
	    'text-align': 'center',
	    padding: '20px 16px',
	    'text-decoration': 'none',
	    'cursor': 'pointer',
	    '&:hover': {
	    	color: '#fff'
	    }
	}
}

const Nav = ({classes}) =>
	<div className={classes.nav}>
		<img src="assets/logo.png" className={classes.logo} />
		<ul className={classes.navList}>
			<li className={classes.navListItem}>
				<a className={classes.navListItemText}>Documentation</a>
			</li>
			<li className={classes.navListItem}>
				<a className={classes.navListItemText}>Editor</a>
			</li>
		</ul>
	</div>

export default injectSheet(styles)(Nav)

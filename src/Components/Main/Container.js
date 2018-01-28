import React, { Component } from 'react'
import injectSheet from 'react-jss'
import {BrowserRouter as Router} from 'react-router-dom'

const styles = {
	'@global *': {
		padding: '0px',
		margin: '0px',
		'font-family': 'helvetica'
	},

	'@global body': {
		background: '#25333c',
		width: '100%',
		height: '100%',
		'box-sizing': 'border-box'
	},
}

const Container = ({children}) => (<Router>{children}</Router>)
	

export default injectSheet(styles)(Container)

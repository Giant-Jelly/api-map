import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Box from './Components/Box'
import HomePage from './Components/Pages/HomePage'
import {Route} from 'react-router-dom'
import Container from './Components/Main/Container'



class App extends Component {
	
	render() {
		return (
			<Container>
				<Route path="/" exact component={HomePage} />
			</Container>
		)
	}
}

export default App

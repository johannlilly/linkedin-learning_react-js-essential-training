import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

window.React = React

render(
	routes, 
	document.getElementById('react-container'))

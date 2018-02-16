import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

// Router wraps around two Route
// the history attribute listens to and logs changes in address bar
// Route 1 = renders app
// Route 2 = renders anything else
// If you go to any route except home, render error
render(
	<Router history={hashHistory} >
		<Route path="/" component={App} />
		<Route path="*" component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)
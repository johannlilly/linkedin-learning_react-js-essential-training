import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React


render(
	<SkiDayCount backcountry={false} />, 
	document.getElementById('react-container')
)








render(
	<SkiDayList days="[]"/>,
	document.getElementById('react-container')
)
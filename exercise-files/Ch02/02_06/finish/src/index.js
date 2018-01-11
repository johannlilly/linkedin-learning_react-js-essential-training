import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')
)
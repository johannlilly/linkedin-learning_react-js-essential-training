import React from 'react'
import text from './titles.json'

export const hello = (
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'purple', color: 'yellow'}}>
		{text.hello}
	</h1>
)

export const goodbye = (
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'yellow', color: 'purple'}}>
		{text.goodbye}
	</h1>
)
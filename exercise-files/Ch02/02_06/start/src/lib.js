// import data from titles.json and display it in a couple of components

// remember, react was installed using npm
// here, you are importing the React component as an object from the react package library
import React from 'react'
// store the json file in the object "text"
import text from './titles.json'

export const hello = (
	<h1 id='title'
		className='header'
		style={
			{
				backgroundColor: 'purple',
				color: 'yellow'
			}
		}
		>
		{text.hello}
	</h1>
)

export const goodbye = (
	<h1 id='title'
		className='header'
		style={
			{
				backgroundColor: 'yellow',
				color: 'purple'
			}
		}
		>
		{text.goodbye}
	</h1>
)
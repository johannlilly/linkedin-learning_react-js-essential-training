import React from 'react'
import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

// the goal is to make less HTTP requests
// we can bundle requests for CSS
// remove inline styles
// use class names

// add loaders to webpack.config.js to transpile SCSS

// npm install autoprefixer-loader@3.2.0 --save-dev
// npm install css-loader@0.25.0 --save-dev
// npm install sass-loader@4.0.2 --save-dev
// npm install node-sass@3.10.1 --save-dev
// sudo npm install --unsafe-perm node-sass@4.7.2
// npm install style-loader@0.13.1 --save-dev


export const hello = (
	<h1 id='title'
		className='hello'>
		{text.hello}
	</h1>
)

export const goodbye = (
	<h1 id='title'
		className='goodbye'>
		{text.goodbye}
	</h1>
)
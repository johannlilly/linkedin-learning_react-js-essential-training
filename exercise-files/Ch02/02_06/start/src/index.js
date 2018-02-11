import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

// the render function comes from ReactDOM
// curly braces are used if you would like to import a non-default export
// using curly brackets is a "named import"
// it only works if what you import contains a named export with the name you specify
// you’re importing a specific thing by its export name
// finish by adding a corresponding named export to what you imported, using the same name you specified

// npm install react@15.3.2 --save
// npm install react-dom@15.3.2 --save
// npm install json-loader@0.5.4 --save-dev

// installing react and react-dom via npm means you can remove them from the index.html file.

render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')
)
const { render } = ReactDOM

// we can use modular bundles like webpack to handle some of the transpiling work for us

// npm install webpack@1.13.3 --save-dev
// npm install babel-loader@6.2.5 --save-dev
// npm install webpack-dev-server@1.16.2 --save-dev
//
// sudo npm install -g webpack@1.13.3
// OR
// ./node_modules/.bin/webpack
// 
// webpack

// change package.json "scripts" to "start": "./node_modules/.bin/webpack-dev-server"

// npm start

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	HEY WORLD!!!	
	</h1>,
	document.getElementById('react-container')
)
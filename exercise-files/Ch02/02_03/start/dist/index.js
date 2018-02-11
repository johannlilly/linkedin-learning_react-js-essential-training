const { render } = ReactDOM

// JSX is not natively supported by the browser.
// We can use JSX thorugh a transpiler, Babel.
// In-browser transpiler requires Version 5.
// https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello World	
	</h1>,
	document.getElementById('react-container')
)
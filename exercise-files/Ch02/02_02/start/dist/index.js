const { render } = ReactDOM

// create a style element
// don't forget to call it on the title element
const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

// style = a JSX expression (JavaScript as XML)
// use JSX to replace the createElement call
render(
	<h1 id='title'
		className='header'
		style={style}>
	Hello World
	</h1>,
	document.getElementById('react-container')
)
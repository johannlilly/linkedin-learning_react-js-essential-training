const { render } = ReactDOM


const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

// using inline style instead of a style element
// nest the style object in a JSX expression
render(
	<h1 id='title'
		className='header'
		style={
			{
				backgroundColor: 'orange',
				color: 'white',
				fontFamily: 'verdana'
			}
		}>
	Hello World
	</h1>,
	document.getElementById('react-container')
)
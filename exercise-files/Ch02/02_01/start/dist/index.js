// "declarative"
// describe which methods we are using as part of these passages, making our function calls shorter
const { createElement } = React
const { render } = ReactDOM

// create a style element
// don't forget to call it on the title element
const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

// create first react element
// createElement takes 3 arguments (tag, element properties, child content)
const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World' 
)

// render the element
// ReactDOM takes 2 arguments: element to render, where to render in the DOM
render(
	title,
	document.getElementById('react-container')
)
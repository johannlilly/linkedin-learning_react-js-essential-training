'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

// cd /
// npm init
// npm install babel-cli@6.18.0 --save-dev
// sudo npm install -g babel-cli
// echo {'presets': ['latest', 'react', 'stage-0']} > .babelrc
// npm install babel-preset-react@6.16.0 --save-dev
// npm install babel-preset-latest@6.16.0 --save-dev
// npm install babel-preset-stage-0@6.16.0 --save-dev
// babel ./src/index.js --out-file ./dist/bundle.js


// type in the details for the new package
// this creates a package.json file
// install babel-cli to dev dependencies
// manipulate folder structure to have /src and /dist
// place the javascript files that are to be transpiled into the /src folder
// transpiling creates browser-friendly files in the /dist folder
// create file ".bablerc" in root / , where you list everything you want Babel to transpile

// 'presets': ['latest', 'react', 'stage-0']
// Runs babel on:
// 'latest' = all ES features
// 'react' = all JSX
// 'stage-0' = everything proposed as an ES feature

render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
	'Hello World'
), document.getElementById('react-container'));

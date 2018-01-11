import React from 'react'
import { render } from 'react-dom'
// import routes from './routes'
import { Member } from './components/ui/Member'

window.React = React

render(
	<Member admin={true}
            name="Edna Welch"
            email="edna.welch88@example.com"
            thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
            makeAdmin={(email) => console.log(email)}/>, 
	document.getElementById('react-container'))

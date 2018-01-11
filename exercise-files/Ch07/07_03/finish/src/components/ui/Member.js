import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'gray'
  	}
  }	

  render() {

	const { name, thumbnail, email, admin, makeAdmin } = this.props
    return (
        <div className="member" style={this.style}>
        	<h1>{name} {(admin) ? <FaShield /> : null}</h1>
        	<a onClick={makeAdmin}>Make Admin</a>
        	<img src={thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>

        </div>
    )
}
}

export default Member
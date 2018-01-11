import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'gray'
  	}
  }	

  componentWillUpdate(nextProps) {
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.admin !== nextProps.admin
  }

  render() {

	const { name, thumbnail, email, admin, 
          makeAdmin, removeAdmin } = this.props
    return (
        <div className="member" style={this.style}>
        	<h1>{name} {(admin) ? <FaShield /> : null}</h1>
          {(admin) ? 
            <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
            <a onClick={() => makeAdmin(email)}>Make Admin</a>
          }

        	
        	<img src={thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>

        </div>
    )
}
}

export default Member





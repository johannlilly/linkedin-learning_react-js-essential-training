import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'gray'
  	}
  }

  // componentWillUpdate is invoked immediately before rendering when new props or state are being received.
  // set style
  componentWillUpdate(nextProps) {
    this.style = {
      // if there are nextProps for admin, set background to green, else, purple
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

  // lifecycle method that performs a logical test to make sure the component should update
  // Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.
  // The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
  // shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true.
  // This method is not called for the initial render or when forceUpdate() is used.
  shouldComponentUpdate(nextProps) {
    return this.props.admin !== nextProps.admin
  }

  render() {

	const { name, thumbnail, email, admin, makeAdmin, removeAdmin } = this.props
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
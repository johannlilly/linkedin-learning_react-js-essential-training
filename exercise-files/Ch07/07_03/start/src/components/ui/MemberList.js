import { Component } from 'react'
// fetch connects to the randomuser.me API
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [],
            // set state variable
            // trigger with fetch
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        // send API route
        fetch('http://api.randomuser.me/?nat=US&results=12')
            // .then() is a function of fetch() that we will use to turn response into json
            .then(response => response.json())
            // take the json response and look for the key, 'results'
            // this is part of the fetch API
            .then(json => json.results)
            // use the results to set state
            .then(members => this.setState({
                // reset members
                members, // same as members: members, or members: true, but we have object-literal enhancements in ES6
                loading: false
            }))
    }

    render() {
        // add loading to state because we have destructured it
    	const { members, loading } = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>

                {(loading) ?
                    <span>loading...</span> :
                    <span>{members.length} members</span>
                }
                {/* if there are any members in state, map over them and create new members for each member in state */}
                {(members.length) ?
                    members.map(
                    	(member, i) => 
                    		<Member key={i} 
                    				name={member.name.first + ' ' + member.name.last}
                                    email={member.email}
                                    thumbnail={member.picture.thumbnail} />
                    	 ):
                    <span>Currently 0 members</span>
                }
            </div>
        )
    }
}

export default MemberList
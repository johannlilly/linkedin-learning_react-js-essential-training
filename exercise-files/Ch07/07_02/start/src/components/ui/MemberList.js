import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Member } from './Member'

class MemberList extends Component {
    constructor(props) {
        super(props)
        // members are listed here and held in state of MemberList
        this.state = {
            members: [
            {
                name: "Joe Wilson",
                email: "joe.wilson@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
            },
            {
                name: "Stacy Gardner",
                email: "stacy.gardner@example.com",
                thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
            },
            {
                name: "Billy Young",
                email: "billy.young@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
            }
          ]
        }
    }
    // take the data in MemberList and render a Member for each member held in state
    render() {
        // destructure members from state so syntax will be cleaner
        const { members } = this.state
        // send data as props to each member
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
                {member.map((data, i) =>
                    <Member key={i}
                            onClick={email => console.log(email)}
                               {...data}/>   
                    )}
            </div>
        )    
   }     
}

export default MemberList
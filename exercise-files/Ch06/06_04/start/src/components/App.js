import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}
	addDay(newDay) {
		this.setState({
			// use ES6 spread operator syntax
			// it takes all existing days held in state and pushes them into a new state object and adds the new day
			allSkiDays: [
				..this.state.allSkiDays,
				newDay
			]
		})
	}
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}
	render() {
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <SkiDayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	// pass onNewDay as a property on the AddDayForm
			 	<AddDayForm onNewDay={this.addDay}/> :
			 	<SkiDayList days={this.state.allSkiDays}
			 				filter={this.props.params.filter}/>				 
			}
					
			</div>
		)
	}
}





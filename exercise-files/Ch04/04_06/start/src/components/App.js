import { createClass } from 'react'

export const App = createClass({
	// initialize state as the default
	// use this state when app renders for the first time
	getInitialState() {
		// hold this data in state instead of in props
		return {
			allSkiDays: [
				{
					resort: "Squaw Valley",
					date: new Date("1/2/2016"),
					powder: true,
					backcountry: false
				},
				{
					resort: "Kirkwood",
					date: new Date("3/28/2016"),
					powder: false,
					backcountry: false
				},
				{
					resort: "Mt. Tallac",
					date: new Date("4/2/2016"),
					powder: false,
					backcountry: true
				}
			]
		}
	},
	render() {
		return(
			<div className="app">
				{this.state.allSkiDays[0]["resort"]}
			</div>
		)
	}
})
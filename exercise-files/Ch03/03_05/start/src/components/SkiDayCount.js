import React from 'react'
import '../stylesheets/ui.scss'

// import React from 'react'
// instead of importing React, we can be very declarative
// import { Component } from 'react'

// export const SkiDayCount = React.createClass({
// use class syntax instead
// can remove commas between methods
export class SkiDayCount extends Component{
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span>days</span>
				</div>
				<div>
					<span>
						{this.calcGoalProgress(
							this.props.total, 
							this.props.goal
						)}
					</span>
				</div>
			</div>
		)
	}
}
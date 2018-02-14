import { Component } from 'react'
import '../stylesheets/ui.scss'

// Stateless functional components
// a third way to create components is by using a function
// it takes property information and returns JSX elements

///	const MyComponent = (props) => (
///		<div>{props.title}</div>
///	)

// local methods are removed and put in their own function

// these methods were previously local
// they can be used within this component or set to work with any other
//
///	percentToDecimal(decimal) {
///		return ((decimal * 100) + '%')
///	}
///	calcGoalProgress(total, goal) {
///		return this.percentToDecimal(total/goal)
///	}
const percentToDecimal = (decimal) => {
	return ((decimal * 100) +  '%')
}
const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

// we pass property information to this function
// we can also destructure it

// export class SkiDayCount extends Component {
export const SkiDayCount = (props) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{props.total}</span>
			<span>days</span>
		</div>
		<div className="powder-days">
			<span>{props.powder}</span>
			<span>days</span>
		</div>
		<div className="backcountry-days">
			<span>{props.backcountry}</span>
			<span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(
					props.total, 
					props.goal
				)}
			</span>
		</div>
	</div>
)
/// import { Component } from 'react'
// we're no longer using Component from React
import '../stylesheets/ui.scss'

// Stateless functional components
// a third way to create components is by using a function
// it takes property information and returns JSX elements
// typically, use stateless components whenever possible


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
// instead of using the entire object, we can specify the object keys we are going to use.

// export class SkiDayCount extends Component {
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{total}</span>
			<span>days</span>
		</div>
		<div className="powder-days">
			<span>{powder}</span>
			<span>days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry}</span>
			<span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(
					total, 
					goal
				)}
			</span>
		</div>
	</div>
)
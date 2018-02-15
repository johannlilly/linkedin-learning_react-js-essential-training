import { createClass, PropTypes} from 'react'
// use PropTypes with intention to destructure from react
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

// when setting up prop types, you don't just need to use numbers
// you can set them to array, function, bool, etc.
export const SkiDayCount = createClass({
  propTypes: {
    // total: React.PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number
  }
  getDefaultProps() {
    return {
      total: 50,
      powder: 50, 
      backcountry: 15, 
      goal: 100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <Terrain />
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
})
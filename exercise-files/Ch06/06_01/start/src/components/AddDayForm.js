import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const = { resort, date, powder, backcountry } = this.props

		return (
			<form className="add-day-form">
				<label htmlFor="resort">Resort Name</label>
				<input 
					id="resort"
					type="text"
					required
					defaultValue={resort}
				/>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					type="date"
					required
					defaultValue={date}
				/>
				<div>
					<label htmlFor="powder">Powder Day</label>
					<input
						id="powder"
						type="checkbox"
						required
						defaultChecked={powder}
					/>
				</div>
				<div>
					<label htmlFor="backcountry">Backcountry Day</label>
					<input
						id="backcountry"
						type="checkbox"
						required
						defaultChecked={backcountry}
					/>
				</div>
			</form>
		)
	}
}

// populate data from default props
AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}

// collect data
AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
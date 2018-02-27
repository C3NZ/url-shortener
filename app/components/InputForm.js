var React = require('react');

export class InputForm extends React.Component {
	render(){
		return (
		<form>
			<label>Link to shorten or expand</label>
			<input className="form-control" type="text"/>
		</form>
		)
	}
}
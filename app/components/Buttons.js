var React = require('react');

export class ShortenButton extends React.Component {
	render(){
		return <button className="btn btn-primary" onClick={this.props.onclick}>Shorten URL</button>
	}
}

export class ExpandButton extends React.Component {
	render(){
		return <button className="btn btn-primary" onClick={this.props.onclick}>Expand URL</button>
	}
}
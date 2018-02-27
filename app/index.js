const React = require('react');
const ReactDOM = require('react-dom');

import {InputForm} from './components/InputForm';
import {ShortenButton, ExpandButton} from './components/Buttons';

//default app styling
let app_style = {
	textAlign:'center'
}

//Button styling
let button_style = {
	paddingTop:'10px'
}

//Main app
class App extends React.Component {
	constructor(props){
		super(props);
		this.shortenURL = this.shortenURL.bind(this);
		this.expandURL = this.expandURL.bind(this);
		this.state = {
			outputURL:'You have not used either button yet'
		}
	}

	shortenURL(){
		console.log('button has been binded to shorten url');
	}

	expandURL(){
		console.log('button has been binded to expand url');
	}

	render(){
		return (
		<div className="container" style={app_style}>
			<div className="row">
				<div className="col">
					<InputForm />
				</div>
			</div>

			<div className="row" style={button_style}>
				<div className="col">
					<ShortenButton onclick={this.shortenURL}/>
				</div>
				<div className="col">
					<ExpandButton onclick={this.expandURL}/>
				</div>
			</div>
			
		</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
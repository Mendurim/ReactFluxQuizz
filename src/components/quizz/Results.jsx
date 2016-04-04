import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 

class Results extends Component{
	render(){

		return(
			
			<div className="well">
				<h4>You got {this.props.score} out of this {this.props.questions.length} Correct </h4>
				<h1>{percent}% - {message}</h1>
				<hr />
			    <a href="/app">Take Again</a>
			</div>
		)
	}
}
export default Results
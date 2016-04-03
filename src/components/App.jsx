import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import QuestionList from './quizz/QuestionList.jsx';
class App extends Component{
	constructor(props){
		super(props); 
		this.state = {
			questions: [
				{
					id: 1, 
					text: 'What is your name?', 
					choices: [
						{
							id: 'a', 
							text: 'Michael'
						},
						{
							id: 'b', 
							text: 'John'
						},
						{
							id: 'c', 
							text: 'Steven'
						}
					], 
					correct: 'b'
				}, 

				{
					id: 2, 
					text: 'What is your surname?', 
					choices: [
						{
							id: 'a', 
							text: 'Omgu'
						},
						{
							id: 'b', 
							text: 'Kamaro'
						},
						{
							id: 'c', 
							text: 'Selun'
						}
					], 
					correct: 'b'
				},

				{
					id: 3, 
					text: 'What is your birth dicty?', 
					choices: [
						{
							id: 'a', 
							text: 'Osaka'
						},
						{
							id: 'b', 
							text: 'Kilimanjaro'
						},
						{
							id: 'c', 
							text: 'Steven'
						}
					], 
					correct: 'b'
				},

				{
					id: 1, 
					text: 'What is your name?', 
					choices: [
						{
							id: 'a', 
							text: 'Michael'
						},
						{
							id: 'b', 
							text: 'John'
						},
						{
							id: 'c', 
							text: 'Gilan'
						}
					], 
					correct: 'c'
				},

			], 
			score: 0, 
			current: 1 
		}
	}

	setCurrent(current){
		this.setState({current}); 
	}

	setScore(score){
		this.setScore({score}); 
	}

	render(){
		return(
			<div>
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
			</div>
		)
	}
}

export default App
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './App.css';


const HomePage = (props) => {
	console.log(props)
	return(
		<div>
			<button onClick={() => props.history.push('/topics')}>Topics</button>
			<h1>homepage</h1>
		</div>
	);
};

const TopicList = (props) => {
	console.log(props);
	return(
		<div>
			<h1>Topic List</h1>
			<Link to={`${props.match.url}/13`} >To Topic 13</Link>
			<Link to={`${props.match.url}/17`} >To Topic 17</Link>
			<Link to={`${props.match.url}/21`} >To Topic 21</Link>
		</div>
	);
};

const TopicDetail = (props) => {
	console.log(props)
	const {topicId } = useParams();
	
	return(
		<div>
			<h1>Topic Detail - {topicId} {props.match.params.topicId}</h1>
		</div>
	);
};

function App() {
  return (
    <div>
			<Switch>
				<Route exact path='/' component={HomePage} />
      	<Route exact path='/topics' component={TopicList} />
      	<Route path='/topics/:topicId' component={TopicDetail} />
			</Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

  return (
    <div className="col-5">
      {[...Array(numberOfStars).keys()].map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
};

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
};

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
      	<span key={i}>{number}</span>
      )}
    </div>
  );
};

const Numbers = (props) => {
	const numberClassName = (number) => {
		if (props.selectedNumbers.indexOf(number) >= 0) {
    	return 'selected';
    }  	
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
};

Numbers.list =[...Array(10).keys()];

class Game extends React.Component {
	state = {
    selectedNumbers: [],
  };
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
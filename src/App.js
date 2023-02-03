import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://url.com/user', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      firstName: '',
      lastName: '',
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>My 2nd Form in React</p>
          <form
            onSubmit={() => {
              this.handleSubmit();
            }}
          >
            <input
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)}
            ></input>
            <input
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e)}
            ></input>
            <input type='submit'></input>
          </form>
        </header>
      </div>
    );
  }
}

export default App;

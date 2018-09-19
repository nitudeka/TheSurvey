import React, { Component } from 'react';
import './App.css';
import UserAccount from '../pages/UserAccount/UserAccount';

class App extends Component {  
  state = {
    userAccount: {
      name: 'John Doe',
      email: 'john@gmail.com'
    }
  }

  userAccountEditHandler = (userData) => { // userData is an object
    this.setState({userAccount: userData});
  }
  
  render() {
    return (
      <div className="App">
        <UserAccount
          editUser={this.userAccountEditHandler}
          name={this.state.userAccount.name}
          email={this.state.userAccount.email}
        />
      </div>
    );
  }
}

export default App;

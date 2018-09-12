import React from 'react';
import './UserAccount.css';
import Svg from './svg';
import Form from './Form/Form';

class UserAccount extends React.Component {
  state = {
    edit: false
  }

  editChangeHandler = () => {
    this.setState({edit: !this.state.edit});
  }
  
  render () {
    return (
      <div className='account'>
        <span className='account__name'>
          Welcome, <span className='account__username'>{this.props.name}</span>
        </span>
        <div className='account__container'>
          <div className='account__content'>
            <h2 className='account__header'>
              <Svg name='user' className='account__user-svg' height='60' />
              <span className='account__header--heading'>Personal Info</span>
              <div style={{display: !this.state.edit ? 'block' : 'none'}} onClick={this.editChangeHandler} className='account__edit-button'>
                <Svg className='account__edit-svg account__user-svg' name='edit' height='50' />
              </div>
            </h2>
            {
              !this.state.edit ?
              <div className='account__input-div'>
                <span className='account__info'>
                  <Svg name='user' className='account__info-svg' height='20' />
                  Username: {this.props.name}
                </span>
                <span className='account__info'>
                  <Svg name='envelope' className='account__info-svg' height='20' />
                  Email: {this.props.email}
                </span>
              </div>
              :
              <div className='account__form'>
                <Form edit={this.editChangeHandler} />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount;

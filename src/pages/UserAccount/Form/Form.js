import React, { Component } from 'react';
import Input from './Input/Input';
import FormValidation from './FormValidation';
import './Form.css';
import Svg from '../svg';

class Form extends Component {
  state = {
    form: {
      name: {
        label: 'Your name',
        type: 'text',
        placeholder: 'Your name',
        value: '',
        validation: {
          required: true
        },
        svg: 'user', // defines which svg to use
        valid: false,
        focused: false
      },
      email: {
        label: 'Your email',
        type: 'text',
        placeholder: 'Your email',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        svg: 'envelope', // defines which svg to use
        valid: false,
        focused: false
      },
      password: {
        label: 'Your new password',
        type: 'password',
        placeholder: 'Your new password (min 6)',
        value: '',
        validation: {
          required: true,
          minLength: 6,
          password: true
        },
        svg: 'lock', // defines which svg to use
        valid: false,
        focused: false
      },
      repeatPassword: {
        label: 'Repeat your password',
        type: 'password',
        placeholder: 'Repeat your password',
        value: '',
        validation: {
          required: true,
          minLength: 6,
          repeatPassword: true
        },
        svg: 'lock', // defines which svg to use
        valid: false,
        focused: false
      }
    },
    errorMessage: null,
    formIsValid: false
  }

  // Handles the form button submit event
  onButtonSubmit = () => {
    this.props.edit();
  }

  // Handles the on change input event
  onInputChange = (event, element) => {
    const updatedState = {...this.state.form};
    const updatedElement = {...updatedState[element]};
    updatedElement.value = event.target.value;
    updatedElement.focused = true;
    updatedElement.valid = FormValidation(event.target.value, updatedElement.validation);
    updatedState[element] = updatedElement;
    let formIsValid = true;
    Object.keys(updatedState).map(elements => {
      return formIsValid = updatedState[elements].valid && formIsValid;
    })
    this.setState({form: updatedState, formIsValid: formIsValid});
  }
  
  render () {
    const form = Object.keys(this.state.form).map(element => {
      return (
        <div key={element} className='form__input-div'>
          <Svg name={this.state.form[element].svg} className='form__svg account__info-svg' height='20' />
          <Input
            valid={this.state.form[element].valid}
            focused={this.state.form[element].focused}
            placeholder={this.state.form[element].placeholder}
            type={this.state.form[element].type}
            label={this.state.form[element].label}
            onChange={(event) => this.onInputChange(event, element)}
          />
        </div>
      )
    })
    
    return (
      <div className='form-container'>
        <div className='form'>
          {form}
          <button disabled={!this.state.formIsValid} className='form__button' onClick={this.onButtonSubmit}>Update</button>
        </div>
      </div>
    )
  }
}

export default Form;

/* modules */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

/* components */
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

/* actions */
import { signUpStart } from '../../redux/user/user.actions'

/* styles */
import './sign-up.styles.scss'
import { user } from '../../interfaces/user'

interface SignUpProps {
  signUpStart: Function
}

export const SignUp = ({ signUpStart }: SignUpProps): JSX.Element => {
  const [userCreds, setCred] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { displayName, email, password, confirmPassword } = userCreds

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = (event: any): void => {
    const { name, value } = event.target
    setCred({ ...userCreds, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  signUpStart: (userCreds: user) => dispatch(signUpStart(userCreds))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUp)

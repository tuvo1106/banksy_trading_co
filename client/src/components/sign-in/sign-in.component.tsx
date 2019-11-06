/* modules */
import React, { useState } from 'react'
import { connect } from 'react-redux'

/* components */
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

/* actions */
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions'

/* styles */
import './sign-in.styles.scss'

interface SignInProps {
  googleSignInStart: (event: any) => void
  emailSignInStart: Function
}

export const SignIn = ({
  googleSignInStart,
  emailSignInStart
}: SignInProps): JSX.Element => {
  const [userCreds, setCreds] = useState({
    email: '',
    password: ''
  })
  const { email, password } = userCreds

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (event: any): void => {
    const { value, name } = event.target
    setCreds({ ...userCreds, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google Sign-In
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn)

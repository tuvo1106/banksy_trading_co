import React, { useState } from "react"
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions"
import "./sign-in.styles.scss"

interface SignInProps {
  googleSignInStart: any
  emailSignInStart: any
}

const SignIn = ({ googleSignInStart, emailSignInStart }: SignInProps) => {
  const [userCreds, setCreds] = useState({
    email: "",
    password: ""
  })
  const { email, password } = userCreds

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (event: any): void => {
    const { value, name } = event.target
    setCreds({ ...userCreds, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          value={email}
          handleChange={handleChange}
          required></FormInput>
        <FormInput
          name='password'
          type='password'
          label='password'
          value={password}
          handleChange={handleChange}
          required></FormInput>
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn>
            Google Sign-In
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: any, password: any) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn)

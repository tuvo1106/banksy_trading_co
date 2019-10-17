import React, { useState } from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

import "./sign-in.styles.scss"

const SignIn = () => {
  const [userCreds, setCreds] = useState({
    email: "",
    password: ""
  })
  const { email, password } = userCreds

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCreds({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Google Sign-In
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn

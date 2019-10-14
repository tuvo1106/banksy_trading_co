import React, { Component } from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

import "./sign-in.styles.scss"

class SignIn extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async (event: any) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event: any): void => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required></FormInput>
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
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
}

export default SignIn

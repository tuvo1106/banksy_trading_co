import React, { useState, useEffect } from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import "./sign-up.styles.scss"

const SignUp = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [userCreds, setCred] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const { displayName, email, password, confirmPassword } = userCreds

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault()
    setIsMounted(true)
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      if (isMounted) {
        setCred({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event: any): void => {
    const { name, value } = event.target
    setCred({ ...userCreds, [name]: value })
  }

  useEffect(() => {
    return () => setIsMounted(false)
  }, [])

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

export default SignUp

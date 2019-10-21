/* modules */
import React from "react"

/* components */
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

/* styles */
import "./sign-in-and-sign-up.styles.scss"

const signInAndSignUpPage = (): JSX.Element => (
  <div className='sign-in-and-sign-up'>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
)

export default signInAndSignUpPage

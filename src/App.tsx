import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./App.css"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout/checkout.component"

import Header from "./components/header/header.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"

interface AppProps {
  setCurrentUser: any
  currentUser: any
}

interface AppState {}

class App extends Component<AppProps, AppState> {
  unsubscribeFromAuth: any = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // listen for changes on Firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        if (userAuth) {
          const userRef: any = await createUserProfileDocument(userAuth, null)
          userRef.onSnapshot((snapshot: any) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        } else {
          setCurrentUser(userAuth)
        }
      }
    )
  }

  // close connection
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

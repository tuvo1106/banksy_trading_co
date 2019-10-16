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

import { category } from "./interfaces/category"

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocs
} from "./firebase/firebase.utils"

import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors"

import { user } from "./interfaces/user"
import { state } from "./interfaces/state"

interface AppProps {
  setCurrentUser: (user: user) => state
  currentUser: user | null
  collectionsArray: category[]
}

interface AppState {}

class App extends Component<AppProps, AppState> {
  unsubscribeFromAuth: Function | null = null
  load_firebase: boolean = false

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props
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
        if (this.load_firebase) {
          addCollectionAndDocs(
            "collections",
            collectionsArray.map(({ title, items }) => ({ title, items }))
          )
        }
      }
    )
  }

  // close connection
  componentWillUnmount() {
    if (this.unsubscribeFromAuth !== null) this.unsubscribeFromAuth()
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
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch: Function) => ({
  setCurrentUser: (user: user): state => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

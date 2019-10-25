import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.scss'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

import { user } from './interfaces/user'

interface AppProps {
  checkUserSession: Function
  currentUser: user | null
}

const App = ({ checkUserSession, currentUser }: AppProps) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
      <Footer></Footer>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch: Function) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

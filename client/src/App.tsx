/* modules */
import React, { useEffect, lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

/* components */
import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import Spinner from "./components/spinner/spinner.component"

/* actions */
import { checkUserSession } from "./redux/user/user.actions"

/* selectors */
import { selectCurrentUser } from "./redux/user/user.selector"

/* interfaces */
import { user } from "./interfaces/user"

/* styles */
import "./App.scss"

const HomePage = lazy(() => import("./pages/homepage/homepage.component"))
const ShopPage = lazy(() => import("./pages/shop/shop.component"))
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
)
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))

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
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Suspense>
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

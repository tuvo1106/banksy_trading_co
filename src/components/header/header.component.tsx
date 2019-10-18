import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selector"
import { ReactComponent as Logo } from "../../assets/icon.svg"
import { signOutStart } from "../../redux/user/user.actions"

import "./header.styles.scss"
import { user } from "../../interfaces/user"

interface HeaderProps {
  currentUser: user | null
  hidden: boolean
  signOutStart: any
}

const Header = ({
  currentUser,
  hidden,
  signOutStart
}: HeaderProps): JSX.Element => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={signOutStart}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch: any) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

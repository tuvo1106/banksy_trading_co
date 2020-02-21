/* modules */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

/* components */
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

/* selectors */
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

/* actions */
import { signOutStart } from '../../redux/user/user.actions'

/* interfaces */
import { user } from '../../interfaces/user'

/* styles */
import './header.styles.scss'

interface HeaderProps {
  currentUser: user | null
  hidden: boolean
  signOutStart: (event: any) => void
}

export const Header = ({
  currentUser,
  hidden,
  signOutStart
}: HeaderProps): JSX.Element => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src="/banksy_tr.png" alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
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

const mapDispatchToProps = (dispatch: Function) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

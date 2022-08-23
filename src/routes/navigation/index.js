import {Outlet} from "react-router-dom"
import {Fragment, useContext} from "react"
import {useSelector} from "react-redux"

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/cartIcon"
import CartDropdown from "../../components/cartDropdown"

import {CartContext} from "../../contexts/cart"
import {selectCurrentUser} from "../../store/user/userSelector"

import {signOutUser} from "../../utils/firebase"

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from "../../styles/navigation"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ):(
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation

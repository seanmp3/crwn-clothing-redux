import {useContext} from "react"
import {useNavigate} from "react-router-dom"

import {CartContext} from "../../contexts/cart/index"

import Button from "../button/index"
import CartItem from "../cartItem/index"

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from "../../styles/cartDropdown"

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown

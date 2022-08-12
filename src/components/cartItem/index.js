import {CartItemContainer, ItemDetails} from "../../styles/cartItem.js"

const CartItem = ({cartItem}) => {
  const {imageUrl, price, name, quantity} = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem

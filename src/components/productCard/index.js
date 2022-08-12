import {useContext} from "react"
import {CartContext} from "../../contexts/cart/index"

import Button, {BUTTON_TYPE_CLASSES} from "../button/index"

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "../../styles/productCard.js"

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <br/>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard

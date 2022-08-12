import {useContext, useState, useEffect, Fragment} from "react"
import {useParams} from "react-router-dom"

import ProductCard from "../productCard/index"

import {CategoriesContext} from "../../contexts/categories/index"

import {
  CategoryContainer,
  Title
} from "../../styles/category.js"

const Category = () => {
  const {category} = useParams()
  const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category

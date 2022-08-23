import {useState, useEffect, Fragment} from "react"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

import ProductCard from "../productCard/index"

import {selectCategoriesMap} from "../../store/categories/categoriesSelector"

import {
  CategoryContainer,
  Title
} from "../../styles/category.js"

const Category = () => {
  const {category} = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
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

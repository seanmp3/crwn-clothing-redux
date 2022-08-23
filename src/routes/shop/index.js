import {useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import {useDispatch} from "react-redux"

import CategoriesPreview from "../categoriesPreview/index"
import Category from "../../components/category/index"
import {getCategoriesAndDocuments} from "../../utils/firebase"
import {setCategoriesMap} from "../../store/categories/categoriesAction"

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }

    getCategoriesMap()
  }, [dispatch])

  return(
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop

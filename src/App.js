import {useEffect} from "react"
import {useDispatch} from "react-redux/es/exports"
import {Routes, Route} from "react-router-dom"

import {
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from "./utils/firebase"

import Home from "./routes/home/index"
import Shop from "./routes/shop/index"
import Authentication from "./routes/authentication/index"
import Navigation from "./routes/navigation/index"
import Checkout from "./routes/checkout/index"
import {setCurrentUser} from "./store/user/userAction"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if(user){
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App

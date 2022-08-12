import SignInForm from "../../components/signInForm/index"
import SignUpForm from "../../components/signUpForm/index"

import {AuthenticationContainer} from "../../styles/authentication.js"

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication

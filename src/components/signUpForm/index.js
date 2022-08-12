import {useState} from "react"

import FormInput from "../formInput/index"
import Button from "../button/index"

import {
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth
} from "../../utils/firebase"

import {SignUpContainer} from "../../styles/signUpForm.js"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(password !== confirmPassword){
      alert("passwords do not match")
      return
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
      )

      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
    }catch(err){
      if(err.code === "auth/email-already-in-use"){
        alert("Cannot create user, email already in use")
      }else{
        console.log("user creation encountered an error", err)
      }
    }
  }

  return(
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName} 
        />

        <FormInput
          label="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email}
        />

        <FormInput
          label="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm

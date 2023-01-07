import React from "react"
import background from "../../../assets/images/background.jpg"

//Scss
import "../../../assets/scss/Authenticate/_index.scss"

import RegisterForm from "../../../components/form/LoginForm/RegisterForm"

export default function Register() {
  return (
    <div className="register">
      <img src={background} alt="background" className="background" />
      <div className="register-form">
        <RegisterForm />
      </div>
    </div>
  )
}

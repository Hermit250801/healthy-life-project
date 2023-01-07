import React from "react"
import background from "../../../assets/images/background.jpg"

//Scss
import "../../../assets/scss/Authenticate/_index.scss"

import LoginForm from "../../../components/form/LoginForm/LoginForm"

const Login: React.FC = (): React.ReactElement => {
  return (
    <div className="login">
      <img src={background} alt="background" className="background" />
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login

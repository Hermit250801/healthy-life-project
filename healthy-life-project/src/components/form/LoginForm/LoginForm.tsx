import React, { useEffect, useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import { useForm, Controller } from "react-hook-form"
import { Link } from "react-router-dom"

//Import types
import { UserLoginFormSubmit } from "../../../utils/type"

//Import validationSchema
import { yupResolver } from "@hookform/resolvers/yup"
import { validationLogin } from "../../../utils/validationSchema"
import * as Yup from "yup"

//Import image
import Logo from "../../../assets/images/healthy-picture.jpg"

import GoogleButton from "react-google-button"
import { GoogleAuth } from "../../../utils/context/GoogleAuthContext"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<UserLoginFormSubmit>({
    mode: "onSubmit",
    resolver: yupResolver<Yup.AnyObjectSchema>(validationLogin),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = (data: UserLoginFormSubmit) => {
    console.log("Form data: ", data)
  }

  const { googleSignIn, user } = GoogleAuth()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-login-wrapper">
        <header className="form-header">
          <h1 className="form-header-title">Chào mừng bạn đến với healthy life website!</h1>
          <div className="form-header-desc">Chúng tôi rất hào hứng khi bạn trở lại!</div>
        </header>

        <div className="form-body">
          <div>
            <img src={Logo} alt="logo" className="logo-img" />
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <FormGroup className="w-100">
              <Label for="email" className="form-login-label">
                Email address <span className="text-danger mx-2">{(errors.email && errors.email.message) || "*"}</span>
              </Label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="text"
                    id="email"
                    className="form-login-input"
                    {...field}
                    invalid={errors.email && true}
                  />
                )}
              />
            </FormGroup>

            <FormGroup className="w-100">
              <Label for="password" className="form-login-label">
                Mật khẩu <span className="text-danger mx-2">{errors.password?.message || "*"}</span>
              </Label>

              <Controller
                control={control}
                name="password"
                render={({ field }) => <Input type="password" id="password" className="form-login-input" {...field} />}
              />

              <Link to={"/"} className="forgot-password">
                Quên mật khẩu?
              </Link>
            </FormGroup>

            <Button type="submit" className="w-100 btn-submit">
              Đăng nhập
            </Button>
            <span className="new-account">Hoặc</span>
            <GoogleButton className="w-100" onClick={handleGoogleSignIn} />
            <span className="mt-2 d-block new-account">
              Cần tạo một tài khoản?{" "}
              <Link to="/register" className="forgot-password">
                Đăng kí
              </Link>
            </span>
          </Form>
        </div>
      </div>
    </div>
  )
}

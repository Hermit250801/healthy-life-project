import React, { useEffect, useState } from "react"
import { Button, Form, FormGroup, Label, Input, DropdownMenu, DropdownItem } from "reactstrap"
import { useForm, Controller } from "react-hook-form"

//Import types
import { UserRegisterFormSubmit } from "../../../utils/type"

//Import validationSchema
import { yupResolver } from "@hookform/resolvers/yup"
import { validationRegister } from "../../../utils/validationSchema"
import * as Yup from "yup"

//import date picker
import ReactDatePicker from "react-datepicker"

function RegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<UserRegisterFormSubmit>({
    mode: "onSubmit",
    resolver: yupResolver<Yup.AnyObjectSchema>(validationRegister),
    defaultValues: { email: "", password: "", username: "", birthday: "" },
  })

  const onSubmit = (data: UserRegisterFormSubmit) => {
    console.log("Form data: ", data)
  }
  return (
    <div className="form-wrapper">
      <div className="form-register-wrapper">
        <header className="form-header">
          <h1 className="form-header-title">Tạo tài khoản!</h1>
        </header>

        <div className="form-body">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email" className="form-register-label">
                Email <span className="text-danger mx-2">{(errors.email && errors.email.message) || "*"}</span>
              </Label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="text"
                    id="email"
                    className="form-register-input"
                    {...field}
                    invalid={(errors.email && true) || false}
                  />
                )}
              />
            </FormGroup>

            <FormGroup>
              <Label for="username" className="form-register-label">
                Tên đăng nhập <span className="text-danger mx-2">{(errors.email && errors.email.message) || "*"}</span>
              </Label>
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <Input
                    type="text"
                    id="username"
                    className="form-register-input"
                    {...field}
                    invalid={errors.email && true}
                  />
                )}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password" className="form-register-label">
                Mật khẩu <span className="text-danger mx-2">{errors.password?.message || "*"}</span>
              </Label>

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input type="password" id="password" className="form-register-input" {...field} />
                )}
              />
            </FormGroup>

            <FormGroup>
              <Label for="birthday" className="form-register-label">
                Ngày sinh <span className="text-danger mx-2">{errors.birthday?.message || "*"}</span>
              </Label>

              <Controller
                name="birthday"
                control={control}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                render={({ onChange, value }) => (
                  <ReactDatePicker
                    selected={value}
                    onChange={onChange}
                    className="form-register-input w-100"
                    placeholderText="Chọn ngày sinh"
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
            </FormGroup>

            <Button type="submit" className="w-100 btn-submit">
              Đăng kí
            </Button>
            <span className="mt-2 d-block new-account">
              <a href="/login" className="forgot-password">
                Đã có tài khoản?
              </a>
            </span>

            <div>
              <p className="policy">
                Để hiểu thêm về website bạn đồng ý về{" "}
                <a href="https://discord.com/terms" className="policy-link">
                  điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="https://discord.com/privacy" className="policy-link">
                  chính sách
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm

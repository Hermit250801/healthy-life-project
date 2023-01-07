import * as Yup from "yup"

export const validationLogin = Yup.object().shape({
  email: Yup.string().required("Email bắt buộc nhập").email("Email không đúng"),
  password: Yup.string().required("Mật khẩu bắt buộc nhập").min(6, "Mật khẩu ít nhất 6 kí tự"),
})

export const validationRegister = Yup.object().shape({
  email: Yup.string().required("Email bắt buộc nhập").email("Email bắt buộc nhập"),
  password: Yup.string().required("Mật khẩu bắt buộc nhập").min(6, "Mật khẩu ít nhất 6 kí tự"),
  username: Yup.string().required("Tên đăng nhập bắt buộc nhập"),
  birthday: Yup.string().required("Sinh nhật bắt buộc chọn"),
})

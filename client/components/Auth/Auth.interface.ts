export interface ILoginForm {
  email: string
  password: string
}

export interface IRegistrationForm extends ILoginForm {
  fullName: string
}

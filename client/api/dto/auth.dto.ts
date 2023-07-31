export interface LoginFormDTO {
  email: string
  password: string
}

export interface AuthResponseDTO {
  token: string
}

export interface RegisterFormDTO extends LoginFormDTO {
  fullName: string
}

export interface IUser {
  id: number
  email: string
  password: string
  fullName: string
}

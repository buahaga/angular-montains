export class LoginModel {
  email: string;
  password: string;
}

export class AuthorisedModel {
  expiration: number;
  token: string;
  login: LoginModel;
}

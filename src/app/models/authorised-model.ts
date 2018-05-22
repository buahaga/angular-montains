import { LoginModel } from './login-model';

export class AuthorisedModel {
  expiration: number;
  token: string;
  login: LoginModel;
}

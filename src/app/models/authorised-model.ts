import { LoginModel } from './login-model';

export class AuthorisedModel {
  user: string;
  expiration: number;
  token: string;
  login: LoginModel;
}

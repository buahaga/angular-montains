import { LoginModel } from './login';

export class AuthorisedModel {
  user: string;
  expiration: number;
  token: string;
  login: LoginModel;
}

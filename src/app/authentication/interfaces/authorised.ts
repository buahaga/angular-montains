import { LoginModel } from './login';

export interface AuthorisedModel {
  user: string;
  expiration: number;
  token: string;
  login: LoginModel;
}

import { LoginModel } from './login';

export interface AuthorisedModel {
  user: string;
  token: string;
  login: LoginModel;
}

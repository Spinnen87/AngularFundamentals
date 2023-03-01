import {User} from "./user";

export interface LoginResult {
  successful: boolean;
  result: string,
  user: Omit<User, 'password'>
}

export interface RegisterResult{
  successful: boolean,
  result: string
}

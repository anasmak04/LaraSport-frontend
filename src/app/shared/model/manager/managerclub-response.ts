import { User } from "../user/user";

export interface ManagerResponse {
  message: String;
  managers: User[];
}

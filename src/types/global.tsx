import { Dispatch, SetStateAction } from "react";

export interface UserState {
  userName: string;
  password: string;
}
// 定义上下文值的类型
export interface UserContextType {
  user: UserState | null;
  setUser: Dispatch<SetStateAction<UserState | null>>;
}

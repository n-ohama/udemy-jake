import { atom } from "recoil";
import { User } from "../types/User";

type LoginUserTyp = User & { isAdmin: boolean };

export const LoginState = atom<LoginUserTyp | null>({
  key: "LoginState",
  default: null,
});

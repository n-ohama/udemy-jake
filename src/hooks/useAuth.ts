import axios from "axios";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import { useMessage } from "./useMessage";
import { LoginState } from "../global/state";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const setLoginUser = useSetRecoilState(LoginState);
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [navigate, showMessage, setLoginUser]
  );

  return { login, loading };
};

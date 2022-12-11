import axios from "axios"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";

export const useLogin = () => {
    
    // const [isLogin, setHasLogin] = useState(false);
    const [isLogin, setLogin] = useRecoilState(loginState);

    const login = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`,{
                email: 'test@example.com',
                password: '123456'
              }).then(response => {
                alert("ログインしました。")
                setLogin(true);
            }).catch((e) => {
                alert(e)
            }).finally(() => {

            })
        });
    }
    return {login,isLogin}
}
import axios from "axios"
import { useState } from "react";

export const useLogin = () => {
    
    const [isLogin, setHasLogin] = useState(false);

    const login = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/login`).then(response => {
                setHasLogin(true);
            }).catch(() => {
            alert('エラー')
            }).finally(() => {

            })
        });
    }
    return {login,isLogin}
}
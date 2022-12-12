import axios from "axios"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

type Error = {
    target: string,
    message: string
}
export const useLogin = () => {
    
    const navigate = useNavigate()
    const [isLogin, setLogin] = useRecoilState<boolean>(loginState);
    const [isLoading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<Error>({target:"", message:""})

    const login = (email: string, password: string) => {
 
        //validation
        if(validator(setErrorMessage, emailValidation(email),'email')) return 
        if(validator(setErrorMessage, passwordlValidation(password),'password')) return 

        setLoading(true)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`,{
                email: email,
                password: password
              }).then(response => {
                // alert("ログインしました。")
                setLogin(true);
                navigate('/home')
            }).catch((e) => {
                alert(e)
                console.log(e.response.data.errors)
                setErrorMessage(e.response?.status)
            }).finally(() => {
                setLoading(false)
            })
        });
    }
    return {login,isLoading,errorMessage}
}

const emailValidation = (email: string) => {
    if(email == "") return "メールアドレスが入力されていません。";
    if(!/\S+@\S+\.\S+/.test(email)) return "メールアドレスの形式が正しくありません。"
    return ""
}
const passwordlValidation = (password: string) => {
    if(password == "") return "パスワードが入力されていません。";
    return ""
}

const validator = (setState:  (value: React.SetStateAction<Error>) => void, value: any, target: string) => {
    if(value){
        setState({target:target, message:value})
    }
    
    //errorがあればtrue
    return isEmpty(value) ? false : true; 
}
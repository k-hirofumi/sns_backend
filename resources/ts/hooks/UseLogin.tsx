import axios from "axios"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { validator } from "../Utils/Validator";
import { Login, LOGIN_INPUT } from "../model/input/Login";
import { staffInfoState } from "../globalStates/staffInfoStateAtom";


export const useLogin = () => {
    
    const navigate = useNavigate()
    const [isLogin, setLogin] = useRecoilState<boolean>(loginState);
    const [staff,setStaff] = useRecoilState(staffInfoState);
    const [isLoading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({target:"", message:""})

    const login = (props: Login) => {
        const {email, password} = props;
 
        //バリデーション
        const valid: Login = {
            email: ["required","email"],
            password: ["required"]
        }
        if(validator(setErrorMessage, valid, props)) return ;


        setLoading(true)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`,{
                email: email,
                password: password
            }).then(response => {
                setLogin(true);
                setStaff(response.data as Staff)
                navigate('/home')
            }).catch((e) => {
                switch (e.response?.status) {
                    case 420: //バリデーションエラー
                        if(e.response.data.email ?? null) setErrorMessage({target: LOGIN_INPUT.EMAIL, message: e.response.data.email[0]})
                        if(e.response.data.password ?? null) setErrorMessage({target: LOGIN_INPUT.PASSWORD, message: e.response.data.password[0]})
                        break;
                    case 430: //ログイン情報間違い
                    case 520: //ログインエラー
                        setErrorMessage({target: "", message: e.response.data.error})
                        break;
                    default:
                        setErrorMessage({target: "", message: "ログインに失敗しました。再度お試しください"})
                        break;
                }
            }).finally(() => {
                setLoading(false)
            })
        });
    }
    return {login,isLoading,errorMessage}
}



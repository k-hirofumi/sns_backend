import { Button } from "@chakra-ui/react"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/UseLogin"
import { useLogout } from "../hooks/UseLogout";
import { useStoreAcount } from "../hooks/UseStoreAccount";

export const Login = () => {
    const navigate = useNavigate()

    const {storeAccount} = useStoreAcount();
    const onstoreAccount = () => {
        storeAccount();
    }

    const {login, isLogin} = useLogin();
    const onLogin = () => {
        login();
    }
    const {logout} = useLogout();
    const onLogout = () => {
        logout();
    }

    // const onUser = () => {
    //     axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user`
    //     ).then(response => {
    //         alert(response.data)
    //         console.log(response.data)
    //     }).catch((e: AxiosError) => {
    //         alert(e.response?.status)
    //     }).finally(() => {
    //     })
    // }

    return (
        <>
            <Button onClick={onstoreAccount}>登録</Button>
            <Button onClick={onLogin}>ログイン</Button>
            <Button onClick={onLogout}>ログアウト</Button>

            {/* <Button onClick={onUser}>onUser</Button> */}

            <Button onClick={()=>{navigate('/home')}} bg="teal.200">to_home</Button>
        </>
    )
}
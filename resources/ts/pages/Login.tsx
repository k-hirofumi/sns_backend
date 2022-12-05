import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useLogin } from "../hooks/UseLogin"

export const Login = () => {
    const {login, isLogin} = useLogin();
    const onLogin = () => {
        login();
    }
    

    return (
        <>
            <Button onClick={onLogin}>ログイン</Button>
        </>
    )
}
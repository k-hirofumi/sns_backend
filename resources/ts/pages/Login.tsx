import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useLogin } from "../hooks/UseLogin"
import { useLogout } from "../hooks/UseLogout";
import { useStoreAcount } from "../hooks/UseStoreAccount";

export const Login = () => {
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

    const onUser = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user`
        ).then(response => {
            alert(response.data)
        }).catch((e) => {
            alert(e)
        }).finally(() => {
        })
    }

    return (
        <>
            <Button onClick={onstoreAccount}>登録</Button>
            <Button onClick={onLogin}>ログイン</Button>
            <Button onClick={onLogout}>ログアウト</Button>

            <Button onClick={onUser}>onUser</Button>
        </>
    )
}
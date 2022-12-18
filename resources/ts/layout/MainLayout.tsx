import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";
import { useGetStaff } from "../hooks/loggedIn/UseGetStaff";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar"

export const MainLayout = () => {
    //ログイン状態を判定
    const [isLogin, setLogin] = useRecoilState(loginState);
    const {getStaff,isLoading} = useGetStaff()
    useEffect(()=>{
        if(!isLogin) {
            getStaff()
            setLogin(true)
        } 
    })
    
    return (
        <>
            {isLogin || !isLoading
                ?
                <>
                    <Header />
                    <Sidebar >
                        <Outlet/>
                    </Sidebar>
                </>
                : 
                <Flex align="center" justify="center" height="100vh">
                    <Spinner />
                </Flex>

            }
        </>
    )
}
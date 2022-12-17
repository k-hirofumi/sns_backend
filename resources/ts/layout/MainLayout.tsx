import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar"

export const MainLayout = () => {
    //ログイン状態を判定
    const navigate = useNavigate()
    const [isLogin] = useRecoilState(loginState);
    useEffect(()=>{
        !isLogin && navigate('/')
    })
    
    return (
        <>
            {isLogin 
                ?
                <>
                    <Header />
                    <Sidebar >
                        <Outlet/>
                    </Sidebar>
                </>

                : 
                <div></div>

            }
        </>
    )
}
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";
import { Sidebar } from "./Sidebar"

export const MainLayout = () => {
    const navigate = useNavigate()
    const [isLogin] = useRecoilState(loginState);
    useEffect(()=>{
        !isLogin && navigate('/')
    })
    
    return (
        <>
            {isLogin 
                ?
                <Sidebar >
                    <Outlet/>
                </Sidebar>
                : 
                <div></div>

            }
        </>
    )
}
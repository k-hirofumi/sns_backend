import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { loginState } from "../globalStates/loginStateAtom"
import { useGetUser } from "../hooks/loggedIn/UseGetUser"


export const Home = () => {
    const navigate = useNavigate()
    const {getUser,isLoading, user} = useGetUser();
    useEffect(()=>{
        getUser()
    },[])

    return (
        <>
            {isLoading 
                ? <div>loading</div> 
                : 
                <div>
                    <p>aaaa</p>
                    <p>{import.meta.env.VITE_API_BASE_URL}</p>
                    <p>{user?.email}</p>
                </div>
            }
        </>
    )
}
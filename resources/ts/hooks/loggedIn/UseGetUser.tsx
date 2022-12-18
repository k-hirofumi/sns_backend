import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { loginState } from "../../globalStates/loginStateAtom";
import { userState } from "../../globalStates/userInfoStateAtom";

export const useGetUser = () => {
    const [user,setUser] = useRecoilState(userState);
    const [isLoading, setLoading] = useState<boolean>(true);
    // const [user, setUser] = useState<User>();
    const navigate = useNavigate()

    const getUser = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user`
        ).then(response => {
            setLoading(false)
            setUser(response.data)
        }).catch((e) => {
            e.response?.status == 401 && navigate('/')
        }).finally(() => {

        })
    }
    return {getUser,isLoading,user}
}
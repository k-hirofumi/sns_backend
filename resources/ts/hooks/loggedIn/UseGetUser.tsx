import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { loginState } from "../../globalStates/loginStateAtom";
type User = {
    staff_id: String,
    staff_created_at: String,
    staff_updated_at: String,
    staff_deleted_at: String,
    name: String,
    email: String,
    email_verified_at: String,
    password: String
}
export const useGetUser = () => {
    
    const [isLoading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>();
    const navigate = useNavigate()

    const getUser = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user`
        ).then(response => {
            alert(response.data)
            setLoading(false)
            setUser(response.data)
        }).catch((e) => {
            e.response?.status == 401 && navigate('/')
        }).finally(() => {

        })
    }
    return {getUser,isLoading,user}
}
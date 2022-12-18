import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { staffInfoState } from "../../globalStates/staffInfoStateAtom";

export const useGetStaff = () => {
    const [staff,setStaff] = useRecoilState(staffInfoState);
    const [isLoading, setLoading] = useState<boolean>(true);
    // const [user, setUser] = useState<User>();
    const navigate = useNavigate()

    const getStaff = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/staff`
        ).then(response => {
            setStaff(response.data)
        }).catch((e) => {
            // e.response?.status == 401 && 
            navigate('/')

        }).finally(() => {
            setLoading(false)
        })
    }
    return {getStaff,isLoading,staff}
}
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../globalStates/loginStateAtom";



export const useLogout = () => {
    const [isLogin, setLogin] = useRecoilState<boolean>(loginState);
    const navigate = useNavigate();

    const logout = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/logout`
        ).then(response => {
            setLogin(false)
            navigate("/")
        }).catch((e) => {
            alert(e)
        }).finally(() => {
        })
    }
    
    return {logout}
}
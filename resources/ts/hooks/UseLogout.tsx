import axios from "axios";

export const useLogout = () => {
    const logout = () => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/logout`
        ).then(response => {
            alert(response.data)
        }).catch((e) => {
            alert(e)
        }).finally(() => {
        })
    }
    
    return {logout}
}
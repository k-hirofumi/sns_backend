import axios from "axios";

export const useStoreAcount = () => {
    const storeAccount = () => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/store`,{
            name: 'test2',
            email: 'test2@example.com',
            password: '999999'
        }).then(response => {
            alert(response.data)
        }).catch((e) => {
            alert(e)
        }).finally(() => {
        })
    }
    
    return {storeAccount}
}
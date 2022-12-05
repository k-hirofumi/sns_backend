import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <p>aaaa</p>
                <p>{import.meta.env.VITE_API_BASE_URL}</p>
                <Button onClick={()=>{navigate('/login')}} bg="teal.200">to_login</Button>
            </div>
        </>
    )
}
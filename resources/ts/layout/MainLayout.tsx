import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const MainLayout = () => {
    return (
        <>
            <Sidebar >
                <Outlet/>
            </Sidebar>
                
        </>
    )
}
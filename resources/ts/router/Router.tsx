import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/" element={<MainLayout />} > */}
                
                
                {/* <Route path="invader" element={<GameLayout />} >
                    <Route index element={<Game1 />} />
                    <Route path="result" element={<Result />} />
                </Route> */}
{/* 
                <Route path="GamePre1" element={<GamePre1 />} />
                <Route path="result" element={<Result />} />
                <Route path="practice" element={<Practice />} /> */}
            {/* </Route> */}
            <Route path="/" element={<MainLayout />} >
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
        
    )
}
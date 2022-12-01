import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                {/* <Route path="invader" element={<GameLayout />} >
                    <Route index element={<Game1 />} />
                    <Route path="result" element={<Result />} />
                </Route> */}
{/* 
                <Route path="GamePre1" element={<GamePre1 />} />
                <Route path="result" element={<Result />} />
                <Route path="practice" element={<Practice />} /> */}
            </Route>

        </Routes>
    )
}
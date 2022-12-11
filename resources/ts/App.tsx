import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { atom, RecoilRoot } from "recoil";
import { Router } from "./router/Router";

export function App() {
    return (
        <RecoilRoot>
            <ChakraProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ChakraProvider>
        </RecoilRoot>
    )
}
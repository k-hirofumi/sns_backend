import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ChakraProvider>
    )
}
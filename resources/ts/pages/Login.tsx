import { Box, Button, Center, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Spacer, Stack } from "@chakra-ui/react"
import axios, { AxiosError } from "axios"
import { isEmpty } from "lodash";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/UseLogin"
import { useLogout } from "../hooks/UseLogout";
import { useStoreAcount } from "../hooks/UseStoreAccount";

export const Login = () => {


    // const {storeAccount} = useStoreAcount();
    // const onstoreAccount = () => {
    //     storeAccount();
    // }

    // const {login, islo} = useLogin();
    // const onLogin = () => {
    //     login();
    // // }

    // const {logout} = useLogout();
    // const onLogout = () => {
    //     logout();
    // }


    const [password, setPassword] = useState("");
    const { login, isLoading, errorMessage } = useLogin()
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onClickLogin = () => {
        login(email ,password);
    }


    const [email, setEmail] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    
    return (
        <>
            {/* <Button onClick={onstoreAccount}>登録</Button> */}

            {/* <Button onClick={onLogout}>ログアウト</Button> */}
            {/* <Box mt="20">
                <Box w={400} h={300} p="10" m="auto" textAlign="center" bg="gray.100" border="1px" borderRadius="2xl">
                    
                    <Button colorScheme="linkedin" onClick={onLogin}>ログイン</Button>
                </Box>
            </Box> */}
            <Flex align="center" justify="center" height="100vh">
                <Box bg="teal.100" w="sm" p={4} borderRadius="md" shadow="md">
                    <Heading as="h1" size="lg" textAlign="center">ログイン</Heading>
                    <Divider my={4} />
                    <Stack spacing={4} py={4} px={10}>
                        <FormControl bg="white" isInvalid={!isEmpty(errorMessage) && errorMessage.target == "email"}>
                            <Input placeholder="メールアドレス" type='email' value={email} onChange={onChangeEmail} />
                        </FormControl>
                        <FormControl bg="white" isInvalid={!isEmpty(errorMessage) && errorMessage.target == "password"}>
                            <Input placeholder="パスワード" value={password} onChange={onChangePassword} />
                        </FormControl>
                        {errorMessage ? (
                            <Box color="red"> {errorMessage.message}</Box>
                            ) : (
                                 <></>
                            )}

                        <Button colorScheme='yellow' isLoading={isLoading} onClick={onClickLogin}>ログイン</Button>
                    </Stack>
                </Box>
            </Flex>
            {/* <Button onClick={()=>{navigate('/home')}} bg="teal.200">to_home</Button> */}
        </>
    )
}
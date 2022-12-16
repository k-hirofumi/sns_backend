import { Box, Button, Center, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Spacer, Stack } from "@chakra-ui/react"
import axios, { AxiosError } from "axios"
import { isEmpty } from "lodash";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/UseLogin"
import { useLogout } from "../hooks/UseLogout";
import { useStoreAcount } from "../hooks/UseStoreAccount";
import { LOGIN_INPUT } from "../model/input/Login";

export const Login = () => {

    const { login, isLoading, errorMessage } = useLogin()
    const onClickLogin = () => {
        login({email ,password});
    }

    const [password, setPassword] = useState("");
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const [email, setEmail] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    
    return (
        <>
            <Flex align="center" justify="center" height="100vh">
                <Box bg="teal.100" w="sm" p={4} borderRadius="md" shadow="md">
                    <Heading as="h1" size="lg" textAlign="center">ログイン</Heading>
                    <Divider my={4} />
                    <Stack spacing={4} py={4} px={10}>
                        <FormControl bg="white" isInvalid={!isEmpty(errorMessage) && errorMessage.target == LOGIN_INPUT.EMAIL}>
                            <Input placeholder="メールアドレス" type='email' value={email} onChange={onChangeEmail} />
                        </FormControl>
                        <FormControl bg="white" isInvalid={!isEmpty(errorMessage) && errorMessage.target == LOGIN_INPUT.PASSWORD}>
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
        </>
    )
}
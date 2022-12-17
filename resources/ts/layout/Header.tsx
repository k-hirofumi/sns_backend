import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { BsPersonBadge } from "react-icons/bs"
import { staffInfoState } from '../globalStates/staffInfoStateAtom';
import { useRecoilState } from 'recoil';

export function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const [staff] = useRecoilState(staffInfoState);
    const onLogout = () => {

    }

    return (
        <header >
            <Box >
                <Flex
                    pos={"sticky"}
                    // bg={useColorModeValue('white', 'gray.800')}
                    bg="teal.100"
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    {/* <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex> */}
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Icon
                            mr="4"
                            fontSize="30"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={BsPersonBadge}
                        />
                    </Flex>
                        <Text
                            p={2}
                            fontSize={'sm'}
                            fontWeight={500}
                            color="black"
                            >
                            ログインアカウント：{staff.name + '<' + staff.email + '>'}
                        </Text>

                        <Button colorScheme='red' onClick={onLogout}>
                            ログアウト
                        </Button>
                </Flex>
            </Box>
        </header>
    );
}

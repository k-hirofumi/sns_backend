import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    // Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';
import { AiOutlineHome } from "react-icons/ai"
import { HiAnnotation } from "react-icons/hi"
import { HiOutlineCursorClick } from "react-icons/hi"
import { BsPersonCircle } from "react-icons/bs"
import { TbPacman } from "react-icons/tb"
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
    name: string;
    icon: IconType;
    link: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'ホーム', icon: AiOutlineHome, link: "/home" },
    { name: 'スタッフ管理', icon: BsPersonCircle, link: "account" },
    { name: 'ユーザ管理', icon: BsPersonCircle, link: "user" },
    { name: '広告', icon: HiOutlineCursorClick, link: "HiAnnotation" },
    { name: 'お知らせ', icon: HiAnnotation, link: "HiAnnotation" },
];

export function Sidebar({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex minH="90vh" bg="white" >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'inline-block' }}
                id={"111111"}
                minW="200px"
            // display={"inline-block"}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Flex ml={{ base: 0, md: 10 }} p="4" id={"22222"} display={'inline-block'}>
                {children}
            </Flex>
        </Flex >
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            // bg={useColorModeValue('white', 'gray.900')}
            bg="gray.100"
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            // pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    THE.管理画面
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={link.link}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    link: string;
    children: ReactText;
}
const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
    return (
        // <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Link to={link} style={{ textDecoration: 'none' }} >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                {/* Logo */}
            </Text>
        </Flex>
    );
};
import { Box, Text, Image, Flex, Avatar, Divider, Center, Heading, Button } from '@chakra-ui/react'
import styles from "./MainMenu.module.css";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import firebase from '../firebase';
import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function MainMenu() {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)

    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
        navigate("/")

    };


    return (
        <Box position={"sticky"} top={"0px"} bgColor={"#273143"} w="270px" borderRadius={"20px"} >
            <Link to="/dashboard">
                <Box bgColor={"#273143"} pt="30px" w="270px" borderRadius={"15px"} className='logo' >
                    <Center>
                        <Box w="220px" h="50px" borderRadius={"10px"} bgColor={"white"}>
                            <Image
                                src={require('../Images/logo.png')}
                                alt="SchoolSync"
                                h="50px"
                                w="200px"
                                ml="10px"

                                objectFit="contain"
                            />
                        </Box>
                    </Center>
                </Box>
            </Link>


            <Box mt="30px">
                <Link to="/dashboard">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px">
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/dashboard3.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px' className="page">
                                    DASHBOARD
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/teachers">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/teachers2.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    TEACHERS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/students">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/graduate.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    STUDENTS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/announcement">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/announcement.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    ANNOUNCEMENTS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/assignments">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/paper.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    ASSIGNMENTS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/changepassword">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/lock.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    CHANGE PASSWORD
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Box>
                    <Image
                        src={require('../Images/kids.png')}
                        alt="SchoolSync"
                        h="180px"
                        w="250px"
                        bgColor={"#273143"}
                        borderRadius={"15px"}
                        objectFit="contain"
                    />
                </Box>

                <Center>
                    <Divider colorScheme="purple" w="240px" />
                </Center>
            </Box>

            <Center>
                <Box mt="20px" mb="30px" className='profile'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Heading size='sm' color='white'>{isAuth ? currentUser.name : ""}</Heading>
                            <Button mt="20px" bgColor={"white"} color='#263238' variant='solid' onClick={handleLogOut} >{isAuth ? "Logout" : "LogIn"}</Button>
                        </Box>
                    </Flex>
                </Box>
            </Center>
        </Box >
    )
}

export default MainMenu;
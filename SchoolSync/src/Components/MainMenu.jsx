import { Box, Text, Image, Flex, Avatar, Divider, Center, Heading, Button } from '@chakra-ui/react'
import styles from "./MainMenu.module.css";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import firebase from '../firebase';

function MainMenu() {

    const addItemToCollection = () => {
        // Access the Firestore collection
        const collectionRef = firebase.firestore().collection('users');

        // Create a new item object
        const newItem = {
            name: 'Example Item',
            description: 'This is an example item.',
            // Add more properties as needed
        };

        // Add the new item to the collection
        collectionRef
            .add(newItem)
            .then((docRef) => {
                console.log('Item added with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding item: ', error);
            });
    };


    return (
        <Box position={"sticky"} top={"0px"} bgColor={"#6B56F6"} w="270px" borderRadius={"20px"} >
            <Link to="/dashboard">
                <Box bgColor={"#6B56F6"} pt="30px" w="270px" borderRadius={"15px"} className='logo' >
                    <Image
                        src={require('../Images/SchoolSync3.png')}
                        alt="SchoolSync"
                        h="50px"
                        w="200px"
                        ml="20px"
                        borderRadius={"15px"}
                        objectFit="contain"
                    />
                </Box>
            </Link>


            <Box mt="30px">
                <Link to="/dashboard">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px">
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/dashboard.png')} />
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
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/teachers.png')} />
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
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/students.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    STUDENTS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/events">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/event.png')} />
                            <Box ml='4'>
                                <Text color={"white"} fontWeight='bold' fontSize='14px'>
                                    EVENTS
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link to="/assignments">
                    <Box className={styles.mainmenu}>
                        <Flex p="15px" >
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/event.png')} />
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
                            <Avatar ml="20px" size={"xs"} bgColor={"white"} src={require('../Images/event.png')} />
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
                        src={require('../Images/Picture.png')}
                        alt="SchoolSync"
                        h="180px"
                        w="250px"
                        bgColor={"#6B56F6"}
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
                            <Heading size='sm' color='purple.50'>Segun Adebayo</Heading>
                            <Button mt="20px" bgColor={"white"} color='purple.600' variant='solid' onClick={addItemToCollection} >Logout</Button>
                        </Box>
                    </Flex>
                </Box>
            </Center>
        </Box >
    )
}

export default MainMenu;
import MainMenu from "../Components/MainMenu";
import { Box, Flex, Center, Text, HStack, Avatar, Heading, Divider } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Holidays from "../Components/Holidays";
import { Authcontext } from "../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import DashboardAnnouncement from "../Components/DashboardAnnouncement";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Dashboard() {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchDataFromFirestore()
    }, [])


    const fetchDataFromFirestore = () => {

        const collectionRef = firebase.firestore().collection('admin');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUserData(fetchedData[0]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        return userData;
    };


    return (
        <Flex bgColor={"#F6F5FF"} >

            <Box bgColor={"#F6F5FF"} pb={"50px"}>
                <MainMenu />
            </Box>
            <Box  >
                <Box display={"flex"}>
                    <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }} >
                        <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > DASHBOARD   </Text>
                        <Text textAlign={"left"} color={"gray.500"} fontSize={"16px"} > Hi,{currentUser?.name ? currentUser?.name : "user"}! Welcome to SchoolSync Dashboard </Text>
                    </Box>

                    <Box pl="150px">
                        <Flex w={"250px"} gap='4' alignItems='center' flexWrap='wrap' mt={"20px"}  >
                            <Avatar bgColor={"#273143"} color={"white"} name={userData.name} />

                            <Box w={"150px"} >
                                <Heading textAlign={"left"} size='sm'>{userData.name}</Heading>
                                <Text textAlign={"left"} >Admin</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Divider colorScheme="purple" w="1243px" />
                <HStack>
                    <Box w={"820px"}  >
                        <Center>
                            <Box position={"absolute"} top={"100px"}>
                                <DashboardAnnouncement />
                            </Box>
                        </Center>
                    </Box>
                    <Box w={"400px"} mt={"40px"} >
                        <Center>
                            <Holidays />
                        </Center>
                    </Box>
                </HStack>
            </Box>

        </Flex>
    )
}

export default Dashboard;
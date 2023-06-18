import MainMenu from "../Components/MainMenu";
import { Box, Text, Stack, Card, CardBody, Heading, CardHeader, HStack, Flex, Center, Tooltip, IconButton } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Authcontext } from "../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Loading from "../Components/Loading";


function Announcement() {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDataFromFirestore = () => {

        setLoading(true)
        const collectionRef = firebase.firestore().collection('announcements');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(fetchedData);
                setLoading(false)

            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false)
            });

        return data;
    };

    useEffect(() => {
        fetchDataFromFirestore()

    }, [])

    return (
        <Flex >
            <Box bgColor={"#F6F5FF"} pb={"50px"}>
                <MainMenu />
            </Box>

            <Box bgColor={"#F6F5FF"} w="full" pb={"50px"}>

                <Box >
                    <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                        <Navbar />
                    </Box>

                    <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                        <Box>
                            <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > ANNOUNCEMENTS </Text>
                            <Text color={"gray.500"} fontSize={"16px"} > Hi,{currentUser?.name ? currentUser?.name : "user"}! Welcome to SchoolSync Dashboard </Text>
                        </Box>
                    </Flex>

                </Box>

                {/* <Center> */}
                <Box m="20px" w={{ base: '300px', sm: '250px', md: "500px", lg: "1000px" }} >
                    <Box>
                        {
                            loading ?

                                <Center>
                                    <Loading />
                                </Center>

                                :

                                <Stack spacing='4' display={"flex"} justifyContent={"flex-start"}>
                                    {
                                        data.map((el, index) => (

                                            <Card  >
                                                <CardHeader >
                                                    <HStack display={"flex"} justifyContent={"space-between"}>
                                                        <Heading textAlign={"left"} size='md'> {el?.title} </Heading>
                                                        <Text textAlign={"right"} > {el?.date} </Text>
                                                    </HStack>
                                                </CardHeader>
                                                <CardBody>
                                                    <Text textAlign="justify"> {el?.details} </Text>
                                                </CardBody>

                                            </Card>
                                        ))
                                    }

                                </Stack>

                        }
                    </Box>
                </Box >
                {/* </Center> */}
            </Box>
        </Flex >
    )
}

export default Announcement;
import MainMenu from "../Components/MainMenu";
import { Box, Text, Stack, Card, CardBody, Heading, CardHeader, HStack, Flex, Center, Tooltip, IconButton, Button, Divider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Authcontext } from "../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Loading from "../Components/Loading";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel, FormControl, Input
} from '@chakra-ui/react'


function Announcement() {

    const initData = {
        title: "",
        details: "",
        date: ""
    }


    const today = new Date();
    const formattedDate = today.toLocaleDateString();

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initData);
    // const [title, setTitle] = useState(initData.title)
    // const [details, setDetails] = useState(initData.details)

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

    function BasicUsage(name) {

        const { isOpen, onOpen, onClose } = useDisclosure()

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }

        console.log(formData)

        const handleSubmit = (e) => {
            e.preventDefault()

            if (formData.title && formData.details) {
                addDataToFirestore()
                setFormData(initData)
                alert(`Data added successfully`)
            } else {
                alert("Please fill all required details")
            }

        }

        const addDataToFirestore = () => {
            try {
                const collectionRef = firebase.firestore().collection('announcements');

                collectionRef.add({
                    ...formData,
                    date: formattedDate

                })
                    .then((docRef) => {
                        fetchDataFromFirestore()
                        console.log('Document added with ID: ', docRef.id);
                    })
                    .catch((error) => {
                        console.error('Error adding document: ', error);
                    });
            } catch (error) {
                console.error('Error accessing Firestore: ', error);
            }
        };



        return (
            <>
                <Button colorScheme="blue" onClick={onOpen}>{name}</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{"ADD DETAILS"}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            {
                                <Box >

                                    <FormControl isRequired mb="15px">
                                        <FormLabel>Title</FormLabel>
                                        <Input
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder='Title' />
                                    </FormControl>

                                    <FormControl isRequired mb="15px">
                                        <FormLabel>Details</FormLabel>
                                        <textarea
                                            style={{ border: "1px solid gray", width: "380px", borderRadius: "8px" }}
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            placeholder='Details' />
                                    </FormControl>

                                </Box>
                            }
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='green' variant={"solid"} mr={3} onClick={handleSubmit}>
                                Submit
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

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

                    <Divider colorScheme="purple" w="1243px" />

                    <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                        <Box>
                            <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > ANNOUNCEMENTS </Text>
                            <Text color={"gray.500"} fontSize={"16px"} > Hi,{currentUser?.name ? currentUser?.name : "user"}! Welcome to SchoolSync Dashboard </Text>
                        </Box>

                        {
                            currentUser?.role == "admin" ?
                                <Box>
                                    {BasicUsage("+ Add Announcement")}
                                </Box> : ""

                        }
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
import MainMenu from "../Components/MainMenu";
import { Box, Flex, Text, Divider, Button, FormLabel, FormControl, Input, SimpleGrid, Center } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import AddStudent1 from "../Components/AddStudent1";
import AddStudent2 from "../Components/AddStudent2";
import StudentsCard from "../Components/StudentsCard";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Authcontext } from "../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import Loading from "../Components/Loading";


function Students() {

    const initData = {
        email: "",
        birthDate: "",
        name: "",
        userId: "",
        phone: "",
        role: "student",
        address: "",
        password: "",
        class: "",
        gender: "",
        motherName: "",
        fatherName: ""
    }

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initData);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchDataFromFirestore()
    }, [])

    const fetchDataFromFirestore = () => {

        setLoading(true)
        const collectionRef = firebase.firestore().collection('students');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUserData(fetchedData);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false)
            });

        return userData;
    };


    const handleDelete = (key) => {
        deleteDataByKey(key);
    }

    const deleteDataByKey = (key) => {
        const collectionRef = firebase.firestore().collection('students');
        collectionRef
            .doc(key)
            .delete()
            .then(() => {
                console.log('Data successfully deleted!');
                alert("User successfully deleted!")
                fetchDataFromFirestore()
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    function BasicUsage(name) {

        const { isOpen, onOpen, onClose } = useDisclosure()

        const handleStep = (val) => {
            setStep(step + val)
        }

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }

        console.log(formData)

        const handleSubmit = (e) => {
            e.preventDefault()

            if (formData.email && formData.motherName && formData.birthDate && formData.name && formData.phone && formData.fatherName && formData.address && formData.class && formData.gender) {
                addDataToFirestore()
                setFormData(initData)
                alert(`Data added successfully`)
            } else {
                alert("Please fill all required details")
            }

        }

        const addDataToFirestore = () => {
            try {
                const collectionRef = firebase.firestore().collection('students');
                let id = formData.name.split(" ")

                collectionRef.add({
                    ...formData,
                    userId: Math.floor(Math.random() * 1000000) + id[0],
                    password: Date.now() + Math.floor(Math.random() * 100) + ""
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

        console.log("userData", userData)

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
                                step == 1 ? <AddStudent1 formData={formData} handleChange={handleChange} step={step} handleStep={handleStep} /> :
                                    <AddStudent2 handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} step={step} handleStep={handleStep} />
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
        <Flex>

            <Box bgColor={"#F6F5FF"} pb={"50px"}>
                <MainMenu />
            </Box>
            <Box bgColor={"#F6F5FF"} w="full" pb={"50px"} >
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
                <Divider colorScheme="purple" w="1243px" />
                <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > STUDENTS </Text>
                        <Text color={"gray.500"} fontSize={"16px"} > Hi,{currentUser?.name ? currentUser?.name : "user"}! Welcome to SchoolSync Dashboard </Text>
                    </Box>

                    {
                        currentUser?.role == "admin" ?
                            <Box>
                                {BasicUsage("+ Add New Admission")}
                            </Box> : ""

                    }

                </Flex>
                <Box>
                    {
                        loading ?
                            < Center>
                                <Loading />
                            </Center>
                            :
                            <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)', md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} ml="20px" >
                                {
                                    userData.map((item, index) => (
                                        <StudentsCard handleDelete={handleDelete} key={index} data={item}></StudentsCard>
                                    ))
                                }
                            </SimpleGrid>
                    }

                </Box>
            </Box>

        </Flex>
    )
}

export default Students;
import MainMenu from "../Components/MainMenu";
import { Box, Flex, Text, Divider, Button, SimpleGrid, FormControl, Input } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import AddTeacher1 from "../Components/AddTeacher1";
import AddTeacher2 from "../Components/AddTeacher2";
import TeachersCard from "../Components/TeachersCard";
import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from "react";
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

function Teachers() {

    const initData = {
        email: "",
        education: "",
        birthDate: "",
        name: "",
        userId: "",
        phone: "",
        role: "teacher",
        subject: "",
        address: "",
        password: "",
        class: "",
        gender: ""
    }

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initData);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        fetchDataFromFirestore()
    }, [])

    const fetchDataFromFirestore = () => {

        const collectionRef = firebase.firestore().collection('teachers');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUserData(fetchedData);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        return userData;
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

            if (formData.email && formData.education && formData.birthDate && formData.name && formData.phone && formData.subject && formData.address && formData.class && formData.gender) {
                addDataToFirestore()
                setFormData(initData)
                alert("Data added successfully")
            } else {
                alert("Please fill all required details")
            }


        }

        const addDataToFirestore = () => {
            try {
                const collectionRef = firebase.firestore().collection('teachers');
                let id = formData.name.split(" ")

                collectionRef.add({
                    ...formData,
                    userId: Math.floor(Math.random() * 1000000) + id[0],
                    password: Date.now() + Math.floor(Math.random() * 100) + ""
                })
                    .then((docRef) => {
                        fetchDataFromFirestore()
                    })
                    .catch((error) => {
                        console.error('Error adding document: ', error);
                    });
            } catch (error) {
                console.error('Error accessing Firestore: ', error);
            }
        };




        console.log("teacher", userData)

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
                                step == 1 ? <AddTeacher1 formData={formData} handleChange={handleChange} step={step} handleStep={handleStep} /> :
                                    <AddTeacher2 handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} step={step} handleStep={handleStep} />
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
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
                <Divider colorScheme="purple" w="1243px" />
                <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > TEACHERS </Text>
                        <Text color={"gray.500"} fontSize={"16px"} > Hi,name! Welcome to SchoolSync Dashboard </Text>
                    </Box>
                    <Box>
                        {BasicUsage("+ Add New Teacher")}
                    </Box>
                </Flex>
                <Box>
                    <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)', md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} ml="20px" >
                        {
                            userData.map((item, index) => (
                                <TeachersCard key={index} data={item}></TeachersCard>
                            ))
                        }
                    </SimpleGrid>
                </Box>
            </Box>

        </Flex>
    )
}

export default Teachers;
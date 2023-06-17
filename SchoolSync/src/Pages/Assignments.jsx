import MainMenu from "../Components/MainMenu";
import { Box, Flex, Text } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import { Authcontext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import AssignmentStudent from "../Components/AssignmentStudent";
import AssignmentTeacher from "../Components/AssignmentTeacher";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function Assignments() {

    const initState = {
        assignment: "",
        name: "",
        userId: "",
        class: ""
    }

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const [formData, setFormData] = useState(initState)
    const [successful, setSuccessful] = useState(false)


    const addDataToFirestore = (data) => {
        try {
            const collectionRef = firebase.firestore().collection('assignments');

            collectionRef.add({
                ...formData,
                userId: currentUser.userId,
                name: currentUser.name,
                class: currentUser.class,
                assignment: data
            })
                .then((docRef) => {
                    console.log('Document added with ID: ', docRef.id);
                    setSuccessful(true)
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                });
        } catch (error) {
            console.error('Error accessing Firestore: ', error);
        }
    };

    const handleSubmit = (data) => {
        data ?
            addDataToFirestore(data) :
            alert("Please submit assignment")
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

                <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > ASSIGNMENTS </Text>
                        <Text color={"gray.500"} fontSize={"16px"} > Hi,name! Welcome to SchoolSync Dashboard </Text>
                    </Box>
                </Flex>

                <Box>{

                    currentUser && currentUser.role == "student" ?
                        <AssignmentStudent successful={successful} handleSubmit={handleSubmit} /> :
                        <AssignmentTeacher />
                }


                </Box>
            </Box>

        </Flex>
    )
}

export default Assignments;
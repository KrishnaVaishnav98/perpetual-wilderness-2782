import {
    Box, Flex, Image, Text, Center, FormControl,
    FormLabel, Input, Button, HStack, RadioGroup, Radio
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Context/AuthContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';

function LogIn() {

    let initData = {
        userId: "",
        password: "",
        role: ""
    }

    const [userId, setUserId] = useState("796103Sneha")
    const [password, setPassword] = useState("1686924168486")
    const [role, setRole] = useState("")
    const [data, setData] = useState({})
    const navigate = useNavigate();

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)

    const handleClick = () => {

        if (role) {

            const collectionRef = firebase.firestore().collection(role);
            collectionRef
                .where('userId', '==', userId)
                .get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const fetchedData = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setData(fetchedData[0]);
                        setCurrentUser(fetchedData[0])

                    } else {
                        alert('No User Found');
                        console.log('No matching documents');
                    }
                })
                .catch((error) => {
                    alert("Something went wrong. Please try again")
                    console.error('Error fetching documents: ', error);
                });
        } else {
            return alert("Please fill all details")
        }
    }

    console.log(currentUser)

    function setCurrentUser(userData) {
        if (password == userData.password) {
            logIn(userData)
            navigate("/dashboard")
        } else {
            alert("Password is incorrect")
        }
    }


    return (<>
        <Flex >

            <Box w={"650px"} h={"713px"} bgColor={"#E8EAF6"}>
                <Center>
                    <Box mt={"60px"} >
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
                </Center>

                <Box mt="30px">
                    <Text fontSize={"35px"} fontWeight={"bold"}>
                        Welcome to SchoolSync !!!
                    </Text>
                </Box>

                <Center>
                    <Box mt={"60px"} >
                        <Image
                            src={require('../Images/signIn2.png')}
                            alt="SchoolSync"
                            h="400px"
                            w="400px"
                            borderRadius={"15px"}
                            objectFit="contain"
                        />
                    </Box>
                </Center>
            </Box >

            <Center>
                <Box ml="200px" box-shadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} w={"400px"}>
                    <Text fontSize={"25px"} fontWeight={"bold"}>Login to SchoolSync</Text>
                    <br />
                    <FormControl isRequired >
                        <FormLabel>UserID</FormLabel>
                        <Input type='text' placeholder='UserID' value={userId} onChange={(e) => setUserId(e.target.value)} />
                        <br />
                        <br />

                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <br />
                        <br />


                    </FormControl>
                    <Center>
                        <Box display={"flex"} justifyContent={"space-evenly"}>
                            <label style={{ marginRight: "30px" }}>
                                <input
                                    type="radio"
                                    value="students"
                                    checked={role === "students"}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                Student
                            </label>

                            <label style={{ marginRight: "30px" }}>
                                <input
                                    type="radio"
                                    value="teachers"
                                    checked={role === "teachers"}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                Teacher
                            </label>

                            <label >
                                <input
                                    type="radio"
                                    value="admin"
                                    checked={role === "admin"}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                Admin
                            </label>
                        </Box>
                    </Center>

                    <br />
                    <br />
                    <Button colorScheme='blue' variant={"solid"} onClick={handleClick} >SUBMIT</Button>
                </Box>
            </Center>


        </Flex >

    </>)
}

export default LogIn;
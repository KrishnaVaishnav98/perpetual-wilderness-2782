import {
    Box, Flex, Image, Text, Center, FormControl,
    FormLabel, Input, Button, HStack, RadioGroup, Radio
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Context/AuthContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {

    let initData = {
        userId: "",
        password: "",
        role: ""
    }

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [role, setRole] = useState("")
    const [data, setData] = useState({})
    const navigate = useNavigate();

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)


    const handleChangePassword = () => {
        if (role && userId && password && newPassword) {
            const collectionRef = firebase.firestore().collection(role);

            collectionRef
                .where('userId', '==', userId)
                .get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const fetchedData = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        const userData = fetchedData[0];

                        if (password === userData.password) {
                            collectionRef
                                .doc(userData.id)
                                .update({ password: newPassword })
                                .then(() => {
                                    alert('Password updated successfully!');
                                    navigate("/")
                                })
                                .catch((error) => {
                                    console.error('Error updating password:', error);
                                    alert('Failed to update password. Please try again.');
                                });
                        } else {
                            alert('Old password is incorrect.');
                        }
                    } else {
                        alert('No user found.');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching documents:', error);
                    alert('Something went wrong. Please try again.');
                });
        } else {
            alert('Please fill in all details.');
        }
    };


    const handleClick = () => {

        handleChangePassword()
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
                    <Text fontSize={"25px"} fontWeight={"bold"}>Change Password </Text>
                    <br />
                    <FormControl isRequired >
                        <FormLabel>UserID</FormLabel>
                        <Input type='text' placeholder='UserID' value={userId} onChange={(e) => setUserId(e.target.value)} />
                        <br />
                        <br />

                        <FormLabel>Old Password</FormLabel>
                        <Input type='password' placeholder='Old Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <br />
                        <br />

                        <FormLabel>New Password</FormLabel>
                        <Input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

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

export default ChangePassword;
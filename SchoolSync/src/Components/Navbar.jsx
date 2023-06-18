import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Input, Box, InputGroup, InputLeftElement, HStack, Center, Avatar, Heading, Text } from '@chakra-ui/react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState, useEffect } from 'react';

function Navbar() {

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

    // console.log(userData)

    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"} color={"#273143"} bgColor={"#F6F5FF"}>
                <Box>
                    <Flex gap={"50px"} borderRadius={"5px"} bgColor={"#F6F5FF"}>
                        <InputGroup border={"#CFD8DC"}>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon color='#263238' />}
                            />
                            <Input w={{ base: "200px", sm: "100px", md: "400px", lg: "600px" }} type='text' placeholder='Search' bgColor={"white"} />
                        </InputGroup>
                    </Flex>
                </Box>

                {/* <Box>
                    <Flex w={"250px"} gap='4' alignItems='center' flexWrap='wrap' ml="420px" >
                        <Avatar bgColor={"#273143"} color={"white"} name={userData.name} />

                        <Box w={"150px"} >
                            <Heading textAlign={"left"} size='sm'>{userData.name}</Heading>
                            <Text textAlign={"left"} >Admin</Text>
                        </Box>
                    </Flex>
                </Box> */}
                <Box pl="350px">
                    <Flex w={"250px"} gap='4' alignItems='center' flexWrap='wrap' >
                        <Avatar bgColor={"#273143"} color={"white"} name={userData.name} />

                        <Box >
                            <Heading textAlign={"left"} size='sm'>{userData.name}</Heading>
                            <Text textAlign={"left"} >Admin</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Navbar;
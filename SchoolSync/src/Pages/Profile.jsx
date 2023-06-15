import MainMenu from "../Components/MainMenu";
import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, VStack, Image, Text } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useParams } from "react-router-dom";

function Profile() {

    const [profileData, setProfileData] = useState(null);
    const { id } = useParams()
    // console.log(id)


    useEffect(() => {
        const collectionRef = firebase.firestore().collection('teachers');

        collectionRef
            .doc(id)
            .get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    setProfileData({
                        id: docSnapshot.id,
                        ...docSnapshot.data(),
                    });
                } else {
                    console.log('Document does not exist');
                }
            })
            .catch((error) => {
                console.error('Error fetching document: ', error);
            });
    }, [id]);

    console.log("profileData", profileData)

    if (!profileData) {
        return <p>Loading...</p>;
    }
    return (
        <Flex >

            <Box>
                <MainMenu />
            </Box>
            <Box >
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
                <Box w={"370px"} >
                    <Card p="15px" border={"solid"} borderColor={"#EBEEFA"} borderWidth={"0.2px"}>
                        <CardHeader>
                            <Flex>
                                {
                                    profileData.gender == "male" ?
                                        <Image
                                            src={require('../Images/man.png')}
                                            h="60px"
                                            w="120px"
                                            alt="SchoolSync"
                                            objectFit="contain"
                                        /> :
                                        <Image
                                            src={require('../Images/woman.png')}
                                            alt="SchoolSync"
                                            h="60px"
                                            w="120px"
                                            borderRadius={"15px"}
                                            objectFit="contain"
                                        />
                                }
                                <VStack display={"flex"} alignItems={"flex-start"}>
                                    <Heading size='md'> {profileData.name}</Heading>
                                    <Text color={"red.600"}>Subject: {profileData.subject}</Text>
                                </VStack>
                            </Flex>

                        </CardHeader>
                        <CardBody>
                            <Text >Educational Qualification: {profileData.education} </Text>
                        </CardBody>

                        <Center >
                            <Button onClick={""}>View Profile</Button>
                        </Center>

                    </Card>

                </Box>

            </Box>

        </Flex>
    )
}

export default Profile
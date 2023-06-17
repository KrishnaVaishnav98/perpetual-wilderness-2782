import MainMenu from "../Components/MainMenu";
import { EmailIcon, PhoneIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Tooltip, Card, CardBody, CardHeader, Center, Flex, Heading, VStack, HStack, Image, Text, IconButton, CardFooter } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useParams, useNavigate } from "react-router-dom";

function ProfileStudent() {

    const [profileData, setProfileData] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate()
    // console.log(id)


    useEffect(() => {
        const collectionRef = firebase.firestore().collection('students');

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
                <Box ml={"30px"} w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }} >
                    <Card p="15px" border={"solid"} borderColor={"#EBEEFA"} borderWidth={"0.2px"}>
                        <CardHeader>
                            <Flex justifyContent={"space-around"}>
                                {
                                    profileData.gender == "male" ?
                                        <Image
                                            src={require('../Images/man.png')}
                                            h="120px"
                                            w="200px"
                                            alt="SchoolSync"
                                            objectFit="contain"
                                        /> :
                                        <Image
                                            src={require('../Images/woman.png')}
                                            alt="SchoolSync"
                                            h="120px"
                                            w="200px"
                                            borderRadius={"15px"}
                                            objectFit="contain"
                                        />
                                }

                                <VStack display={"flex"} alignItems={"flex-start"}>
                                    <Text fontSize={"40px"} mt="10px"> {profileData.name}</Text>
                                    <Center>
                                        <Text color={"red.600"} fontWeight={"bold"}>USER ID: {profileData.userId}</Text>
                                    </Center>
                                </VStack>


                                <Box display={"flex"} mt={"30px"} gap="15px">
                                    <Box display={"flex"} >
                                        <Tooltip label={profileData.email} fontSize='md' >
                                            <IconButton
                                                variant='outline'
                                                colorScheme='blue'
                                                aria-label='Send email'
                                                icon={<EmailIcon />}
                                            />
                                        </Tooltip>
                                    </Box>

                                    <Box display={"flex"}>
                                        <Tooltip label={profileData.phone} fontSize='md'>
                                            <IconButton
                                                variant='outline'
                                                colorScheme='blue'
                                                aria-label='Call Sage'
                                                fontSize='20px'
                                                icon={<PhoneIcon />}
                                            />
                                        </Tooltip>
                                    </Box>
                                </Box>
                            </Flex>
                        </CardHeader>
                        <CardBody>

                            <VStack display={"flex"} alignItems={"flex-start"} ml={"30px"} fontSize={"20px"}>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Class:</Text>
                                    <Text > {profileData.class}</Text>
                                </Flex>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Gender:</Text>
                                    <Text > {profileData.gender == "female" ? "Female" : "Male"}</Text>
                                </Flex>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Father's Name:</Text>
                                    <Text > {profileData.fatherName}</Text>
                                </Flex>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Mother's Name:</Text>
                                    <Text > {profileData.motherName}</Text>
                                </Flex>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Address:</Text>
                                    <Text > {profileData.address}</Text>
                                </Flex>

                                <Flex>
                                    <Text mr="10px" color={"red.600"} > Birth Date:</Text>
                                    <Text > {profileData.birthDate}</Text>
                                </Flex>
                            </VStack>


                        </CardBody>

                        <Center >
                            <CardFooter>
                                <Box onClick={() => navigate("/students")} >
                                    <Tooltip label='Go Back' fontSize='md' >
                                        <IconButton
                                            variant='solid'
                                            borderRadius={"50%"}
                                            colorScheme='blue'
                                            aria-label='Send email'
                                            icon={<ArrowBackIcon />}
                                        />
                                    </Tooltip>
                                </Box >

                            </CardFooter>
                        </Center>


                    </Card>

                </Box>

            </Box >

        </Flex >
    )
}

export default ProfileStudent
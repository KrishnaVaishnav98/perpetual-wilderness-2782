import {
    Avatar, Flex, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, VStack, Center, Modal,
    ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";


function TeachersCard({ data, handleDelete }) {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate(`/teachers/${data.id}`);
    }


    return (
        <>
            <Box w={"370px"} >
                <Card p="15px" border={"solid"} borderColor={"#EBEEFA"} borderWidth={"0.2px"}>
                    <CardHeader>
                        <Flex>
                            {
                                data.gender == "male" ?
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
                                <Heading size='md'> {data.name}</Heading>
                                <Text color={"red.600"}>Subject: {data.subject}</Text>
                            </VStack>
                        </Flex>

                    </CardHeader>
                    <CardBody>
                        <Text >Educational Qualification: {data.education} </Text>
                    </CardBody>


                    <Center gap={"10px"}>
                        <Button onClick={() => (handleProfile())}>View Profile</Button>
                        {
                            currentUser?.role == "admin" ? <Button variant={"solid"} color={"red.500"} onClick={() => (handleDelete(data.id))}>Delete</Button> : ""
                        }

                    </Center>

                </Card>

            </Box>

        </>
    )
}

export default TeachersCard;
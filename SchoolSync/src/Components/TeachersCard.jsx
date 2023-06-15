import {
    Avatar, Flex, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, VStack, Center, Modal,
    ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function TeachersCard({ data }) {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate(`/teachers/${data.id}`);
    }

    function ViewProfile(name) {
        const { isOpen, onOpen, onClose } = useDisclosure()

        return (
            <>
                <Button
                    color={"black"}
                    bgColor={"green.200"}
                    variant={"solid"}
                    onClick={onOpen}> {name}</Button>

                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Center>
                                <Text color={"red.600"} fontSize={"25px"}>{data.name}</Text>
                            </Center>

                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize={"17px"} >
                            <HStack>
                                <Text color={"blue.600"}>USER Id:</Text>
                                <Text>{data.userId}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>CLASS:</Text>
                                <Text>{data.class}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>SUBJECT:</Text>
                                <Text>{data.subject}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>GENDER:</Text>
                                <Text>{data.gender}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>EDUCATION:</Text>
                                <Text>{data.education}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>ADDRESS:</Text>
                                <Text>{data.address}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>BIRTH DATE:</Text>
                                <Text>{data.birthDate}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>BIRTH DATE:</Text>
                                <Text>{data.birthDate}</Text>
                            </HStack>

                            <HStack>
                                <Text color={"blue.600"}>BIRTH DATE:</Text>
                                <Text>{data.birthDate}</Text>
                            </HStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
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

                    <Center>
                        {/* <Box>
                            {ViewProfile("View Profile")}
                        </Box> */}
                        <Button onClick={() => (handleProfile())}>View Profile</Button>
                    </Center>

                </Card>

            </Box>

        </>
    )
}

export default TeachersCard;
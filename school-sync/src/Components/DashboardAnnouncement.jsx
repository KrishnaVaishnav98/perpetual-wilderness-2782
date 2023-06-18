import { Box, Text, Stack, Card, CardBody, Heading, CardHeader, HStack, CardFooter, Center, Tooltip, IconButton } from "@chakra-ui/react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Loading from "./Loading";

function DashboardAnnouncement() {

    const [data, setData] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const fetchDataFromFirestore = () => {

        setLoading(true)
        const collectionRef = firebase.firestore().collection('announcements');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(fetchedData);
                setLoading(false)

            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false)
            });

        return data;
    };

    useEffect(() => {
        fetchDataFromFirestore()

    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "760px" }} >
            <Text textAlign={"left"} p="10px" color={"#37474F"} fontWeight={"bold"}>ANNOUNCEMENTS</Text>
            <Box>
                <Stack spacing='4' display={"flex"} justifyContent={"flex-start"}>
                    {
                        data.map((el, index) => (
                            index < 3 ?
                                <Card  >
                                    <CardHeader >
                                        <HStack display={"flex"} justifyContent={"space-between"}>
                                            <Heading textAlign={"left"} size='md'> {el?.title} </Heading>
                                            <Text textAlign={"right"} > {el?.date} </Text>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody>
                                        <Text textAlign="justify"> {el?.details} </Text>
                                    </CardBody>

                                </Card> : ""
                        ))
                    }

                    <Center >

                        <Box onClick={() => navigate("/announcement")} >
                            <Tooltip label='View all' fontSize='md' >
                                <IconButton
                                    variant='solid'
                                    borderRadius={"50%"}
                                    colorScheme='blue'
                                    aria-label='Send email'
                                    icon={<ArrowRightIcon />}
                                />
                            </Tooltip>
                        </Box >

                    </Center>

                </Stack>
            </Box>
        </Box >
    )
}

export default DashboardAnnouncement;
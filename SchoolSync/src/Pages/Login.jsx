import {
    Box, Flex, Image, Text, Center, FormControl,
    FormLabel, Input, Button
} from '@chakra-ui/react'
import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';

function LogIn() {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)

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
                        <Input type='text' placeholder='UserID' />
                        <br />
                        <br />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Password' />
                    </FormControl>
                    <br />
                    <br />
                    <Button colorScheme='blue' variant={"solid"}>SUBMIT</Button>
                </Box>
            </Center>


        </Flex >

    </>)
}

export default LogIn;
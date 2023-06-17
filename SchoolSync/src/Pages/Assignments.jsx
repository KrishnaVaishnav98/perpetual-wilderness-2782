import MainMenu from "../Components/MainMenu";
import { Box, Flex } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";

function Assignments() {

    const { isAuth, logIn, logOut, currentUser } = useContext(Authcontext)

    return (
        <Flex >
            <Box bgColor={"#F6F5FF"} pb={"50px"}>
                <MainMenu />
            </Box>
            <Box bgColor={"#F6F5FF"} w="full" pb={"50px"}>
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
            </Box>

        </Flex>
    )
}

export default Assignments;
import MainMenu from "../Components/MainMenu";
import { Box, Flex, Text } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";

function Events() {
    return (
        <Flex >
            <Box bgColor={"#F6F5FF"} pb={"50px"}>
                <MainMenu />
            </Box>
            <Box bgColor={"#F6F5FF"} w="full" pb={"50px"} >
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
                <Flex m="25px" display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Text display={"flex"} alignItems={"flex-start"} fontSize={"22px"} fontWeight={"bold"} > EVENTS </Text>
                        <Text color={"gray.500"} fontSize={"16px"} > Hi,name! Welcome to SchoolSync Dashboard </Text>
                    </Box>

                </Flex>
            </Box>

        </Flex>
    )
}

export default Events;
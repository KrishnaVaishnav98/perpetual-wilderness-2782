import MainMenu from "../Components/MainMenu";
import { Box, Flex, Center } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Holidays from "../Components/Holidays";

function Dashboard() {
    return (
        <Flex bgColor={"#F6F5FF"} >

            <Box bgColor={"#F6F5FF"}>
                <MainMenu />
            </Box>
            <Box  >
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>

                <Box w={"400px"} >
                    <Center>
                        <Holidays />
                    </Center>
                </Box>

            </Box>

        </Flex>
    )
}

export default Dashboard;
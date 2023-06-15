import MainMenu from "../Components/MainMenu";
import { Box, Flex } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";

function Dashboard() {
    return (
        <Flex >

            <Box>
                <MainMenu />
            </Box>
            <Box >
                <Box m="20px" w={{ base: '400px', sm: '200px', md: "400px", lg: "800px" }}>
                    <Navbar />
                </Box>
            </Box>

        </Flex>
    )
}

export default Dashboard;
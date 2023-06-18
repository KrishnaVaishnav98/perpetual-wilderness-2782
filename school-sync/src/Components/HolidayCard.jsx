import { Box, Flex, VStack, HStack, Text } from '@chakra-ui/react'

function HolidayCard({ index, date, day, event, month, year }) {
    return (
        // 
        <Box padding={"10px"} w="360px" m="5px" borderRadius={"10px"} border={"1px solid #F6F5FF"} bgColor={"white"}>
            <HStack>
                <VStack border={"1px solid #B0BEC5"} borderRadius={"5px"} w="82px" >
                    <Box w="80px" p="10px" borderRadius={"5px"} bgColor={(index % 2 == 0) ? "#FFCDD2" : "#B3E5FC"} >
                        <Text fontWeight={"bold"} color={(index % 2 == 0) ? "#C62828" : "#283593"} >{month}</Text>
                    </Box>
                    <Box>
                        <Text>{date}</Text>
                    </Box>
                </VStack>

                <VStack w="250px" >
                    <Box w="250px" >
                        <Text fontSize={"18px"} fontWeight={"bold"}>{event}</Text>
                    </Box>
                    <Box>
                        <Text>{day}-{year}</Text>
                    </Box>
                </VStack>

            </HStack>
        </Box >
    )
}

export default HolidayCard;
import { Box, Button, FormLabel, FormControl, Input, Select, Text, Center } from '@chakra-ui/react'
import { useState } from 'react';

function AssignmentStudent({ successful, handleSubmit }) {

    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const [driveLink, setDriveLink] = useState("")

    const handleClick = () => (
        driveLink ? handleSubmit(driveLink) : alert("Please choose any file")
    )

    return (
        <Center>
            <Box w={{ base: "500px", sm: "300px", md: "600px", lg: "800px" }} p="50px"
                border={"2px solid #9FA8DA"} borderRadius={"10px"}
            >
                <FormControl mb="15px" >
                    <FormLabel fontSize={"20px"} mb="30px">Today's Assignment:  {formattedDate}</FormLabel>

                    <Input
                        name="name"
                        bgColor={"white"}
                        p="20px"
                        value={driveLink}
                        onChange={(e) => setDriveLink(e.target.value)}
                        type="text" placeholder='Paste your google drive link here' />
                    <Text color={"red.400"}>Note* : Make sure it is not a private link.</Text>

                </FormControl>
                <Button disabled={successful} colorScheme={successful ? 'green' : 'blue'} variant={"solid"} onClick={handleClick}>{!successful ? "SUBMIT" : "COMPLETED"}</Button>
            </Box>
        </Center>
    )
}

export default AssignmentStudent
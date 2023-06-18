import { Box, Text, Stack, Card, CardBody, Heading, CardHeader, HStack } from "@chakra-ui/react";


function AnnouncementCard({ date, title, details }) {
    return (

        <Box>
            <Stack spacing='4'>

                <Card >
                    <CardHeader>
                        <HStack display={"flex"} justifyContent={"space-around"}>
                            <Heading size='md'> {title}</Heading>
                            <Text>{date}</Text>
                        </HStack>
                    </CardHeader>
                    <CardBody>
                        <Text>{details}</Text>
                    </CardBody>
                </Card>

            </Stack>

        </Box>
    )
}

export default AnnouncementCard;
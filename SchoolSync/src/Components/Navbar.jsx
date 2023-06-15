import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Input, Box, InputGroup, InputLeftElement, Select, Center } from '@chakra-ui/react'

function Navbar() {

    return (
        <>
            <Center >
                <Flex gap={"50px"} w="1000px">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Search2Icon color='#263238' />}
                        />
                        <Input type='text' placeholder='Search' />
                    </InputGroup>

                </Flex>
            </Center>
        </>
    )
}

export default Navbar;
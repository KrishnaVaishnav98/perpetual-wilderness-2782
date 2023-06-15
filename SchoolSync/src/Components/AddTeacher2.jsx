import { Box, Button, FormLabel, FormControl, Input } from '@chakra-ui/react'

function AddTeacher2({ formData, handleChange, handleStep }) {

    return (

        <Box >

            <FormControl isRequired mb="15px">
                <FormLabel>Gender</FormLabel>
                <Input
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder='Gender' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Address</FormLabel>
                <Input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Address' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" placeholder='Email' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Educational Qualification</FormLabel>
                <Input
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    type="email" placeholder='Educational Qualification' />
            </FormControl>

            <Button color={"blue.600"} variant={"outline"} onClick={() => (handleStep(-1))}>Prev</Button>
        </Box>
    )
}

export default AddTeacher2; 
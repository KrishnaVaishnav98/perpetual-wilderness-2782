import { Box, Button, FormLabel, FormControl, Input } from '@chakra-ui/react'

function AddStudent2({ formData, handleChange, handleStep }) {

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
                <FormLabel>Father's name</FormLabel>
                <Input
                    name="fatherName"
                    type='text'
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Father's name" />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Mother's name</FormLabel>
                <Input
                    name="motherName"
                    type='text'
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="Mother's name" />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" placeholder='Email' />
            </FormControl>


            <Button color={"purple"} variant={"outline"} onClick={() => (handleStep(-1))}>Prev</Button>
        </Box>
    )
}

export default AddStudent2; 
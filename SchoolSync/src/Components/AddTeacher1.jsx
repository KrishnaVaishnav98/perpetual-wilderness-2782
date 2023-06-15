import { Box, Button, FormLabel, FormControl, Input } from '@chakra-ui/react'

function AddTeacher1({ formData, handleChange, handleStep }) {

    return (

        <Box >
            <FormControl isRequired mb="15px">
                <FormLabel>Name</FormLabel>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" placeholder='Name' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Class</FormLabel>
                <Input
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    placeholder='Class' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Subject</FormLabel>
                <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Subject' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Conatact</FormLabel>
                <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="number" placeholder='Conatact' />
            </FormControl>

            <FormControl isRequired mb="15px">
                <FormLabel>Birth Date</FormLabel>
                <Input
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    type="date" placeholder='Birth date' />
            </FormControl>

            <Button color={"purple"} variant={"outline"} onClick={() => (handleStep(1))}>Next</Button>


        </Box>
    )
}

export default AddTeacher1; 
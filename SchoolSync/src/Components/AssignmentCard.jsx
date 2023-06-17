import { Box, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function AssignmentCard({ el }) {
    return (
        <>

            <Tr>
                <Td>{el.userId}</Td>
                <Td>{el.name}</Td>
                <Td >{el.class}</Td>
                <Td >{el.assignment}</Td>
            </Tr>


        </>
    )
}

export default AssignmentCard
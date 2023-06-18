import { Box, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Link } from "@chakra-ui/react";


function AssignmentCard({ el }) {
    return (
        <>

            <Tr>
                <Td>{el.userId}</Td>
                <Td>{el.name}</Td>
                <Td >{el.class}</Td>
                <Td >
                    <Link href={el.assignment}>
                        {el.assignment}
                    </Link>
                </Td>
                <Td >{el.date}</Td>
            </Tr>
        </>
    )
}

export default AssignmentCard
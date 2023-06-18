import AssignmentCard from "./AssignmentCard";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useEffect, useState } from "react";
import { Box, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";


function AssignmentTeacher() {

    const [assignmentData, setAssignmentData] = useState([])

    const fetchDataFromFirestore = () => {

        const collectionRef = firebase.firestore().collection('assignments');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setAssignmentData(fetchedData);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        return assignmentData;
    };

    useEffect(() => {
        fetchDataFromFirestore()
    }, [])


    return (
        <>
            <Box mt="50px">
                <TableContainer>
                    <Table size={"lg"} variant='striped'>
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                <Th>UserId</Th>
                                <Th>Name</Th>
                                <Th>Class</Th>
                                <Th>Submission</Th>
                                <Th>Submission Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                assignmentData.map((el, index) => (
                                    <AssignmentCard key={index} el={el} />
                                ))
                            }
                        </Tbody>
                        {/* <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot> */}
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default AssignmentTeacher;
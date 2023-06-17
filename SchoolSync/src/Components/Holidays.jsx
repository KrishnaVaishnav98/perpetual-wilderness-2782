import HolidayCard from "./HolidayCard";
import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function Holidays() {

    const [holidays, setHolidays] = useState([])

    useEffect(() => {
        fetchDataFromFirestore()
    }, [])

    const fetchDataFromFirestore = () => {

        const collectionRef = firebase.firestore().collection('holidays');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setHolidays(fetchedData);

            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        return holidays;
    };



    return (
        <Box position={"sticky"} bgColor={"#white"} borderRadius={"10px"} border={"2px solid #9FA8DA"} padding={"15px"}>
            <Box width={"100px"}>
                <Text color={"#283593"} fontWeight={"bold"}>HOLIDAYS</Text>
            </Box>
            {
                holidays.map((el, index) => (
                    <HolidayCard key={index} index={index} {...el} />
                ))
            }
        </Box>
    )
}

export default Holidays;
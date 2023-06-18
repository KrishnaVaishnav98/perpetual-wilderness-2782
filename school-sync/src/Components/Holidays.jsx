import HolidayCard from "./HolidayCard";
import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Loading from "./Loading";

function Holidays() {

    const [holidays, setHolidays] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchDataFromFirestore()
    }, [])

    const fetchDataFromFirestore = () => {
        setLoading(true)
        const collectionRef = firebase.firestore().collection('holidays');

        collectionRef
            .get()
            .then((querySnapshot) => {
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setHolidays(fetchedData);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false)
            });

        return holidays;
    };

    if (loading) {
        return <Loading />
    }


    return (
        <Box position={"sticky"} bgColor={"#white"} borderRadius={"10px"} border={"2px solid #CFD8DC"} padding={"15px"} >
            <Box width={"100px"}>
                <Text color={"#37474F"} fontWeight={"bold"}>HOLIDAYS</Text>
            </Box>
            {
                holidays.map((el, index) => (
                    <HolidayCard key={index} index={index} {...el} />
                ))
            }
        </Box >
    )
}

export default Holidays;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Box, Button, Flex, Spacer, VStack, Grid, GridItem, SimpleGrid, Text, Table,
    Thead, Tbody, Tr, Th, Td, Image, Input
} from "@chakra-ui/react";

const AdvancedPage = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'Username'; // Replace with your logic to get the username
    const tokens = 'XXXX'; // Replace with your logic to get the tokens

    const handleLogout = () => {
        localStorage.removeItem('isLoggedin');
        navigate('/');
    };
    function Header() {
        return (
            <Flex display={"flex"} flex={1}>
                <Flex style={{ backgroundColor: 'rgb(190, 219, 245)' }}
                    minH={'80px'} flex={1} w="100vw"
                    position="fixed" top={0} left={0} right={0}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    px={4}>
                    <Button colorScheme="messenger" onClick={() => { navigate("/"); }}>Home</Button>
                    <Button colorScheme="red" onClick={handleLogout} marginLeft={4}>Logout</Button>

                </Flex>
            </Flex>
        )
    }

    const Footer = () => (
        <Flex
            backgroundColor='rgb(190, 219, 245)'
            minHeight='60px'
            alignItems="center"
            justifyContent="center"
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            zIndex={1}
        >
            {/* You can add footer content here */}
        </Flex>
    );

    const GreetingCard = () => {
        const [url, setUrl] = useState(''); // State to hold the input URL

        const handleUrlChange = (event) => {
            setUrl(event.target.value);
        };

        // Unique function for each button
        const handleGetInfoClick = () => {
            console.log('Get Info');
        };

        const handleGetHistoryClick = () => {
            console.log('Get History');
        };

        const handleRenewClick = () => {
            console.log('Renew');
        };

        const handleReportClick = () => {
            console.log('Report');
        };

        const handleResetTokenClick = () => {
            console.log('Reset Token...');
        };

        const handleRemoveSpamClick = () => {
            console.log('Remove Spam');
        };

        const handleDeleteClick = () => {
            console.log('Delete');
        };

        return (
            <VStack
                backgroundColor='white'
                padding={5}
                borderRadius='lg'
                boxShadow='base'
                alignItems='flex-start'
                width="full"
            >
                <Text fontSize='lg'>Hi, {username}</Text>
                <Text>Your Tokens: {tokens}</Text>
                <Input
                    placeholder="Enter your URL here"
                    size="md"
                    mt={3}
                    value={url}
                    onChange={handleUrlChange}
                />
                <SimpleGrid columns={2} spacing={2} width="full">
                    <Button colorScheme='blue' onClick={handleGetInfoClick}>Get Info</Button>
                    <Button colorScheme='blue' onClick={handleGetHistoryClick}>Get History</Button>
                </SimpleGrid>
                <Box width="full" textAlign="center" my={4}>
                    <Text fontSize='xl' fontWeight='bold'>Advanced Features</Text>
                </Box>

                <SimpleGrid columns={2} spacing={2} width="full">
                    <Button colorScheme='green' onClick={handleRenewClick}>Renew</Button>
                    <Button colorScheme='red' onClick={handleReportClick}>Report</Button>
                    <Button colorScheme='green' onClick={handleResetTokenClick}>Reset Token</Button>
                    <Button colorScheme='red' onClick={handleRemoveSpamClick}>Remove Spam</Button>
                </SimpleGrid>
                <Button colorScheme='red' width="full" marginTop={4} onClick={handleDeleteClick}>Delete</Button>
            </VStack>
        );
    };


    const Scoreboard = () => (
        <VStack
            backgroundColor='white'
            padding={5}
            borderRadius='lg'
            boxShadow='base'
            alignItems='flex-start'
            width="full"
        >
            <Text fontSize='lg'>Scoreboard</Text>
            <Table variant='simple' width="full">
                <Thead>
                    <Tr>
                        <Th>Tag</Th>
                        <Th isNumeric>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* Add your dynamic rows here */}
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    <Tr>
                        <Td>Example Tag</Td>
                        <Td isNumeric>123</Td>
                    </Tr>
                    {/* ... more rows */}
                </Tbody>
            </Table>
        </VStack>
    );

    return (
        <Box bg='rgb(245, 245, 245)' minHeight="100vh">
            <Header />
            <VStack spacing={8} paddingY={20} alignItems="center" width="full">
                <Image src="/snaplink_logo_no_background.png" height="145px" mt="100px"/>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingX={4} width="full" maxW="4xl">
                    <GreetingCard />
                    <Scoreboard />
                </SimpleGrid>
            </VStack>
            <Spacer />
            <Footer />
        </Box>
    );
};

export default AdvancedPage;

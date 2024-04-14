import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Box, Button, Flex, Spacer, VStack, Grid, GridItem, SimpleGrid, Text, Table,
    Thead, Tbody, Tr, Th, Td, Image, Input
} from "@chakra-ui/react";
import * as api from '../api/featureApi';


const AdvancedPage = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'Username';
    const tokens = 'XXXX'; // Replace with your logic to get the tokens

    const handleLogout = () => {
        localStorage.removeItem('isLoggedin');
        navigate('/');
    };

    // API Integration
    const [infoData, setInfoData] = useState(null);
    const [historyData, setHistoryData] = useState([]);

    const handleInfoReceived = (data) => {
        // console.log('Received info data:', data)
        setInfoData(data);
        
        setHistoryData([]);  // Clear history data when new info data is received
    };

    const handleHistoryReceived = (history) => {
        setHistoryData(history);
        setInfoData(null);  // Clear info data when new history data is received
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

    const GreetingCard = ({ onInfoReceived, onHistoryReceived }) => {
        const [url, setUrl] = useState(''); // State to hold the input URL

        const [apiResponse, setApiResponse] = useState(null);

        const handleUrlChange = (event) => {
            setUrl(event.target.value);
        };

        // Unique function for each button
        const handleGetInfoClick = () => {
            const mockApiResponse = {
                spam_status: "1",
                expire_at: "2024-03-18",
                created_at: "2024-03-01",
                long_url: "https://google.com"
            };
            onInfoReceived(mockApiResponse);
        };
        
        const handleGetHistoryClick = () => {
            const mockHistoryResponse = ["https://example1.com", "https://example2.com", "https://example3.com"];
            onHistoryReceived(mockHistoryResponse);
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



    const Scoreboard = ({ infoData, historyData }) => {
        console.log("Rendering Scoreboard with", { infoData, historyData });

        let hasHistoryData = historyData && historyData.length > 0;
        let hasInfoData = infoData && Object.keys(infoData).length > 0;
    
        return (
            <VStack backgroundColor='white' padding={5} borderRadius='lg' boxShadow='base' alignItems='flex-start' width="full">
                <Text fontSize='lg'>Scoreboard</Text>
                <Table variant='simple' width="full">
                    <Thead>
                        <Tr>
                            <Th>Tag</Th>
                            <Th>Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {hasInfoData && !hasHistoryData && (
                            <>
                                <Tr>
                                    <Td>Spam Status</Td>
                                    <Td>{infoData.spam_status || 'N/A'}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Expires At</Td>
                                    <Td>{infoData.expire_at || 'N/A'}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Created At</Td>
                                    <Td>{infoData.created_at || 'N/A'}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Long URL</Td>
                                    <Td>{infoData.long_url || 'N/A'}</Td>
                                </Tr>
                            </>
                        )}
                        {hasHistoryData && !hasInfoData && (
                            historyData.map((url, index) => (
                                <Tr key={index}>
                                    <Td>URL {index + 1}</Td>
                                    <Td>{url}</Td>
                                </Tr>
                            ))
                        )}
                        {!hasHistoryData && !hasInfoData && (
                            <Tr>
                                <Td colSpan={2}>No data available</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </VStack>
        );
    };
    


    return (
        <Box bg='rgb(245, 245, 245)' minHeight="100vh">
            <Header />
            <VStack spacing={8} paddingY={20} alignItems="center" width="full">
                <Image src="/snaplink_logo_no_background.png" height="145px" mt="100px" />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingX={4} width="full" maxW="4xl">
                <GreetingCard onInfoReceived={handleInfoReceived} onHistoryReceived={handleHistoryReceived} />
                <Scoreboard infoData={infoData} historyData={historyData} />
                </SimpleGrid>
            </VStack>
            <Spacer />
            <Footer />
        </Box>
    );
};

export default AdvancedPage;

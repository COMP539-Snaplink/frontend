import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

// import './homePage.css';
// import '../App.css';
import { Box, Card, Flex, Input, HStack, Image, VStack, CardBody, Button, Spacer, Text } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const HomePage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [customized, setCustomized] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
        inputUrl: '',
        customized: '',
        generatedUrl: '' // Depending on your use case, this might not be necessary to handle here
    });

    const [latency, setLatency] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const backendUrl = 'https://comp539-team2-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com';

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleGenerate = async () => {
        setErrorMessage('');
        // Validate input URL
        if (!inputValues.inputUrl.trim()) {
            setGeneratedUrl('');
            setLatency('Please enter a URL.');
            return;
        }

        // Set up request body and API endpoint
        const requestBody = {
            long_url: inputValues.inputUrl,
            email: "wl86@rice.edu" // Replace with actual user email
        };
        let apiUrl = `${backendUrl}/api/shorten`;

        // If the user has provided a customized alias, adjust requestBody and apiUrl
        if (inputValues.customized.trim() !== '') {
            requestBody.short_url = inputValues.customized;
            apiUrl = `${backendUrl}/api/customizeUrl`;
        }

        try {
            // Make the API call
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            // Parse the JSON response
            const result = await response.json();

            // Check if the response is successful
            if (response.ok && result.status === "success") {
                // ... successful response handling
                setLatency(`Latency: ${result.data.latency || ''} ms`);
            } else {
                // If the response contains a custom error message
                setErrorMessage(result.message || 'Failed to generate URL.');
            }
        } catch (error) {
            console.error('Error during URL generation:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };



    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl);
        // You might want to implement some feedback to the user that the text was copied.
    };

    function Footer() {
        return (
            <Box>
                <Flex
                    style={{ backgroundColor: 'rgb(190, 219, 245)' }}
                    bg={"gray.200"}
                    color={"white"}
                    minH={'60px'}
                    h={50}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={"gray.300"}
                    alignItems={"center"}
                    justifyItems={"center"}
                    position="fixed" // or "sticky"
                    bottom={0} // Aligns to the top of the viewport
                    left={0}
                    right={0}
                    width="100vw">
                    <Spacer />
                </Flex>
            </Box>
        )
    }

    function Header() {
        const navigate = useNavigate();
        const isLoggedIn = localStorage.getItem('isLoggedin') === 'true';

        const handleLogout = () => {
            localStorage.removeItem('isLoggedin'); // Remove the flag from local storage
            setInputValues({ ...inputValues, customized: '' }); // Clear the customized input
            setGeneratedUrl(''); // Clear any generated URL
            setLatency(''); // Clear latency message
            setErrorMessage(''); // Clear any error message
            navigate('/'); // Optionally refresh the page or navigate as needed
        };


        return (
            <Flex style={{ backgroundColor: 'rgb(190, 219, 245)' }} minH={'80px'} flex={1} w="100vw"
                position="fixed" top={0} left={0} right={0} alignItems={"center"} justifyContent={"flex-end"} px={4}>
                {isLoggedIn ? (
                    <>
                        <Button colorScheme="blue" onClick={() => navigate("/advanced")}>Advanced</Button>
                        <Button colorScheme="red" onClick={handleLogout} ml={4}>Logout</Button>
                    </>
                ) : (
                    <Button colorScheme="whatsapp" onClick={() => navigate("/login")}>Login</Button>
                )}
            </Flex>
        );
    }


    return (
        <div>
            <Box style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
                <Header />
                <div className="Container">
                    <VStack align={"stretch"}>
                        <Flex spacing="4">
                            <Box mt="-50px">
                                <Image src="/snaplink_logo_no_background.png" height="145"></Image>
                            </Box>
                        </Flex>
                        <Box>
                            <Card width="200" boxShadow="xl" w="620px" style={{ backgroundColor: 'rgb(190, 219, 245)' }} rounded='2xl'>
                                <HStack>
                                    <Box width="14px"></Box>
                                    <CardBody>
                                        <Spacer height='25px'></Spacer>
                                        <Flex spacing="4">
                                            <VStack spacing="18px">
                                                <HStack>
                                                    <Input
                                                        name="inputUrl"
                                                        placeholder='Original/Snap Link Url'
                                                        backgroundColor="white"
                                                        borderColor={"black"}
                                                        type={"text"}
                                                        value={inputValues.inputUrl}
                                                        onChange={handleInputChange}
                                                    />
                                                    <Input
                                                        name="customized"
                                                        width='200px'
                                                        placeholder="Customized"
                                                        disabled={localStorage.getItem('isLoggedin') !== 'true'}
                                                        borderColor={"black"}
                                                        onChange={handleInputChange}
                                                        value={inputValues.customized}
                                                        backgroundColor={localStorage.getItem('isLoggedin') === 'true' ? "white" : "gray.200"}
                                                    />
                                                </HStack>
                                                <Input placeholder='Generated URL' value={generatedUrl} isReadOnly={true} backgroundColor="white" borderColor={"black"} />
                                            </VStack>
                                            <Box width='20px'></Box>
                                            <VStack spacing="18px">
                                                <Button
                                                    style={{ width: '100px' }}
                                                    colorScheme={"whatsapp"}
                                                    onClick={handleGenerate}
                                                >
                                                    {inputValues.customized.trim() !== '' ? 'Customize' : 'Generate'}
                                                </Button>

                                                <Box style={{ display: 'flex' }}>
                                                    <Button style={{ width: '100px' }} colorScheme={"whatsapp"} onClick={handleCopy}>Copy</Button>
                                                </Box>
                                            </VStack>
                                        </Flex>
                                        <Spacer height='25px'></Spacer>
                                    </CardBody>
                                </HStack>
                            </Card>
                        </Box>
                        <Text pl={"4"} color={errorMessage ? "red.500" : "black"} textAlign="left">
                            {errorMessage || latency}
                        </Text>


                    </VStack>
                </div>
            </Box>
            <Footer />
        </div>
    );
}

export default HomePage;
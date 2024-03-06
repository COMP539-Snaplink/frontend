import React, { useState } from 'react';
// import './homePage.css';
// import '../App.css';
import {Box, Card, Flex, Input, HStack, Image, VStack, CardBody, Button, Spacer, Text} from "@chakra-ui/react";
import {EditIcon} from '@chakra-ui/icons';

const HomePage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [customized, setCustomized] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');

    const handleGenerate = () => {
        // Implement the logic to generate the URL
        // Placeholder logic:
        setGeneratedUrl(`original/snaplk/${customized || inputUrl}`);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl);
        // You might want to implement some feedback to the user that the text was copied.
    };

    function LinkCard() {
        return (
            <Box>
                <Card width="200" boxShadow="xl" style={{ backgroundColor: 'rgb(190, 219, 245)' }}>
                    <CardBody>
                        <Spacer height='25px'></Spacer>
                        <Flex spacing="4">
                            <Input placeholder='Original/Snap Link Url' backgroundColor="white"/>
                            <Box width='20px'></Box>
                            <Button variant='solid' style={{
                                maxWidth: '100%', // Ensure the button does not exceed its container width
                                textOverflow: 'ellipsis', // Adds an ellipsis (...) to text that overflows
                                whiteSpace: 'nowrap' // Keeps the text on a single line
                            }} width='200px'>
                                Customized
                            </Button>
                            <Box width='20px'></Box>
                            <Box style={{display: 'flex'}}>
                                <Button colorScheme={"whatsapp"}>Generate</Button>
                            </Box>
                        </Flex>
                        <Spacer height='23px'></Spacer>
                        {/*<Divider/>*/}
                        <Flex spacing="4">
                            <Input placeholder='Original/Snap Link Url' backgroundColor="white"/>
                            <Box width='20px'></Box>
                            <Box style={{display: 'flex'}}>
                                <Button colorScheme={"whatsapp"}>Copy</Button>
                            </Box>
                        </Flex>
                        <Spacer height='25px'></Spacer>
                    </CardBody>
                </Card>
            </Box>
        )
    }

    function Header() {
        return (
            <Box>
                <Flex
                    style={{ backgroundColor: 'rgb(190, 219, 245)' }}
                    bg={"gray.200"}
                    color={"white"}
                    minH={'40px'}
                    h={50}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={"gray.300"}
                    alignItems={"center"}
                    justifyItems={"center"}>
                    <Spacer />
                    <Button colorScheme="whatsapp">Login</Button>
                </Flex>
            </Box>
        )
    }

    return (
        <div>
            <Header/>
            <div className="Container">
                <VStack>
                    <Flex spacing="4">
                        <Box>
                            <Image src="/snaplink_logo_small.png" height="145"></Image>
                        </Box>
                    </Flex>
                    <LinkCard/>
                </VStack>
            </div>
        </div>
    );
}

export default HomePage;
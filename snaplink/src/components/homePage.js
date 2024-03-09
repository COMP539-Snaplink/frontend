import React, { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";

// import './homePage.css';
// import '../App.css';
import {Box, Card, Flex, Input, HStack, Image, VStack, CardBody, Button, Spacer, Text} from "@chakra-ui/react";
import {EditIcon} from '@chakra-ui/icons';

const HomePage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [customized, setCustomized] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const navigate = useNavigate()
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
                <Card width="200" boxShadow="xl" w="620px" style={{ backgroundColor: 'rgb(190, 219, 245)' }} rounded='2xl'>
                    <HStack>
                        <Box width="14px"></Box>
                        <CardBody>
                            <Spacer height='25px'></Spacer>
                            <Flex spacing="4">
                                <VStack spacing="18px">
                                    <HStack>
                                        <Input placeholder='Original/Snap Link Url' backgroundColor="white" borderColor={"black"}/>
                                        <Input width='200px' placeholder="Customized" disabled={true} borderColor={"black"}/>
                                    </HStack>
                                    <Input placeholder='Original/Snap Link Url' backgroundColor="white" borderColor={"black"}/>
                                </VStack>
                                <Box width='20px'></Box>
                                <VStack spacing="18px">
                                    <Box style={{display: 'flex'}}>
                                        <Button style={{ width: '100px' }} colorScheme={"whatsapp"}>Generate</Button>
                                    </Box>
                                    <Box style={{display: 'flex'}}>
                                        <Button style={{ width: '100px' }} colorScheme={"whatsapp"}>Copy</Button>
                                    </Box>
                                </VStack>
                            </Flex>
                            <Spacer height='25px'></Spacer>
                        </CardBody>
                    </HStack>
                </Card>
            </Box>
        )
    }

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
        return (
            <Flex display={"flex"} flex={1}>
                <Flex style={{backgroundColor: 'rgb(190, 219, 245)'}}
                      minH={'80px'} flex={1} w="100vw"
                      position="fixed" top={0} left={0} right={0}
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                      px={4}>
                    <Button colorScheme="whatsapp" onClick={() => {navigate("/login");}}>Login</Button>
                </Flex>
            </Flex>
        )
    }

    return (
        <div>
            <Box style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <Header/>
            <div className="Container">
                <VStack>
                    <Flex spacing="4">
                        <Box mt="-50px">
                            <Image src="/snaplink_logo_no_background.png" height="145"></Image>
                        </Box>
                    </Flex>
                    <LinkCard/>
                </VStack>
            </div>
            </Box>
            <Footer/>
        </div>
    );
}

export default HomePage;
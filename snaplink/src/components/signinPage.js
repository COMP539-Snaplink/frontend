import React, { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";


// import './homePage.css';
// import '../App.css';
import {Box, Card, Flex, Input, HStack, Image, VStack, CardBody, Button, Spacer, Text} from "@chakra-ui/react";
import {EditIcon} from '@chakra-ui/icons';

const SigninPage = () => {
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

    const handleLogin = () => {
        // to-do: integrate backend login api
        // console.log("test")
        localStorage.setItem('isLoggedin', 'true');
        navigate('/'); // Navigate to HomePage after login
    };

    function SigninCard() {
        return (
            <Box>
                <Card width="200" boxShadow="xl" w="480px" style={{ backgroundColor: 'rgb(190, 219, 245)' }} rounded='2xl'>
                    <HStack>
                        <CardBody>
                            <Spacer height='25px'></Spacer>
                            <Flex spacing="4">
                                <VStack spacing="18px" flex={1}>
                                    <Input maxWidth={"400px"} placeholder='Username' backgroundColor="white" borderColor={"black"}/>
                                    <Input maxWidth={"400px"} placeholder='Password' backgroundColor="white" borderColor={"black"} type={"password"}/>
                                    <Flex>
                                        <Button style={{ width: '160px' }} colorScheme={"whatsapp"} onClick={handleLogin}>Register / Login</Button>
                                        <Spacer width={"10px"}/>
                                        <Button leftIcon={<FcGoogle />}> Login With Google </Button>
                                    </Flex>
                                </VStack>
                            </Flex>
                            <Spacer height='12px'></Spacer>
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
                    <Button colorScheme="messenger" onClick={() => {navigate("/");}}>Home</Button>
                </Flex>
            </Flex>
        )
    }

    return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <div className="Container">
                <VStack>
                    <Header/>
                    <Flex spacing="4">
                        <Box mt="-50px">
                            <Image src="/snaplink_logo_no_background.png" height="145"></Image>
                        </Box>
                    </Flex>
                    <SigninCard/>
                    <Footer/>
                </VStack>
            </div>
        </div>
    );
}

export default SigninPage;
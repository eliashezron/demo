import { Button, Container, Flex,Box, Text} from "@chakra-ui/react"
import React from "react"
import { useMoralis } from "react-moralis";
import './navBar.css'


const NavBar=()=>{
    const { authenticate, isAuthenticated,account, logout, isAuthenticating, isLoggingOut} = useMoralis();
   console.log(account)
    return(
        <Container maxW='100%' p='2% 10%' align='center' minh='15vh'>
            <Flex align='center' justify='space-between'>
            <Text>BlockBunch</Text>
            {!isAuthenticated ? 
            <Button colorScheme='yellow' size='lg' isLoading={isAuthenticating} onClick={() => authenticate()}>
                Connect Wallet
            </Button>
            :<Box><Text color='whiteAlpha.700'>{account}</Text><Button colorScheme='yellow' size='lg' isLoading={isLoggingOut} onClick={()=>logout()}>Disconnect</Button></Box>}
            </Flex>
        </Container>
    )
}
export default NavBar

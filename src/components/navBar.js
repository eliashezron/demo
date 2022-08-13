import { Button, Container, Flex,Box, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure} from "@chakra-ui/react"
import React from "react"
import {
    useEthers,
  } from "@usedapp/core"
import WalletConnectProvider from "@walletconnect/web3-provider"

const NavBar=()=>{
    const { activateBrowserWallet, account, activate, deactivate } = useEthers()
    const isConnected = account !== undefined
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Container maxW='100%' p='2% 10%' align='center' minh='15vh'>
            <Flex align='center' justify='space-between'>
            <Text>BlockBunch</Text>
            {!isConnected ? 
            <Button colorScheme='yellow' size='lg'  onClick={onOpen}>
                Connect Wallet
            </Button>
            :<Box><Text color='whiteAlpha.700'>{account}</Text><Button colorScheme='yellow' size='lg' onClick={deactivate}>Disconnect</Button></Box>}
            </Flex>
        </Container>
           <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent>
             <ModalHeader>Modal Title</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
                <Text>HEy</Text>
             </ModalBody>
   
             <ModalFooter>
               <Button colorScheme='blue' mr={3} onClick={onClose}>
                 Close
               </Button>
               <Button variant='ghost'>Secondary Action</Button>
             </ModalFooter>
           </ModalContent>
         </Modal>
         </>
    )
}
export default NavBar

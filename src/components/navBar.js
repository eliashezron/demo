import { Button, Container, Flex,Box, Text, Modal,
    ModalOverlay,Divider,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,Image, useDisclosure} from "@chakra-ui/react"
import WalletConnectIcon from "../images/walletconnectlogo.png"
import metamask from "../images/metamaskWallet.png"
import React from "react"
import {
    useEthers,
  } from "@usedapp/core"
import WalletConnectProvider from "@walletconnect/web3-provider"

const NavBar=()=>{
    const { activateBrowserWallet, account, activate, deactivate } = useEthers()
    const isConnected = account !== undefined
    const { isOpen, onOpen, onClose } = useDisclosure()
    async function onConnect() {
        try {
          const provider = new WalletConnectProvider({
            infuraId: "a22b6958cc5449a6a5bc6dc4e2c26a7a",
          })
          await provider.enable()
          await activate(provider)
        } catch (error) {
          console.error(error)
        }
      }
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
             <ModalHeader>Connect Your Wallet</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
             <Divider orientation='horizontal' />
                <Box maxW='sm' p='2' onClick={activateBrowserWallet}>
                    <Flex align='center' justify='center'>
                    <Image src={metamask} alt='metamask' boxSize='50px' mr='5'/>
                    <Text>MetaMask</Text>
                    </Flex>
                </Box>
                <Divider orientation='horizontal' />
                <Box maxW='sm' p='2'  onClick={onConnect}>
                    <Flex align='center' justify='center'>
                    <Image src={WalletConnectIcon} alt='metamask' boxSize='50px' mr='5'/>
                    <Text>Wallet Connect</Text>
                    </Flex>
                </Box>
                <Divider orientation='horizontal' />
             </ModalBody>
           </ModalContent>
         </Modal>
         </>
    )
}
export default NavBar

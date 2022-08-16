import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  VStack,
  Text,
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Contract } from "@ethersproject/contracts"
import m2 from "../images/m2.png"
// import m1 from "../images/m1.png"
import bg from "../images/bg.png"
import { useContractFunction } from "@usedapp/core"
import { utils } from "ethers"

const Hero = ({ account }) => {
  const [amount, setAmount] = useState(0.012)
  const [connectWallet, setConnectWallet] = useState(false)
  const nftAddress = "0x6f6fc7D4967089b9FC054911bcec13248757d241"
  useEffect(() => {
    if (account) {
      setConnectWallet(false)
    }
  }, [account, connectWallet])
  const abi = [
    {
      inputs: [],
      name: "Mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ]
  const nftInterface = new utils.Interface(abi)
  const contract = new Contract(nftAddress, nftInterface)
  const { state, send } = useContractFunction(contract, "mint", {
    transactionName: "mintnfttransaction",
  })
  const mintNft = (amount) => {
    send({
      value: utils.parseEther(amount.toString()),
    })
  }
  const handleMint = (amount) => {
    if (!account) {
      setConnectWallet(true)
    } else {
      mintNft(amount)
    }
  }
  return (
    <VStack minheight='85vh'>
      {connectWallet && (
        <Alert
          status='warning'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
          <AlertIcon />
          Connect Wallet to Mint NFTS
        </Alert>
      )}
      <Container maxW='md' centerContent>
        <Text fontSize='2xl' color='#D7C19A'>
          Blockchain for everyone
        </Text>
      </Container>
      <Container maxW='75%' color='white' centerContent pt='0.3%'>
        <Flex align='center' justify='center'>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Discovery
          </Text>
          <Image src={m2} alt='nft' style={{ margin: "0 5%" }} />
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
          >
            Collect
          </Text>
        </Flex>
      </Container>
      <Container maxW='75%' color='white' centerContent pt='0.3%'>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          Remarkable Nfts
        </Text>
      </Container>
      <Container centerContent pt='1%'>
        <Flex>
          <InputGroup mr='5' size='lg' color='white'>
            <InputLeftAddon
              children='+'
              onClick={() => setAmount(amount + 0.001)}
            />
            <Input
              variant='outline'
              type='text'
              name='text'
              placeholder='enter Amount'
              value={`${amount.toFixed(3)}`}
              onChange={(e) => setAmount(e.target.value)}
              color='white'
              disabled
            ></Input>
            <InputRightAddon
              children='-'
              onClick={() => setAmount(amount - 0.001)}
            />
          </InputGroup>
          <Button
            size='lg'
            bgGradient={[
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
            onClick={handleMint}
            isLoading={state.status === "Mining"}
          >
            Mint NOW
          </Button>
        </Flex>
      </Container>
      <Box border='none' centerContent>
        <Image
          src={bg}
          alt='apes'
          objectFit='cover'
          borderRadius='2%'
          maxheight='700px'
        />
      </Box>
    </VStack>
  )
}
export default Hero

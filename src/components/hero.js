import { Box, Button, Container, Flex, Image, VStack } from "@chakra-ui/react"
import React from "react"
import m2 from "../images/m2.png"
import m1 from "../images/m1.png"
import bg from "../images/bg.png"

const Hero=()=>{
    return(
        <VStack>
        <Container maxW='md' color='#D7C19A' centerContent>
          Blockchain for everone
        </Container>
        <Container maxW='75%' color='white'centerContent pt='0.3%'>
          <Flex align="center" justify="center">Discover <Image src={m2} alt='nft' style={{margin:'0 5%'}}/> Collect</Flex>
        </Container>
        <Container centerContent pt='1%'>
            <Button size='lg' colorScheme='whiteAlpha' bgImage={m1}
            bgPosition='center'
            bgRepeat='no-repeat'variant='solid' _hover={{
            background: "white",
            color: "teal.500",
         }}> 
            Mint NOW
            </Button>
        </Container>
        <Box border='none'>
            <Image src={bg} alt='apes' objectFit='cover'borderRadius='2%'/>
        </Box>
      </VStack>
    )
}
export default Hero
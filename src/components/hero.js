import { Box, Button, Container, Flex, Image, VStack, Text} from "@chakra-ui/react"
import React from "react"
import m2 from "../images/m2.png"
import m1 from "../images/m1.png"
import bg from "../images/bg.png"

const Hero=()=>{
  
    return(
        <VStack minheight='85vh'>
        <Container maxW='md'  centerContent>
         <Text fontSize='2xl'color='#D7C19A'>Blockchain for everyone</Text> 
        </Container>
        <Container maxW='75%' color='white'centerContent pt='0.3%'>
          <Flex align="center" justify="center"><Text bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'>Discovery</Text><Image src={m2} alt='nft' style={{margin:'0 5%'}}/><Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'>Collect</Text></Flex>
        </Container>
        <Container maxW='75%' color='white'centerContent pt='0.3%'><Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='3xl'
  fontWeight='extrabold'>Remarkable Nfts</Text></Container>
        <Container centerContent pt='1%'>
            <Button size='lg' bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}> 
            Mint NOW
            </Button>
        </Container>
        <Box border='none' centerContent>
            <Image src={bg} alt='apes' objectFit='cover'borderRadius='2%'maxheight='700px' />
        </Box>
      </VStack>
    )
}
export default Hero
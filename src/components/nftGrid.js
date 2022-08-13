import { Box, Container,Image, Flex, Text, Badge, Grid, Button, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { nftItems, nftsScroll } from "../Data/nfts"
import eth from "../images/eth.png"
import SwipeableViews from 'react-swipeable-views';
function NftGrid(){
    const [slideIndex, setSlideIndex] = useState(0);
    const prevSlide = () => {
      if (slideIndex === 1) {
        setSlideIndex(0);
      } else setSlideIndex(1);
    };
  
    const nextSlide = () => {
      if (slideIndex === 1) {
        setSlideIndex(0);
      } else setSlideIndex(1);
    };

    return(
        <VStack>
        <Container maxW='md'  centerContent >
          <Text color='#D7C19A' fontSize='2xl'>Discover+</Text>
          <Flex align="center" justify="center"><Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'>Discover Items</Text></Flex>
        </Container>
        <Container centerContent pt='1%'>
        <Flex>
          <Button>mint</Button>
          <Button>mint</Button>
          <Button>mint</Button>
          <Button>mint</Button>
          <Button>mint</Button>
        </Flex>
        </Container>
       
  
        <Container maxW='75%'>
            <SwipeableViews  enableMouseEvents index={slideIndex}>
                <Grid gap={2} templateColumns='1fr 1fr 1fr 1fr' justify="center">
                    {nftItems.map((item) => {
                        console.log(item.id)
                        return (
                            <Box key={item.id} p={5} bg='#24232D' borderRadius={10}>
                                <Image src={item.image} alt={item.alt}  width='200px' height='230px'
                                    objectFit='cover'/>
                                <Box display='flex' alignItems='baseline' justifyContent='space-between' pt='10px'>
                                    <Text>{item.alt}</Text>
                                    <Badge borderRadius='full' px='2' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
                                            Buy
                                    </Badge>

                                </Box> 
                                <Box>
                                    {item.name}

                                </Box> 
                                <Box display='flex' alignItems='center'>
                                    <Image src={eth} alt='eth'/><Text color='yellowgreen'>10</Text>
                                </Box>   
                            </Box>

                        )
                    })}
                </Grid>
                <Grid gap={2} templateColumns='1fr 1fr 1fr 1fr' justify="center">
                    {nftsScroll.map((item) => {
                        console.log(item.id)
                        return (
                            <Box key={item.id} p={5} bg='#24232D' borderRadius={10}>
                                <Image src={item.image} alt={item.alt}  width='200px' height='230px'
                                    objectFit='cover'/>
                                <Box display='flex' alignItems='baseline' justifyContent='space-between' pt='10px'>
                                    <Text>{item.alt}</Text>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            New
                                    </Badge>

                                </Box> 
                                <Box>
                                    {item.name}

                                </Box> 
                                <Box display='flex' alignItems='center'>
                                    <Image src={eth} alt='eth'/><Text color='yellowgreen'>10</Text>
                                </Box>   
                            </Box>

                        )
                    })}
                </Grid>
            </SwipeableViews>
            <Box display='flex'  justifyContent="space-between" mt='10px'>
            <Button onClick={prevSlide}>PREVIOUS</Button>
            <Button onClick={nextSlide}>NEXT</Button>
            </Box>
        </Container>
    </VStack>

    )
}
export default NftGrid
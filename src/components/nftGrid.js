import {
  Box,
  Container,
  Image,
  Flex,
  Text,
  Badge,
  Grid,
  Button,
  VStack,
  Stack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { nftItems, nftsScroll } from "../Data/nfts"
import eth from "../images/eth.png"
import SwipeableViews from "react-swipeable-views"
function NftGrid() {
  const [slideIndex, setSlideIndex] = useState(0)
  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0)
    } else setSlideIndex(1)
  }

  const nextSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0)
    } else setSlideIndex(1)
  }

  return (
    <VStack>
      <Container maxW='md' centerContent>
        <Text color='#D7C19A' fontSize='2xl'>
          Discover+
        </Text>
        <Flex align='center' justify='center'>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
          >
            Discover Items
          </Text>
        </Flex>
      </Container>
      <Stack
        direction='row'
        justify='space-evenly'
        align='center'
        pt='1%'
        w='55%'
        pb={4}
      >
        <Button colorScheme='teal' variant='outline'>
          Art
        </Button>
        <Button colorScheme='yellow' variant='ghost'>
          Gaming
        </Button>
        <Button colorScheme='purple' variant='solid'>
          Virtual Worlds
        </Button>
        <Button colorScheme='teal' variant='link'>
          Photograpy
        </Button>
        <Button colorScheme='blue' variant='solid'>
          Music
        </Button>
      </Stack>

      <Container maxW='75%'>
        <SwipeableViews enableMouseEvents index={slideIndex}>
          <Grid gap={2} templateColumns='1fr 1fr 1fr 1fr' justify='center'>
            {nftItems.map((item) => {
              return (
                <Box
                  key={item.id}
                  p={5}
                  bg='#24232D'
                  borderRadius={10}
                  justify='center'
                >
                  <Box justify='center' w='100%'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      boxSize='250px'
                      objectFit='cover'
                    />
                  </Box>
                  <Box
                    display='flex'
                    alignItems='baseline'
                    justifyContent='space-between'
                    pt='10px'
                  >
                    <Text>{item.alt}</Text>
                    <Badge
                      borderRadius='full'
                      px='2'
                      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    >
                      Buy
                    </Badge>
                  </Box>
                  <Box>{item.name}</Box>
                  <Box display='flex' alignItems='center'>
                    <Image src={eth} alt='eth' />
                    <Text color='yellowgreen'>10</Text>
                  </Box>
                </Box>
              )
            })}
          </Grid>
          <Grid gap={2} templateColumns='1fr 1fr 1fr 1fr' justify='center'>
            {nftsScroll.map((item) => {
              return (
                <Box key={item.id} p={5} bg='#24232D' borderRadius={10}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width='200px'
                    height='230px'
                    objectFit='cover'
                  />
                  <Box
                    display='flex'
                    alignItems='baseline'
                    justifyContent='space-between'
                    pt='10px'
                  >
                    <Text>{item.alt}</Text>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                    </Badge>
                  </Box>
                  <Box>{item.name}</Box>
                  <Box display='flex' alignItems='center'>
                    <Image src={eth} alt='eth' />
                    <Text color='yellowgreen'>10</Text>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </SwipeableViews>
        <Box display='flex' justifyContent='space-between' mt='10px'>
          <Button variant='outline' onClick={prevSlide}>
            PREVIOUS
          </Button>
          <Button variant='outline' onClick={nextSlide}>
            NEXT
          </Button>
        </Box>
      </Container>
    </VStack>
  )
}
export default NftGrid

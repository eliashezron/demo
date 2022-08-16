import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { nftItemsBotton } from "../Data/nfts"
import { FiTwitter } from "react-icons/fi"
import { TbBrandWhatsapp, TbBrandDiscord } from "react-icons/tb"

const RoadMap = () => {
  return (
    <Stack pb={5} mt={10}>
      <Container maxW='80%' centerContent width='80%'>
        <Text fontSize='5xl' color='white'>
          Where Will the Funds Go?
        </Text>
        <Text fontSize='2xl' color='white' mt={2} textAlign='center'>
          100% of earnings will be used to fund activities aimed<br></br> at
          encouraging developers to build on web3
        </Text>
      </Container>
      <Stack
        direction='row'
        justify='space-evenly'
        align='center'
        pt='5%'
        w='100%'
        pb={4}
      >
        <Flex gap={4}>
          {nftItemsBotton.map((item) => {
            return (
              <Box key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  boxSize='180px'
                  objectFit='cover'
                />
              </Box>
            )
          })}
        </Flex>
      </Stack>
      <Center pt={5}>
        <Flex gap={5}>
          <Box>
            <a
              href='https://twitter.com/0Xblockbunch'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiTwitter size='50px' />
            </a>
          </Box>
          <Box>
            <TbBrandDiscord size='50px' />
          </Box>
          <Box>
            <a
              href='https://api.whatsapp.com/send?phone=+779177900&amp;text=Hi there! I saw this on your webApplication, i would like to inquire :)'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TbBrandWhatsapp size='50px' />
            </a>
          </Box>
        </Flex>
      </Center>
    </Stack>
  )
}

export default RoadMap

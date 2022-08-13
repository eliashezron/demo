import { Box, Container,Image, Flex, Text, Badge, Grid } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { nftItems } from "../Data/nfts"
import SwipeableViews from 'react-swipeable-views';
function NftGrid(){
    useEffect(()=>{
        console.log(nftItems)
    })
    return(
        <Container maxW='75%'>
                <Grid gap={10} templateColumns='1fr 1fr 1fr 1fr' justify="center">
                    {nftItems.map((item) => {
                        console.log(item.id)
                        return (
                            <Box key={item.id} p={5} bg='#3C3C3C' borderRadius={10}>
                                <Image src={item.image} alt={item.alt}  boxSize='200px'
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
                                <Box>
                                    $10
                                </Box>   
                            </Box>

                        )
                    })}
                </Grid>
        </Container>
    )
}
export default NftGrid
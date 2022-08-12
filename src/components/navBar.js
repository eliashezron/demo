import { Button, Stack } from "@chakra-ui/react"
import React from "react"
import './navBar.css'

const NavBar=()=>{
    return(
        <Stack>
        <div  className="navbar">
            <div className="logo">BlockBunch</div>
            <div className="walletConnect">
                <Button colorScheme='yellow' size='lg'>
                Connect Wallet
                </Button>
            </div>
        </div>
        </Stack>
    )
}
export default NavBar

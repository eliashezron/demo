import { Button } from "@chakra-ui/react"
import React from "react"
import './navBar.css'

const NavBar=()=>{
    return(
        <div  className="navbar">
            <div className="logo">Navbar</div>
            <div className="walletConnect">
                <Button colorScheme='yellow' size='lg'>
                Connect Wallet
                </Button>
            </div>
        </div>
    )
}
export default NavBar

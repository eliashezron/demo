import { Container, Heading, Flex, Spacer, Text,  Avatar, Stack,Button, Box, Menu, MenuButton, MenuList, MenuItem, Grid } from "@chakra-ui/react";
import { useMoralis,useMoralisCloudFunction} from "react-moralis";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import {ErrorBox} from './components/Error'

function App() {
  const { authenticate, isAuthenticating, isAuthenticated, logout, user, isAuthUndefined, authError } = useMoralis();
  const { fetch } = useMoralisCloudFunction(
    "getUsers", { autoFetch: false }
    );
  function Users(){    
      fetch({
        onSuccess: (data) => console.log(data)
      });
      
  }
  if (isAuthenticated){
    return (
      <Container>
        <div>
          <Button onClick={()=>Users()}>getUsers</Button>
          <Button>Logout</Button>
        </div>
      </Container>
    )
  }
  
  
  return (
    
      <Stack spacing={6}>
        {authError && (<ErrorBox title="Authentication has failed!" message={authError.message} />)}
        <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate via Metamask</Button>
    </Stack>
    
  );
}

export default App;
import { Container, Heading, Flex, Spacer, Text,  Avatar, Stack,Button, Box, Menu, MenuButton, MenuList, MenuItem, Grid } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import {ErrorBox} from './components/Error'

function App() {
  const { authenticate, isAuthenticating, isAuthenticated, logout, user, isAuthUndefined, authError } = useMoralis();
if (isAuthenticated){
    return (
      <Container>
        <div>
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
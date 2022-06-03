import { Container, Heading, Flex, Spacer, Avatar, Box, Menu, MenuButton, MenuList, MenuItem, Grid } from "@chakra-ui/react";
import { ByMoralis, useMoralis } from "react-moralis";
import { Auth } from './components/Auth';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();

  return (
    <Container>
      <Flex my={3}>
        <Link to="/"><Heading>Home</Heading></Link>
        <Spacer />
        {isAuthenticated && <Menu>
          <MenuButton as={Grid} ><Avatar name={user.attributes.username} /></MenuButton>
          <MenuList>
            <MenuItem minH="32px"><Link to="/profile"><Grid>My profile</Grid></Link></MenuItem>
            <MenuItem minH="32px" onClick={() => logout()}>Logout</MenuItem>
          </MenuList>
        </Menu>}
      </Flex>
      <hr />

      <Heading my={3}>Welcome, {user ? user.attributes.username : ' authenticate please..'}</Heading>
      {isAuthenticated ? <Routes>
        <Route path="/" exact><Home /></Route>
        <Route path="/profile" exact><Profile /></Route>
      </Routes> : <>
        {!isAuthUndefined && <Navigate replace to="/" />}
        <Auth />
      </>}
      <Box mt={6}><ByMoralis width={150} variant="colour" /></Box>
    </Container>
  );
}

export default App;
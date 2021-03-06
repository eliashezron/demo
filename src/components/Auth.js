import { Stack, Button, Input, Text, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";

const SignUp = () => {
    const { signup } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Stack spacing={3}>
        <Input placeholder="Email" value={email} onChange={event => setEmail(event.currentTarget.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={event => setPassword(event.currentTarget.value)} />
        <Button onClick={() => signup(email, password, email)}>Sign up</Button>
        </Stack>
    );
}
  
const Login = () => {
    const { login } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
      <Stack spacing={3}>
        <Input placeholder="Email" value={email} onChange={event => setEmail(event.currentTarget.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={event => setPassword(event.currentTarget.value)} />
        <Button onClick={() => login(email, password)}>Login</Button>
      </Stack>
    );
}

export const Auth = () => {
    const { authenticate, isAuthenticated, isAuthenticating, authError, logout} = useMoralis();

    return <Stack spacing={6}>
        {authError && (<ErrorBox title="Authentication has failed!" message={authError.message} />)}
        <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate via Metamask</Button>
        <Text textAlign="center"><em>or</em></Text>
        <Login />
        <Text textAlign="center"><em>or</em></Text>
        <SignUp />
    </Stack>
}
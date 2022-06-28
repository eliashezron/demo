import { Container, Stack,Button} from "@chakra-ui/react";
import { useMoralis,useWeb3ExecuteFunction} from "react-moralis";
import {ErrorBox} from './components/Error'

function App() {
  const abi = [  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
  const abiApprove = [{
    "constant": false,
    "inputs": [
        {
            "name": "_spender",
            "type": "address"
        },
        {
            "name": "_value",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}]
  const { authenticate, isAuthenticating, isAuthenticated, authError, logout } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  async function Deposit() {
    console.log("button clicked");
    let optionsApprove = {
      contractAddress: "0x0bC5A7d14A530D13CabD90f1c6b719C2D484357A",
      functionName: "approve",
      abi: abiApprove,
      params: {
        spender: "0x470B2d6Ba304b124128c0a51b920996f06ABE426",
        amount: 5000000000000000000000,
      }}
      await contractProcessor.fetch({
        params: optionsApprove,
        onSuccess: () => {
          console.log("success");
        },
        onError: (error) => {
          alert(error.data);
        },
      })
    let options = {
      contractAddress: "0x470B2d6Ba304b124128c0a51b920996f06ABE426",
      functionName: "deposit",
      abi: abi,
      params: {
        _token: "0x0bC5A7d14A530D13CabD90f1c6b719C2D484357A",
        _amount: 5000000000000000000000,
      },
    };
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("success");
      },
      onError: (error) => {
        alert(error.data.message);
      },
    });
  }
  if (isAuthenticated){
    return (
      <Container>
        <div>
          <Button onClick={()=>Deposit()}>Deposit</Button>
          <Button onClick={()=>logout()}>Logout</Button>
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
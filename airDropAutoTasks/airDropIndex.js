const { main } = require("./airDropAutotask")
const RECIPIENT = "0xdB01d94217308046a792D864b16A35837aa52B86"
const { ethers } = require("ethers")
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers")
const apiKey = process.env.DEFENDER_API_KEY
const apiSecret = process.env.DEFENDER_API_SECRET
const creds = { apiKey, apiSecret }
const provider = new DefenderRelayProvider(creds)
const signer = new DefenderRelaySigner(creds, provider, {
  speed: "fastest",
  gasLimit: 100000,
})
const recipient = RECIPIENT
const amount = ethers.utils.parseEther("0.001")
const fake_storage = { get: () => false, put: () => {} }
main(recipient, signer, fake_storage)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const ABI = [
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]
const CONTRACT = "0x8d45908176da1CF4222EaB88a5354A3AdD9a01A6"

const { ethers } = require("ethers")
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers")

/**
 * @param {string} recipient  recipient address
 * @param {ethers.signer} signer ethers signer for sending transaction
 * @param {string} contract contract address
 * @param {keyValueStorageClient} storage storage for tracking airdrop recipients
 */

async function main(recipient, signer, storage) {
  const key = `airdrop-recipients/${CONTRACT}/${recipient}`
  if (await storage.get(key)) {
    console.log(`address ${recipient} already recieved the airdrop`)
    return
  }
  const contract = new ethers.Contract(CONTRACT, ABI, signer)
  const tx = await contract.mint(recipient)
  await tx.wait(1)
  await storage.put(key, "minted")
  console.log(
    `transaction successfull with ${recipient}, the transaction reciet is ${tx.hash}`
  )
}
// entry point for autotask

exports.handler = async function (params) {
  const provider = new DefenderRelayProvider(params)
  const signer = new DefenderRelaySigner(params, provider, { speed: "fast" })
  const { keyValueStorageClient } = require("defender-kvstore-client")
  const storage = keyValueStorageClient(params)
  const [event] = params.request.body.matchReasons
  const recipient = event.params.to

  await main(recipient, signer, storage)
}
// exported for runing locally
exports.main = main

// rrelayer address =0x4baa1f228ce91cf93d58dddaaa7479557f52bccf
// relayer apiKey = vk3DKZmnXerKieRbR4MssqvXd4HUDGe7
// relayer secretkey = 3qXNGk9To2xfpg7L74s7kfVQy41nLhmNpbwSAYJj9pdSRQ9Gf7M2oqp6K5uk3CGv

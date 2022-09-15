import axios from "axios"
import fs from "fs"
import mime from "mime"
import path from "path"
const __dirname = path.resolve()

let ipfsArray = []
let promises = []

for (let i = 1; i < 12; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/src/images/metadata.json`, (err, data) => {
        if (err) rej()
        let metadata = JSON.parse(data)
        ipfsArray.push({
          path: `${i}`,
          content: {
            image: `ipfs://bafybeib2jc5q4bxlsrq2q4abixueh4fevwk5gnbfkp2d2nrbhkxm7izqg4/${i}.png`,
            tokenId: i,
            name: `Dev Apes # ${i}`,
            attributes: metadata.attributes,
          },
        })
        res()
      })
    })
  )
}
Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        accept: "application/json",
        "X-API-KEY": process.env.REACT_APP_MORALIS_API_KEY,
        "Content-Type": "application/json ",
      },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
})
// METADATA CID = Qme5on2iEhVMGSeBPu5AAZ7vdVL8RNwLRczrzfptgs1s5m

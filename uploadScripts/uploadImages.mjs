import { NFTStorage, File, Blob } from "nft.storage"
import mime from "mime"
import fs from "fs"
import path from "path"
const __dirname = path.resolve()
let ipfsArray = []
let promises = []
const NFT_STORAGE_KEY = process.env.REACT_APP_NFT_STORAGE_API_KEY

const client = new NFTStorage({ token: NFT_STORAGE_KEY })

for (let i = 1; i <= 12; i++) {
  promises.push(
    new Promise(async (res, rej) => {
      const image = ipfsArray.push(
        new File(
          [await fs.promises.readFile(`${__dirname}/src/images/nft${i}.png`)],
          `${i}.png`,
          { type: "image/png" }
        )
      )
      if (image) {
        res(console.log("worked", i))
      } else {
        rej(Error("It broke"))
      }
    })
  )
}
Promise.all(promises).then(async () => {
  const cid = await client.storeDirectory([...ipfsArray])
  console.log(cid)
})

// CID = bafybeib2jc5q4bxlsrq2q4abixueh4fevwk5gnbfkp2d2nrbhkxm7izqg4

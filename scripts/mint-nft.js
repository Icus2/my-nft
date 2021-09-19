require("dotenv").config();
const url=  "https://eth-rinkeby.alchemyapi.io/v2/sPEPghu8Pt8jZzhlI1jiq3rJKQR7Ze5p";
const PUBLIC_KEY = "0x279D62964cb0d5B73eE6acfEB2A57bC25082B3e5";
const PRIVATE_KEY = "745269b64806acfc5e5e7a5ab013bed7bb87182dca3cb22d8a5eecac728c0121";
const { createAlchemyWeb3} =require("@alch/alchemy-web3");
const web3 =   createAlchemyWeb3("wss://eth-rinkeby.alchemyapi.io/v2/sPEPghu8Pt8jZzhlI1jiq3rJKQR7Ze5p",);
//const web3 =  Web3(url);



const contract =require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress = "0x279D62964cb0d5B73eE6acfEB2A57bC25082B3e5";

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI){
    const nonce = await (await web3.eth.getTransactionCount(PUBLIC_KEY,'latest'));

    //the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': 12,
        'gas': 500000,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
      }

      const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log(" Promise failed:", err)
    })
}

mintNFT("https://gateway.pinata.cloud/ipfs/QmW1rSX7FxCBKaVUnHiJAGUdEZDTdeB1KXySafyuBmDhSd")





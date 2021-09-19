const { createAlchemyWeb3} =require("@alch/alchemy-web3");
const web3 =   createAlchemyWeb3("wss://eth-rinkeby.alchemyapi.io/v2/sPEPghu8Pt8jZzhlI1jiq3rJKQR7Ze5p",);

const PUBLIC_KEY = "0x279D62964cb0d5B73eE6acfEB2A57bC25082B3e5";
const nonce = web3.eth.getTransactionCount(PUBLIC_KEY,'latest');
console.log(JSON.stringify(nonce))
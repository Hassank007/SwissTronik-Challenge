const { ethers } = require("hardhat");

async function main() {
    const Token = await ethers.getContractFactory("Token");
    const myToken = await Token.deploy();

    let address = await myToken.getAddress();

    console.log("Contract deployed to:", address);

    const [account] = await ethers.getSigners();
    console.log("Minting 100 tokens to", account.address);
const value = ethers.parseEther("100")
    await myToken.mint(account.address, value);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

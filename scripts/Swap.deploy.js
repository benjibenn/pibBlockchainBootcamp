const hre = require("hardhat");

const main = async() => {
    const Swap   = await ethers.getContractFactory('Swap');
    token               = await Swap.deploy();

    console.log(`Deployed address: ${token.address}`);
};

main().then(() => process.exit(0))
.catch(e => {
    console.log(e);
    process.exit(1);
})

// npx hardhat verify --network rinkeby 0xBa367300306719a98c5D758fc6E96d385437e9AE

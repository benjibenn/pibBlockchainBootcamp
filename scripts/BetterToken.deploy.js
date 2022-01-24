const hre = require("hardhat");

const main = async() => {
    const SimpleToken   = await ethers.getContractFactory('BetterToken');
    token               = await SimpleToken.deploy('100');

    console.log(`Deployed address: ${token.address}`);
};

main().then(() => process.exit(0))
.catch(e => {
    console.log(e);
    process.exit(1);
})


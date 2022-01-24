const { expect } = require("chai");
const { ethers } = require("hardhat");
const {parseEther} = require("ethers/lib/utils");

describe("Swap", function () {
    let token; 
    let owner; 
    let alice;
    let bob;

    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();

        const SimpleToken   = await ethers.getContractFactory('Swap');
        token               = await SimpleToken.deploy();
    });
    
    
    it('Should deploy successfully', async () => {
        const SimpleToken = await ethers.getContractFactory('Swap');
        const token       = await SimpleToken.deploy();
        // expect(token.address).to.not.equal('0x0000000000000000000000000000000000000000');
        console.log(await token.connect(bob).depositEth({value: 1}));
        console.log(await token.connect(bob).getBalanceEth(bob.address));
        console.log(await token.connect(bob).withdrawEth('1'));
        console.log(await token.connect(bob).getBalanceEth(bob.address));
        // console.log(await token.connect(bob).getLatestPriceDai());

    })
});

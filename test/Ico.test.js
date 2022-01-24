const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

describe("Ico", function () {
    let token; 
    let owner; 
    let alice;
    let bob;

    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();

        const SimpleToken   = await ethers.getContractFactory('Ico');
        token               = await SimpleToken.deploy(owner.address);
    });
    
    it('Should deploy successfully', async () => {
        const SimpleToken = await ethers.getContractFactory('Ico');
        const token       = await SimpleToken.deploy(owner.address);
        await alice.sendTransaction({
            value: parseEther("10"),
            to:    token.address
        });
        console.log(alice.balance());
        console.log(await token.connect(alice).mint());
        // expect(token.address).to.not.equal('0x0000000000000000000000000000000000000000');
    })
});

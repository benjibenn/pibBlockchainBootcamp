const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BetterToken", function () {
    let token; 
    let owner; 
    let alice;
    let bob;

    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();

        const SimpleToken   = await ethers.getContractFactory('BetterToken');
        token               = await SimpleToken.deploy('100');
    });
    
    
    it('Should deploy successfully', async () => {
        const SimpleToken = await ethers.getContractFactory('SimpleToken');
        const token       = await SimpleToken.deploy('100');

        expect(token.address).to.not.equal('0x0000000000000000000000000000000000000000');
    })

    it('Should have the correct owner', async () => {
        expect(await token.owner()).to.equal(owner.address);
    })

    it('Should transfer the correct amount', async () => {
        await token.transfer(alice.address,'10');
        expect(await token.balanceOf(owner.address)).to.eq(90);
        expect(await token.balanceOf(alice.address)).to.eq(10);
    })

    it('Should mint the correct amount', async () => {
        await token.connect(owner).mint(alice.address,'10');

        expect(await token.balanceOf(alice.address)).to.eq(10);
    })

    // it('Should have the correct balance', async () => {
    //     await token.transfer(alice.address,'10');

    //     await token.connect(alice).transfer(bob.address,'10');

    //     // console.log(await token.connect(alice).myBalance());
    //     expect(await token.connect(alice).balanceOf()).to.eq('0');
    //     expect(await token.connect(bob).balanceOf()).to.eq('10');
    // })

    // it('Should allow non owner to mint', async () => {
    //     await expect(token.connect(alice).mint(alice.address,10)).to.be.revertedWith("Ownable: caller is not the owner");
    //     expect(await token.balanceOf(alice)).to.eq('0');
    // })


});

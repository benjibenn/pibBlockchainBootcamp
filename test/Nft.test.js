const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mlm", function () {
    let token; 
    let owner; 
        
    beforeEach(async () => {
        [owner] = await ethers.getSigners();
        const SimpleToken   = await ethers.getContractFactory('Mlm');
        token               = await SimpleToken.deploy(owner.address);
    });
    
    it('Should deploy successfully', async () => {
        const SimpleToken = await ethers.getContractFactory('Mlm');
        const token       = await SimpleToken.deploy(owner.address);
    })
});

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mlm", function () {
    let token; 
    let owner; 
    let member1;
    let member2;
    let member3;
    let member4;
    let member5;
    let member6;
    let member7;
    let member8;
    let member9;
    let member10;
    let member11;
    let member12;
    let member13;
    let member14;
    let member15;
    let member16;
    let member17;

    
    
    

    beforeEach(async () => {
        [owner, member1, member2,member3,member4,member5,member6,member7,member8,member9,member10,member11,member12,member13,member14,member15,member16,member17
        ] = await ethers.getSigners();
        const SimpleToken   = await ethers.getContractFactory('Mlm');
        token               = await SimpleToken.deploy(owner.address);
    });
    
    it('Should deploy successfully', async () => {
        const SimpleToken = await ethers.getContractFactory('Mlm');
        const token       = await SimpleToken.deploy(owner.address);
        // expect(await token.currUserId()).to.equal(1);
        // expect(await token.balances(owner.address)).to.equal(100);
        // expect(token.owner()).to.equal(owner.address);
    })

    it('Should register a downline', async () => {
        await token.connect(member1).register(owner.address);
        await token.connect(member2).register(owner.address);
        await token.connect(member3).register(owner.address);
        await token.connect(member4).register(owner.address);
        await token.connect(member5).register(owner.address);
        await token.connect(member6).register(owner.address);
        await token.connect(member7).register(owner.address);
        await token.connect(member8).register(owner.address);
        await token.connect(member9).register(owner.address);
        await token.connect(member10).register(owner.address);
        await token.connect(member11).register(owner.address);
        await token.connect(member12).register(owner.address);
        await token.connect(member13).register(owner.address);
        await token.connect(member14).register(owner.address);
        await token.connect(member15).register(owner.address);
        await token.connect(member16).register(owner.address);
        await token.connect(member17).register(owner.address);
        console.log(await token.planB(0));
        console.log(await token.planB(1));
        console.log(await token.planB(2));
        console.log(await token.planB(3));
        console.log(await token.planB(4));
        console.log(await token.planB(5));
        console.log(await token.planB(6));
        console.log(await token.planB(7));
        console.log(await token.planB(8));
        console.log(await token.planB(9));
        console.log(await token.planB(10));
        console.log(await token.planB(11));
        console.log(await token.planB(12));
        console.log(await token.planB(13));
        // console.log(await token.planB(14));
        // console.log(await token.planB(15));
        // console.log(await token.planB(16));
console.log('---------------- Balance --------------');
        console.log(await token.balances(owner.address));
        console.log(await token.balances(member1.address));
        console.log(await token.balances(member2.address));
        console.log(await token.balances(member3.address));
        console.log(await token.balances(member4.address));
        console.log(await token.balances(member5.address));
        console.log(await token.balances(member6.address));
        console.log(await token.balances(member7.address));
        console.log(await token.balances(member8.address));
        console.log(await token.balances(member9.address));
        console.log(await token.balances(member10.address));
        console.log(await token.balances(member11.address));
        console.log(await token.balances(member12.address));
        console.log(await token.balances(member13.address));
        console.log(await token.balances(member14.address));
        console.log(await token.balances(member15.address));
        console.log(await token.balances(member16.address));



        // expect(await token.currUserID).to.eq(2);
        // expect(await token.balanceOf(alice.address)).to.eq(10);
    })


    // it('Should have the correct owner', async () => {
    //     expect(await token.owner()).to.equal(owner.address);
    // })

    // it('Should transfer the correct amount', async () => {
    //     await token.transfer(alice.address,'10');
    //     expect(await token.balanceOf(owner.address)).to.eq(90);
    //     expect(await token.balanceOf(alice.address)).to.eq(10);
    // })

    // it('Should mint the correct amount', async () => {
    //     await token.connect(owner).mint(alice.address,'10');

    //     expect(await token.balanceOf(alice.address)).to.eq(10);
    // })

    // // it('Should have the correct balance', async () => {
    // //     await token.transfer(alice.address,'10');

    // //     await token.connect(alice).transfer(bob.address,'10');

    // //     // console.log(await token.connect(alice).myBalance());
    // //     expect(await token.connect(alice).balanceOf()).to.eq('0');
    // //     expect(await token.connect(bob).balanceOf()).to.eq('10');
    // // })

    // it('Should allow non owner to mint', async () => {
    //     await expect(token.connect(alice).mint(alice.address,10)).to.be.revertedWith("Ownable: caller is not the owner");
    //     expect(await token.balanceOf(alice)).to.eq('0');
    // })


});

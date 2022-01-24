// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    mapping(address => Account) public accounts;

    uint8 interestRate = 12;
// Plan a max 2, 3rd person will jump to plan b
// Plan b max 3 downline before moving to person under current target

// 1 check plan a count
// If more than 2, 3rd person go into plan b
// Check plan b count, if empty then slot in plan a upline
// If not empty, check current size, if size 

    struct Account 
    {
        uint256 principal;
        uint256 interest;
        uint start;
        string line;
    }

    function deposit(uint256 _amount) public 
    {
        Account storage newAccount  = accounts[msg.sender];
        newAccount.principal        += _amount;
        newAccount.interest         = 0;
        newAccount.start            = newAccount.start != 0 ? newAccount.start : block.number;
    }

    function withdraw(uint256 _amount) public 
    {
        Account storage acc  = accounts[msg.sender];
        require(acc.principal >= _amount,"not enough");
        acc.principal        -= _amount;
    }


    function balance() public view returns(uint reward){
        Account storage acc  = accounts[msg.sender];
        reward               = acc.principal * (block.number - acc.start)*((interestRate/100)/4);
        return (block.number);
    }

}
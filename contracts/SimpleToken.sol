//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract SimpleToken {
    mapping ( address => uint256) public balances;
    uint256 public totalSupply;
    address public owner;

    constructor( uint _totalSupply )
    {
        owner = msg.sender;
        totalSupply = _totalSupply;
        balances[owner] = totalSupply;
    }

    function transfer(address _to, uint256 _amount ) public {
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function myBalance() external view returns (uint){
        return balances[msg.sender];
    }

    function mint(address _to, uint256 _amount ) public {
        balances[_to] += _amount;
        totalSupply     += _amount;
    }
}

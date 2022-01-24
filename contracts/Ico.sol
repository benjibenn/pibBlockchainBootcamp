//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ico {
    // string private greeting;
    address payable ethVault;
    address token;
    uint exchange = 25;
    constructor(address _owner) {
        ethVault = payable(_owner);
    }

// function setToken(address _token) external onlyOwner {
//     token = _token;
// }
    receive() payable external{
        // return false;
        address(this).call{value:msg.value}(abi.encodeWithSignature(("buy")));
        this.mint();
    }

    function mint() public payable{
        // address _receiver = msg.sender;
        // Take tokens
        uint amount = msg.value;
        // console.log('msg.value');
        console.log(msg.value);
        // Calculate shitcoin to give
        uint token = amount * exchange;
        // Transfer
        transfer(token);
    }

    function transfer(uint _amount) public payable {
        payable(msg.sender).transfer(_amount);
    }
}

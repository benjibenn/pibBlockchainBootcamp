// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BetterToken is Ownable, ERC20 {
    constructor(uint256 initialSupply) ERC20("Better", "BTT") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount)
    external{
        _mint(to, amount);
    }

}
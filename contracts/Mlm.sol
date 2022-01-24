// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "hardhat/console.sol";
contract Mlm {
    struct User {
        uint id;
        uint upline;
        uint bStatus;
    }

    mapping(address => uint256) public balances;
    mapping(uint256 => address) public findAddressById;
    mapping(address => uint[]) public planA;
    mapping(address => uint) public totalDownline;
    mapping(address => User) public userMapping;
    address payable owner;
    uint public currUserId = 0;
    uint public uplinepercent = 1000;
    uint public downlinepercent = 9000;
    uint[] public planB;
    uint[] public planBMain;
    uint public pointer;

   constructor(address payable _owner) {
        owner                       = _owner;
        currUserId ++;
        User storage currentUser    = userMapping[_owner];
        currentUser.id              = currUserId;
        currentUser.upline          = currUserId;
        currentUser.bStatus         = 0;
        userMapping[_owner]       = currentUser;
        balances[_owner]          = 100;
        findAddressById[currUserId] = _owner;
    }
    
    function register(address _referrer) public {
        User storage upline      = userMapping[_referrer];
        User storage currentUser = userMapping[msg.sender];
        require(currentUser.id == 0,"User already has an upline");
        currUserId ++;

        currentUser.id      = currUserId;
        currentUser.upline  = upline.id;
        currentUser.bStatus = 0;

        planA[_referrer].push(currUserId);
        findAddressById[currUserId] = msg.sender;

        totalDownline[_referrer]++;

        if(totalDownline[_referrer] > 2)
        {
            if(planB.length < 1){
                planB.push(currentUser.upline);
                planBMain.push(currentUser.upline);
                pointer = 1;
            }
            if(planB.length % 4 == 0 && planB.length != 0){
                pointer += 3;
                uint latest = planB[planB.length - pointer];
                planB.push(latest);
                planBMain.push(latest);
            }
            else{
                planB.push(currUserId);
            }
        }
        else
        {
            transfer(10,_referrer);
            transfer(90,msg.sender);
        }
    }

    function transfer(uint _amount,address _receiver) public {
        balances[_receiver] += _amount;
    }

    function transferID(uint _amount,uint _receiver) public {
        address receiver = findAddressById[_receiver];
        balances[receiver] += _amount;
    }
}
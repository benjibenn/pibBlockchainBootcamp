pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Swap{
    mapping(address => uint256) private ethBalance;
    mapping(address => uint256) private linkBalance;
    address constant linkAddress = 0x01BE23585060835E02B77ef475b0Cc51aA1e0709;
    AggregatorV3Interface internal priceFeedEth;
    AggregatorV3Interface internal priceFeedLink;

    constructor() {
        priceFeedEth = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        priceFeedLink = AggregatorV3Interface(0xd8bD0a1cB028a31AA859A21A3758685a95dE4623);
    }


    function getBalanceEth(address getter) public view returns (uint256)
	{
		return ethBalance[getter];
	}

	function getBalanceLink(address getter) public view returns (uint256)
	{
		return linkBalance[getter];
	}


    /**
     * Returns the latest price
     */
    function getLatestPriceEth() public view returns (int)
	{
		(
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeedEth.latestRoundData();
        return price;
	}

    function getLatestPriceLink() public view returns (int)
	{
		(
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeedLink.latestRoundData();
        return price;
	}


    function depositEth() public payable {
        ethBalance[msg.sender] += msg.value; 
    }

    function depositLink(uint256 amount) public payable {
        IERC20 link = IERC20(linkAddress);
        require(link.balanceOf(msg.sender) >= amount, "Link balance not enough");
        link.transferFrom(msg.sender, address(this), amount);
        linkBalance[msg.sender] += msg.value; 
    }

    function withdrawEth(uint256 amount) public {
        require(ethBalance[msg.sender] >= amount,"Eth balance not enough");
        ethBalance[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function withdrawLink(uint256 amount) public {
        IERC20 link = IERC20(linkAddress);
        require(linkBalance[msg.sender] >= amount, "Link balance not enough");
		linkBalance[msg.sender] -= amount;
        link.transfer(msg.sender, amount);
    }   
}


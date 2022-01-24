pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Swap{
    mapping(address => uint256) private ethBalance;
    mapping(address => uint256) private daiBalance;
    address constant daiAddress = 0x95b58a6Bff3D14B7DB2f5cb5F0Ad413DC2940658;
    AggregatorV3Interface internal priceFeedEth;
    AggregatorV3Interface internal priceFeedDai;

    constructor() {
        priceFeedEth = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        priceFeedDai = AggregatorV3Interface(0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF);
    }


    function getBalanceEth(address getter) public view returns (uint256)
	{
		return ethBalance[getter];
	}

	function getBalanceDai(address getter) public view returns (uint256)
	{
		return daiBalance[getter];
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

    function getLatestPriceDai() public view returns (int)
	{
		(
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeedDai.latestRoundData();
        return price;
	}


    function depositEth() public payable {
        ethBalance[msg.sender] += msg.value; 
    }

    function depositDai(uint256 amount) public payable {
        IERC20 dai = IERC20(daiAddress);
        require(dai.balanceOf(msg.sender) >= amount, "Dai balance not enough");
        dai.transferFrom(msg.sender, address(this), amount);
        daiBalance[msg.sender] += msg.value; 
    }

    function withdrawEth(uint256 amount) public {
        require(ethBalance[msg.sender] >= amount,"Eth balance not enough");
        ethBalance[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function withdrawDai(uint256 amount) public {
        IERC20 dai = IERC20(daiAddress);
        require(daiBalance[msg.sender] >= amount, "Dai balance not enough");
		daiBalance[msg.sender] -= amount;
        
        dai.transfer(msg.sender, amount);
    }   
}


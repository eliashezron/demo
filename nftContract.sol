// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DeveloperApes is ERC721, Ownable {
    using Counters for Counters.Counter;
    string public _baseURL;
    uint256 public mintPrice = 20; //USD

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("DevApes", "DVA") {}

    function Mint() external payable {
        require(msg.value >= mintingFee(), "Insufficient funds in your wallet");
        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId);
        _tokenIdCounter.increment();
    }

    function setBaseURL(string memory baseURI) public onlyOwner {
        _baseURL = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseURL;
    }

    function setPrice(uint256 _price) public onlyOwner {
        mintPrice = _price;
    }

    function getLatestPrice() public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        // for eth usd, the price is scale up by 10**8
        return uint256(price / 1e8);
    }

    function mintingFee() public view returns (uint256) {
        uint256 price = getLatestPrice();
        uint256 mintEthPrice = (mintPrice * 10**18) / price;
        return mintEthPrice;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }
}

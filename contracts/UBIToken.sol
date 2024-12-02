// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./VoterToken.sol";

contract UBIToken is ERC20, Ownable {
    VoterToken public voterToken;
    uint256 public ubiAmount;
    uint256 public lastDistribution;

    mapping(address => bool) public hasClaimed;

    event UBIClaimed(address indexed member, uint256 amount, uint256 timestamp);

    constructor(address voterTokenAddress, uint256 _ubiAmount)
        ERC20("UBIToken", "UBI")
        Ownable(msg.sender)
    {
        voterToken = VoterToken(voterTokenAddress);
        ubiAmount = _ubiAmount;
        lastDistribution = block.timestamp;
    }

    function distributeUBI() public onlyOwner {
        require(block.timestamp >= lastDistribution + 30 days, "UBI distribution period not reached");

        for (uint256 i = 0; i < voterToken.nextTokenId(); i++) {
            address member = voterToken.ownerOf(i);
            if (!hasClaimed[member]) {
                _mint(member, ubiAmount);
                emit UBIClaimed(member, ubiAmount, block.timestamp);
                hasClaimed[member] = true;
            }
        }

        lastDistribution = block.timestamp;

        for (uint256 i = 0; i < voterToken.nextTokenId(); i++) {
            address member = voterToken.ownerOf(i);
            hasClaimed[member] = false;
        }
    }

    function updateUBIAmount(uint256 _ubiAmount) public onlyOwner {
        ubiAmount = _ubiAmount;
    }
}
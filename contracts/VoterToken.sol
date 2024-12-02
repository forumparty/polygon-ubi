// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VoterToken is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("VoterToken", "VOTE") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        require(balanceOf(to) == 0, "Member already has a VoterToken");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function isMember(address owner) public view returns (bool) {
        return balanceOf(owner) > 0;
    }
}
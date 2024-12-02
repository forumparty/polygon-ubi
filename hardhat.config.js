require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.27" }, // For Lock.sol
            { version: "0.8.20" }, // For OpenZeppelin contracts
        ],
    },
    networks: {
        polygon: {
            url: process.env.MAINNET_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};

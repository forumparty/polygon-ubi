const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy VoterToken contract
    const VoterToken = await hre.ethers.getContractFactory("VoterToken");
    const voterToken = await VoterToken.deploy(); // Deploy the VoterToken contract
    await voterToken.deployed(); // Wait for deployment to complete
    console.log("VoterToken deployed to:", voterToken.address);

    // Deploy UBIToken contract
    const UBIToken = await hre.ethers.getContractFactory("UBIToken");
    const ubiToken = await UBIToken.deploy(voterToken.address, hre.ethers.utils.parseEther("100")); // Constructor arguments
    await ubiToken.deployed(); // Wait for deployment to complete
    console.log("UBIToken deployed to:", ubiToken.address);
}

// Execute the deployment script
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

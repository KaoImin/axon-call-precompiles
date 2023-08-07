import { ethers } from "hardhat";

// The script did not succeed.
async function main() {
    const GetCell = await ethers.getContractFactory("GetCell");
    const getCell = await GetCell.deploy();
    await getCell.deployed();

    const txHash = "0xb1af175009413bf9670dffb7b120f0eca52896a9798bda123df9b25ff7d8f721";
    const index = 0;

    const res = await (await getCell.testGetCell(txHash, index, {gasLimit: 100000})).wait();
    console.log("res: %o\n", res);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

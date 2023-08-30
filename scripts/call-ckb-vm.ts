import { ethers } from "hardhat";

async function main() {
    const CallCkbVm = await ethers.getContractFactory("CallCkbVm");
    const callCkbVm = await CallCkbVm.deploy();
    await callCkbVm.waitForDeployment();
    console.log("CallCkbVm Contract Address:", await callCkbVm.getAddress());

    // The ed25519 binary is stored in the follwing CKB transaction.
    const txHash = "0xb1af175009413bf9670dffb7b120f0eca52896a9798bda123df9b25ff7d8f721";
    const index = 0;
    const depType = 0;

    const args = [
        new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        new Uint8Array([209, 45, 213, 208, 118, 211, 84, 201, 54, 231, 113, 245, 178, 136, 180, 69, 76, 106, 27, 163, 103, 28, 48, 147, 128, 255, 116, 160, 30, 85, 231, 177, 240, 213, 159, 197, 60, 115, 98, 115, 254, 51, 50, 38, 140, 15, 12, 62, 171, 215, 54, 71, 39, 7, 72, 193, 216, 116, 82, 100, 31, 230, 229, 15]),
        new Uint8Array([70, 60, 17, 132, 4, 95, 202, 82, 134, 230, 36, 5, 51, 71, 14, 236, 107, 214, 42, 238, 115, 44, 183, 210, 54, 214, 174, 60, 189, 86, 220, 247, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]),
    ];

    const res = await (await callCkbVm.testCallCkbVm(
        txHash, index, depType, args, { gasLimit: 50000 })
    ).wait();
    console.log("res: %o\n", res);

    const exitCode = await callCkbVm.callCkbVm();
    console.log("exit code: %d", exitCode);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

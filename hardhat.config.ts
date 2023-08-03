import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const AXON_PRIVATE_KEY = "0x37aa0f893d05914a4def0460c0a984d3611546cfb26924d7a7ca6e0db9950a2d";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        axon: {
            chainId: 2022,
            url: "http://127.0.0.1:8000",
            accounts: [AXON_PRIVATE_KEY],
            allowUnlimitedContractSize: true,
        }
    }
};

export default config;

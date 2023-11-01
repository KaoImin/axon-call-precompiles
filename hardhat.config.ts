import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        axon: {
            url: "http://127.0.0.1:8000",
            // Axon devnet's accounts since the genesis block
            // See https://github.com/axonweb3/axon/blob/88c9a913/devtools/chain/specs/single_node/chain-spec.toml#L18C3-L21
            accounts: {
                mnemonic: "test test test test test test test test test test test junk",
                count: 10, // the number of accounts to derive
            },
            allowUnlimitedContractSize: true,
        }
    }
};

export default config;

# Start Axon

```
git clone git@github.com:axonweb3/axon.git
cd axon
git checkout -b origin/refactor-precompile-input
cargo run -- run -c devtools/chain/config.toml -g devtools/chain/genesis_single_node.json
```

# Start Emitter

```
git clone https://github.com/axonweb3/emitter.git
cd emitter
git checkout joyid-debug
cd emitter
touch scan_state

cargo run -- -s ./ -c https://testnet.ckb.dev --i http://127.0.0.1:8000
```

Register the cell containing ed25519 contract binary.
```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "register",
    "params": [
        {
            "script": {
                "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
                "hash_type": "type",
                "args": "0x58b85c196e5fe80e25b4dab596e7121d219f79fb"
            },
            "script_type": "lock"
        },
        "0x4d7d71"
    ]
}' | curl -H 'content-type: application/json' -d @- http://localhost:8120
```

# Test contract
```
yarn
npx hardhat run scripts/call-ckb-vm.ts --network axon
```

output
```
res: {
  to: '0xC53e7144D3Ca6c921838819Fd897D07a6bC81249',
  from: '0x8ab0CF264DF99D83525e9E11c7e4db01558AE1b1',
  contractAddress: null,
  transactionIndex: 0,
  root: '0x6f6db2d2fe45bbac68cae570fd85268b014bffc99f7b82137004be29b8bec314',
  gasUsed: BigNumber { value: "38875" },
  logsBloom: '0x00000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000020000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x90ceab62212dfb463ad12f513d7ff94f9512acc18382c1de36ede7274bc149e5',
  transactionHash: '0x30797699fc4ba10df03f1f53d42ee303ab6a5ef20980258ed599fc875e730450',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 3775,
      transactionHash: '0x30797699fc4ba10df03f1f53d42ee303ab6a5ef20980258ed599fc875e730450',
      address: '0xC53e7144D3Ca6c921838819Fd897D07a6bC81249',
      topics: [
        '0xddefd4826259da04dce797fbe27bf8cddc75981bd43ef3c76dbde08a1a449374',
        [length]: 1
      ],
      data: '0x0000000000000000000000000000000000000000000000000000000000000000',
      logIndex: 0,
      blockHash: '0x90ceab62212dfb463ad12f513d7ff94f9512acc18382c1de36ede7274bc149e5'
    },
    [length]: 1
  ],
  blockNumber: 3775,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "38875" },
  effectiveGasPrice: BigNumber { value: "38875" },
  status: 1,
  type: 2,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 3775,
      transactionHash: '0x30797699fc4ba10df03f1f53d42ee303ab6a5ef20980258ed599fc875e730450',
      address: '0xC53e7144D3Ca6c921838819Fd897D07a6bC81249',
      topics: [
        '0xddefd4826259da04dce797fbe27bf8cddc75981bd43ef3c76dbde08a1a449374',
        [length]: 1
      ],
      data: '0x0000000000000000000000000000000000000000000000000000000000000000',
      logIndex: 0,
      blockHash: '0x90ceab62212dfb463ad12f513d7ff94f9512acc18382c1de36ede7274bc149e5',
      args: [ 0, [length]: 1 ],
      decode: <ref *1> [Function (anonymous)] {
        [length]: 2,
        [name]: '',
        [prototype]: { [constructor]: [Circular *1] }
      },
      event: 'CallCkbVmEvent',
      eventSignature: 'CallCkbVmEvent(int8)',
      removeListener: <ref *2> [Function (anonymous)] {
        [length]: 0,
        [name]: '',
        [prototype]: { [constructor]: [Circular *2] }
      },
      getBlock: <ref *3> [Function (anonymous)] {
        [length]: 0,
        [name]: '',
        [prototype]: { [constructor]: [Circular *3] }
      },
      getTransaction: <ref *4> [Function (anonymous)] {
        [length]: 0,
        [name]: '',
        [prototype]: { [constructor]: [Circular *4] }
      },
      getTransactionReceipt: <ref *5> [Function (anonymous)] {
        [length]: 0,
        [name]: '',
        [prototype]: { [constructor]: [Circular *5] }
      }
    },
    [length]: 1
  ]
}

exit code: 0
```

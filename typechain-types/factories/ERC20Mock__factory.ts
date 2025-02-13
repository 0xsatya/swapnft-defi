/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approveInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162000fb338038062000fb38339810160408190526200002691620002cf565b8351849084906200003f9060039060208501906200015c565b508051620000559060049060208401906200015c565b5050506200006a82826200007460201b60201c565b50505050620003c6565b6001600160a01b038216620000cf5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000e3919062000362565b90915550506001600160a01b038216600090815260208190526040812080548392906200011290849062000362565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200016a9062000389565b90600052602060002090601f0160209004810192826200018e5760008555620001d9565b82601f10620001a957805160ff1916838001178555620001d9565b82800160010185558215620001d9579182015b82811115620001d9578251825591602001919060010190620001bc565b50620001e7929150620001eb565b5090565b5b80821115620001e75760008155600101620001ec565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200022a57600080fd5b81516001600160401b038082111562000247576200024762000202565b604051601f8301601f19908116603f0116810190828211818310171562000272576200027262000202565b816040528381526020925086838588010111156200028f57600080fd5b600091505b83821015620002b3578582018301518183018401529082019062000294565b83821115620002c55760008385830101525b9695505050505050565b60008060008060808587031215620002e657600080fd5b84516001600160401b0380821115620002fe57600080fd5b6200030c8883890162000218565b955060208701519150808211156200032357600080fd5b50620003328782880162000218565b604087015190945090506001600160a01b03811681146200035257600080fd5b6060959095015193969295505050565b600082198211156200038457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200039e57607f821691505b60208210811415620003c057634e487b7160e01b600052602260045260246000fd5b50919050565b610bdd80620003d66000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac146101ee578063a457c2d714610201578063a9059cbb14610214578063dd62ed3e1461022757600080fd5b806340c10f191461019757806356189cb4146101aa57806370a08231146101bd57806395d89b41146101e657600080fd5b8063222f5be0116100d3578063222f5be01461014d57806323b872dd14610162578063313ce56714610175578063395093511461018457600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610260565b60405161010f91906109fb565b60405180910390f35b61012b610126366004610a6c565b6102f2565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61016061015b366004610a96565b610308565b005b61012b610170366004610a96565b610318565b6040516012815260200161010f565b61012b610192366004610a6c565b6103c7565b6101606101a5366004610a6c565b610403565b6101606101b8366004610a96565b610411565b61013f6101cb366004610ad2565b6001600160a01b031660009081526020819052604090205490565b61010261041c565b6101606101fc366004610a6c565b61042b565b61012b61020f366004610a6c565b610435565b61012b610222366004610a6c565b6104ce565b61013f610235366004610af4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026f90610b27565b80601f016020809104026020016040519081016040528092919081815260200182805461029b90610b27565b80156102e85780601f106102bd576101008083540402835291602001916102e8565b820191906000526020600020905b8154815290600101906020018083116102cb57829003601f168201915b5050505050905090565b60006102ff3384846104db565b50600192915050565b6103138383836105ff565b505050565b60006103258484846105ff565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103af5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103bc85338584036104db565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102ff9185906103fe908690610b78565b6104db565b61040d82826107ce565b5050565b6103138383836104db565b60606004805461026f90610b27565b61040d82826108ad565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104b75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103a6565b6104c433858584036104db565b5060019392505050565b60006102ff3384846105ff565b6001600160a01b03831661053d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103a6565b6001600160a01b03821661059e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103a6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106635760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103a6565b6001600160a01b0382166106c55760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103a6565b6001600160a01b0383166000908152602081905260409020548181101561073d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103a6565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610774908490610b78565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107c091815260200190565b60405180910390a350505050565b6001600160a01b0382166108245760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103a6565b80600260008282546108369190610b78565b90915550506001600160a01b03821660009081526020819052604081208054839290610863908490610b78565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661090d5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103a6565b6001600160a01b038216600090815260208190526040902054818110156109815760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103a6565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109b0908490610b90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060208083528351808285015260005b81811015610a2857858101830151858201604001528201610a0c565b81811115610a3a576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a6757600080fd5b919050565b60008060408385031215610a7f57600080fd5b610a8883610a50565b946020939093013593505050565b600080600060608486031215610aab57600080fd5b610ab484610a50565b9250610ac260208501610a50565b9150604084013590509250925092565b600060208284031215610ae457600080fd5b610aed82610a50565b9392505050565b60008060408385031215610b0757600080fd5b610b1083610a50565b9150610b1e60208401610a50565b90509250929050565b600181811c90821680610b3b57607f821691505b60208210811415610b5c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b8b57610b8b610b62565b500190565b600082821015610ba257610ba2610b62565b50039056fea26469706673582212204d451050ac863762491081808661e7ffdb33e8c210f97104d1dc109f99423a6d64736f6c63430008090033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CNftStorage, CNftStorageInterface } from "../CNftStorage";

const _abi = [
  {
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "is1155",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isCNft",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPunk",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalBalance",
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
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061017e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306f26dc2146100675780635fe3b567146100905780636a11a3d8146100bb5780636eacd398146100cf5780636f307dc3146100fd578063aa80b6cc14610110575b600080fd5b60015461007b90600160a81b900460ff1681565b60405190151581526020015b60405180910390f35b6000546100a3906001600160a01b031681565b6040516001600160a01b039091168152602001610087565b60015461007b90600160a01b900460ff1681565b6100ef6100dd366004610118565b60026020526000908152604090205481565b604051908152602001610087565b6001546100a3906001600160a01b031681565b61007b600181565b60006020828403121561012a57600080fd5b81356001600160a01b038116811461014157600080fd5b939250505056fea2646970667358221220ec16a14da30928b4254b4a6e519bcabb95632d9a5b0c78a92e0940180aedee0864736f6c63430008090033";

type CNftStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CNftStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CNftStorage__factory extends ContractFactory {
  constructor(...args: CNftStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CNftStorage> {
    return super.deploy(overrides || {}) as Promise<CNftStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CNftStorage {
    return super.attach(address) as CNftStorage;
  }
  connect(signer: Signer): CNftStorage__factory {
    return super.connect(signer) as CNftStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CNftStorageInterface {
    return new utils.Interface(_abi) as CNftStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CNftStorage {
    return new Contract(address, _abi, signerOrProvider) as CNftStorage;
  }
}
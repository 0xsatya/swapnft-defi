/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorBravoDelegatorStorage,
  GovernorBravoDelegatorStorageInterface,
} from "../GovernorBravoDelegatorStorage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610106806100206000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063267822471460415780635c60da1b14605b578063f851a440146061575b600080fd5b60476067565b6040516052919060a1565b60405180910390f35b60476076565b60476085565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b031681565b609b8160b3565b82525050565b6020810160ad82846094565b92915050565b60006001600160a01b03821660ad56fea365627a7a72315820ae6b7967a47b1acf4a057c3c674d1e635d57df5eb2a4ff20120af03e2b17fe196c6578706572696d656e74616cf564736f6c63430005100040";

type GovernorBravoDelegatorStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernorBravoDelegatorStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernorBravoDelegatorStorage__factory extends ContractFactory {
  constructor(...args: GovernorBravoDelegatorStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernorBravoDelegatorStorage> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorBravoDelegatorStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorBravoDelegatorStorage {
    return super.attach(address) as GovernorBravoDelegatorStorage;
  }
  connect(signer: Signer): GovernorBravoDelegatorStorage__factory {
    return super.connect(signer) as GovernorBravoDelegatorStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegatorStorageInterface {
    return new utils.Interface(_abi) as GovernorBravoDelegatorStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegatorStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegatorStorage;
  }
}

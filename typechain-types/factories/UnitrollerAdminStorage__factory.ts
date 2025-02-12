/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnitrollerAdminStorage,
  UnitrollerAdminStorageInterface,
} from "../UnitrollerAdminStorage";

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
    name: "comptrollerImplementation",
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
  {
    constant: true,
    inputs: [],
    name: "pendingComptrollerImplementation",
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
  "0x608060405234801561001057600080fd5b5060f08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632678224714604b578063bb82aa5e14606d578063dcfbc0c7146073578063f851a440146079575b600080fd5b6051607f565b604080516001600160a01b039092168252519081900360200190f35b6051608e565b6051609d565b605160ac565b6001546001600160a01b031681565b6002546001600160a01b031681565b6003546001600160a01b031681565b6000546001600160a01b03168156fea265627a7a7231582041f5725b1cd8257cdddd758c1adfb0aedebf914895e33b79351ac8eb26caca3f64736f6c63430005100032";

type UnitrollerAdminStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnitrollerAdminStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnitrollerAdminStorage__factory extends ContractFactory {
  constructor(...args: UnitrollerAdminStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnitrollerAdminStorage> {
    return super.deploy(overrides || {}) as Promise<UnitrollerAdminStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UnitrollerAdminStorage {
    return super.attach(address) as UnitrollerAdminStorage;
  }
  connect(signer: Signer): UnitrollerAdminStorage__factory {
    return super.connect(signer) as UnitrollerAdminStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitrollerAdminStorageInterface {
    return new utils.Interface(_abi) as UnitrollerAdminStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnitrollerAdminStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnitrollerAdminStorage;
  }
}

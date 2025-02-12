/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CNftStorageInterface extends utils.Interface {
  functions: {
    "comptroller()": FunctionFragment;
    "is1155()": FunctionFragment;
    "isCNft()": FunctionFragment;
    "isPunk()": FunctionFragment;
    "totalBalance(address)": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "comptroller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "is1155", values?: undefined): string;
  encodeFunctionData(functionFragment: "isCNft", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPunk", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "comptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "is1155", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isCNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPunk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {};
}

export interface CNftStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CNftStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    comptroller(overrides?: CallOverrides): Promise<[string]>;

    is1155(overrides?: CallOverrides): Promise<[boolean]>;

    isCNft(overrides?: CallOverrides): Promise<[boolean]>;

    isPunk(overrides?: CallOverrides): Promise<[boolean]>;

    totalBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;
  };

  comptroller(overrides?: CallOverrides): Promise<string>;

  is1155(overrides?: CallOverrides): Promise<boolean>;

  isCNft(overrides?: CallOverrides): Promise<boolean>;

  isPunk(overrides?: CallOverrides): Promise<boolean>;

  totalBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  underlying(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    comptroller(overrides?: CallOverrides): Promise<string>;

    is1155(overrides?: CallOverrides): Promise<boolean>;

    isCNft(overrides?: CallOverrides): Promise<boolean>;

    isPunk(overrides?: CallOverrides): Promise<boolean>;

    totalBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    comptroller(overrides?: CallOverrides): Promise<BigNumber>;

    is1155(overrides?: CallOverrides): Promise<BigNumber>;

    isCNft(overrides?: CallOverrides): Promise<BigNumber>;

    isPunk(overrides?: CallOverrides): Promise<BigNumber>;

    totalBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    is1155(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPunk(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

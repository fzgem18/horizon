/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrations, MigrationsInterface } from "../Migrations";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "last_completed_migration",
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
    name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "completed",
        type: "uint256",
      },
    ],
    name: "setCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905560ff806100316000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063445df0ac1460415780638da5cb5b14605c578063fdacd576146085575b600080fd5b604960015481565b6040519081526020015b60405180910390f35b600054606e906001600160a01b031681565b6040516001600160a01b0390911681526020016053565b6094609036600460b1565b6096565b005b6000546001600160a01b031633141560ae5760018190555b50565b60006020828403121560c257600080fd5b503591905056fea26469706673582212201e1677395169a02706ac92bc9f3a9ac74a67e987744f8d87860b3c0d3e31ed4a64736f6c63430008090033";

export class Migrations__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Migrations> {
    return super.deploy(overrides || {}) as Promise<Migrations>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Migrations {
    return super.attach(address) as Migrations;
  }
  connect(signer: Signer): Migrations__factory {
    return super.connect(signer) as Migrations__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigrationsInterface {
    return new utils.Interface(_abi) as MigrationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrations {
    return new Contract(address, _abi, signerOrProvider) as Migrations;
  }
}

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
  "0x608060405234801561001057600080fd5b506100437ff2d958ec0c352935c740feb8d024adf88ea79eceadbfb3af2cbddd4010a7fec160001b6100ec60201b60201c565b6100757f05b1038423328fc4a99e2bd07a7086b042f0c1ca34d79e27c5d04aa41c6b9ecd60001b6100ec60201b60201c565b6100a77f2fabcff2a43c1a85ceaff3e0a04e3c81b46828d89d7c38655b2786f991418a9560001b6100ec60201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100ef565b50565b6103aa806100fe6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610064578063fdacd57614610082575b600080fd5b61004e61009e565b60405161005b9190610306565b60405180910390f35b61006c6100a4565b60405161007991906102eb565b60405180910390f35b61009c600480360381019061009791906102a4565b6100c8565b005b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6100f47f6ee80c108c37c3fd656da320403ea2439a1e2bcdd36065e0f03f7062fdcef49860001b61028c565b6101207fa91fa493bf3328c83f492f3404e9e978731563906941e621fa071c672895d32560001b61028c565b61014c7f1bdabafb78d0758fad473865a2c814d2500e57c7b71ab77a4bec7200a149640c60001b61028c565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561025c576101cc7ff362e72d480a5e1c9d567cce76bae4469d129b665aa10c4887172deaf277cfad60001b61028c565b6101f87fac4209cab0443b857e8513b49f4f8e604d782d7949a31581b304a1c9a67affeb60001b61028c565b6102247f642212daf67666eb5af87556936443d070c957b46e3a61b95c6480d4ddba7c1860001b61028c565b6102507f324000ee7ac09832253f2949833be8a6563ce8a54b450ea8257c06244ac4e11460001b61028c565b80600181905550610289565b6102887f6261eb9f5de9094a5594ce8477b4559911636211d06164de9a1e6d381337925c60001b61028c565b5b50565b50565b60008135905061029e8161035d565b92915050565b6000602082840312156102b657600080fd5b60006102c48482850161028f565b91505092915050565b6102d681610321565b82525050565b6102e581610353565b82525050565b600060208201905061030060008301846102cd565b92915050565b600060208201905061031b60008301846102dc565b92915050565b600061032c82610333565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61036681610353565b811461037157600080fd5b5056fea2646970667358221220f0a37c94e1e86664a46bbc582f6fa96615f0b96ef11561c7b67ae353041d4e6d64736f6c63430008040033";

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

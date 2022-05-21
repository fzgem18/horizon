/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgedToken, BridgedTokenInterface } from "../BridgedToken";

const _abi = [
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    name: "burnFrom",
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
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506123b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102cd578063a457c2d7146102eb578063a9059cbb1461031b578063dd62ed3e1461034b578063f2fde38b1461037b57610116565b806370a0823114610259578063715018a61461028957806379cc6790146102935780638da5cb5b146102af57610116565b806323b872dd116100e957806323b872dd146101a3578063313ce567146101d357806339509351146101f157806340c10f191461022157806342966c681461023d57610116565b806306fdde031461011b578063095ea7b3146101395780631624f6c61461016957806318160ddd14610185575b600080fd5b610123610397565b6040516101309190611a9a565b60405180910390f35b610153600480360381019061014e91906116f7565b610429565b6040516101609190611a64565b60405180910390f35b610183600480360381019061017e9190611733565b61044c565b005b61018d6104ed565b60405161019a9190611c7c565b60405180910390f35b6101bd60048036038101906101b891906116a8565b6104f7565b6040516101ca9190611a64565b60405180910390f35b6101db610526565b6040516101e89190611c97565b60405180910390f35b61020b600480360381019061020691906116f7565b61052f565b6040516102189190611a64565b60405180910390f35b61023b600480360381019061023691906116f7565b610566565b005b610257600480360381019061025291906117b2565b6105f0565b005b610273600480360381019061026e9190611643565b610604565b6040516102809190611c7c565b60405180910390f35b61029161064d565b005b6102ad60048036038101906102a891906116f7565b6106d5565b005b6102b76106f5565b6040516102c49190611a49565b60405180910390f35b6102d561071f565b6040516102e29190611a9a565b60405180910390f35b610305600480360381019061030091906116f7565b6107b1565b6040516103129190611a64565b60405180910390f35b610335600480360381019061033091906116f7565b610828565b6040516103429190611a64565b60405180910390f35b6103656004803603810190610360919061166c565b61084b565b6040516103729190611c7c565b60405180910390f35b61039560048036038101906103909190611643565b6108d2565b005b6060603680546103a690611e57565b80601f01602080910402602001604051908101604052809291908181526020018280546103d290611e57565b801561041f5780601f106103f45761010080835404028352916020019161041f565b820191906000526020600020905b81548152906001019060200180831161040257829003601f168201915b5050505050905090565b6000806104346109ca565b90506104418185856109d2565b600191505092915050565b60006104586001610b9d565b9050801561047c576001600060016101000a81548160ff0219169083151502179055505b6104868484610c8d565b61048e610cea565b80156104e75760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104de9190611a7f565b60405180910390a15b50505050565b6000603554905090565b6000806105026109ca565b905061050f858285610d3b565b61051a858585610dc7565b60019150509392505050565b60006012905090565b60008061053a6109ca565b905061055b81858561054c858961084b565b6105569190611d24565b6109d2565b600191505092915050565b61056e6109ca565b73ffffffffffffffffffffffffffffffffffffffff1661058c6106f5565b73ffffffffffffffffffffffffffffffffffffffff16146105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990611b9c565b60405180910390fd5b6105ec828261104b565b5050565b6106016105fb6109ca565b826111ac565b50565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106556109ca565b73ffffffffffffffffffffffffffffffffffffffff166106736106f5565b73ffffffffffffffffffffffffffffffffffffffff16146106c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c090611b9c565b60405180910390fd5b6106d36000611385565b565b6106e7826106e16109ca565b83610d3b565b6106f182826111ac565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606037805461072e90611e57565b80601f016020809104026020016040519081016040528092919081815260200182805461075a90611e57565b80156107a75780601f1061077c576101008083540402835291602001916107a7565b820191906000526020600020905b81548152906001019060200180831161078a57829003601f168201915b5050505050905090565b6000806107bc6109ca565b905060006107ca828661084b565b90508381101561080f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080690611c3c565b60405180910390fd5b61081c82868684036109d2565b60019250505092915050565b6000806108336109ca565b9050610840818585610dc7565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108da6109ca565b73ffffffffffffffffffffffffffffffffffffffff166108f86106f5565b73ffffffffffffffffffffffffffffffffffffffff161461094e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094590611b9c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b590611afc565b60405180910390fd5b6109c781611385565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3990611bfc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa990611b1c565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b909190611c7c565b60405180910390a3505050565b60008060019054906101000a900460ff1615610c145760018260ff16148015610bcc5750610bca3061144b565b155b610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0290611b7c565b60405180910390fd5b60009050610c88565b8160ff1660008054906101000a900460ff1660ff1610610c69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6090611b7c565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff16610cdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd390611c1c565b60405180910390fd5b610ce6828261146e565b5050565b600060019054906101000a900460ff16610d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3090611c1c565b60405180910390fd5b565b6000610d47848461084b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610dc15781811015610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa90611b3c565b60405180910390fd5b610dc084848484036109d2565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2e90611bdc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9e90611abc565b60405180910390fd5b610eb28383836114ef565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3090611b5c565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fce9190611d24565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110329190611c7c565b60405180910390a36110458484846114f4565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b290611c5c565b60405180910390fd5b6110c7600083836114ef565b80603560008282546110d99190611d24565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461112f9190611d24565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111949190611c7c565b60405180910390a36111a8600083836114f4565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561121c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121390611bbc565b60405180910390fd5b611228826000836114ef565b6000603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156112af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a690611adc565b60405180910390fd5b818103603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603560008282546113079190611d7a565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161136c9190611c7c565b60405180910390a3611380836000846114f4565b505050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166114bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b490611c1c565b60405180910390fd5b81603690805190602001906114d39291906114f9565b5080603790805190602001906114ea9291906114f9565b505050565b505050565b505050565b82805461150590611e57565b90600052602060002090601f016020900481019282611527576000855561156e565b82601f1061154057805160ff191683800117855561156e565b8280016001018555821561156e579182015b8281111561156d578251825591602001919060010190611552565b5b50905061157b919061157f565b5090565b5b80821115611598576000816000905550600101611580565b5090565b60006115af6115aa84611cd7565b611cb2565b9050828152602081018484840111156115c757600080fd5b6115d2848285611e15565b509392505050565b6000813590506115e981612338565b92915050565b600082601f83011261160057600080fd5b813561161084826020860161159c565b91505092915050565b6000813590506116288161234f565b92915050565b60008135905061163d81612366565b92915050565b60006020828403121561165557600080fd5b6000611663848285016115da565b91505092915050565b6000806040838503121561167f57600080fd5b600061168d858286016115da565b925050602061169e858286016115da565b9150509250929050565b6000806000606084860312156116bd57600080fd5b60006116cb868287016115da565b93505060206116dc868287016115da565b92505060406116ed86828701611619565b9150509250925092565b6000806040838503121561170a57600080fd5b6000611718858286016115da565b925050602061172985828601611619565b9150509250929050565b60008060006060848603121561174857600080fd5b600084013567ffffffffffffffff81111561176257600080fd5b61176e868287016115ef565b935050602084013567ffffffffffffffff81111561178b57600080fd5b611797868287016115ef565b92505060406117a88682870161162e565b9150509250925092565b6000602082840312156117c457600080fd5b60006117d284828501611619565b91505092915050565b6117e481611dae565b82525050565b6117f381611dc0565b82525050565b61180281611e03565b82525050565b600061181382611d08565b61181d8185611d13565b935061182d818560208601611e24565b61183681611f47565b840191505092915050565b600061184e602383611d13565b915061185982611f58565b604082019050919050565b6000611871602283611d13565b915061187c82611fa7565b604082019050919050565b6000611894602683611d13565b915061189f82611ff6565b604082019050919050565b60006118b7602283611d13565b91506118c282612045565b604082019050919050565b60006118da601d83611d13565b91506118e582612094565b602082019050919050565b60006118fd602683611d13565b9150611908826120bd565b604082019050919050565b6000611920602e83611d13565b915061192b8261210c565b604082019050919050565b6000611943602083611d13565b915061194e8261215b565b602082019050919050565b6000611966602183611d13565b915061197182612184565b604082019050919050565b6000611989602583611d13565b9150611994826121d3565b604082019050919050565b60006119ac602483611d13565b91506119b782612222565b604082019050919050565b60006119cf602b83611d13565b91506119da82612271565b604082019050919050565b60006119f2602583611d13565b91506119fd826122c0565b604082019050919050565b6000611a15601f83611d13565b9150611a208261230f565b602082019050919050565b611a3481611dec565b82525050565b611a4381611df6565b82525050565b6000602082019050611a5e60008301846117db565b92915050565b6000602082019050611a7960008301846117ea565b92915050565b6000602082019050611a9460008301846117f9565b92915050565b60006020820190508181036000830152611ab48184611808565b905092915050565b60006020820190508181036000830152611ad581611841565b9050919050565b60006020820190508181036000830152611af581611864565b9050919050565b60006020820190508181036000830152611b1581611887565b9050919050565b60006020820190508181036000830152611b35816118aa565b9050919050565b60006020820190508181036000830152611b55816118cd565b9050919050565b60006020820190508181036000830152611b75816118f0565b9050919050565b60006020820190508181036000830152611b9581611913565b9050919050565b60006020820190508181036000830152611bb581611936565b9050919050565b60006020820190508181036000830152611bd581611959565b9050919050565b60006020820190508181036000830152611bf58161197c565b9050919050565b60006020820190508181036000830152611c158161199f565b9050919050565b60006020820190508181036000830152611c35816119c2565b9050919050565b60006020820190508181036000830152611c55816119e5565b9050919050565b60006020820190508181036000830152611c7581611a08565b9050919050565b6000602082019050611c916000830184611a2b565b92915050565b6000602082019050611cac6000830184611a3a565b92915050565b6000611cbc611ccd565b9050611cc88282611e89565b919050565b6000604051905090565b600067ffffffffffffffff821115611cf257611cf1611f18565b5b611cfb82611f47565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611d2f82611dec565b9150611d3a83611dec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d6f57611d6e611eba565b5b828201905092915050565b6000611d8582611dec565b9150611d9083611dec565b925082821015611da357611da2611eba565b5b828203905092915050565b6000611db982611dcc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000611e0e82611df6565b9050919050565b82818337600083830152505050565b60005b83811015611e42578082015181840152602081019050611e27565b83811115611e51576000848401525b50505050565b60006002820490506001821680611e6f57607f821691505b60208210811415611e8357611e82611ee9565b5b50919050565b611e9282611f47565b810181811067ffffffffffffffff82111715611eb157611eb0611f18565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61234181611dae565b811461234c57600080fd5b50565b61235881611dec565b811461236357600080fd5b50565b61236f81611df6565b811461237a57600080fd5b5056fea26469706673582212205cb9deb220232d43236319f2b26163bad9beef61acd420a4a4fa65bb3093dbee64736f6c63430008040033";

export class BridgedToken__factory extends ContractFactory {
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
  ): Promise<BridgedToken> {
    return super.deploy(overrides || {}) as Promise<BridgedToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgedToken {
    return super.attach(address) as BridgedToken;
  }
  connect(signer: Signer): BridgedToken__factory {
    return super.connect(signer) as BridgedToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgedTokenInterface {
    return new utils.Interface(_abi) as BridgedTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgedToken {
    return new Contract(address, _abi, signerOrProvider) as BridgedToken;
  }
}

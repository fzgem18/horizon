/* eslint-disable node/no-unpublished-import */
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, upgrades } from "hardhat";

const deployFunction: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const TokenLockerOnEthereum = await ethers.getContractFactory(
    "TokenLockerOnEthereum"
  );
  const tokenLockerOnEthereum = await upgrades.deployProxy(
    TokenLockerOnEthereum,
    []
  );
  console.log(
    "TokenLockerOnEthereum deployed to:",
    tokenLockerOnEthereum.address
  );
};

deployFunction.dependencies = [];
deployFunction.tags = ["TokenLockerOnEthereum", "Ethereum", "Deploy", "Working"];
export default deployFunction;

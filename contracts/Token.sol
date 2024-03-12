// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol"; //allows console loggin to see values in our project for dev purposes


//Create contract, name variable, //

contract Token {
	string public name = "Hood Coin";
	string public symbol = "HOOD";
	uint256 public decimals = 18;
	uint256 public totalSupply = 1000000 * (10** decimals);
}


async function main() {
//..Do something. Write the code to place Contract (Token) on blockchain. 

// Fetch contract to be deployed.
  const Token = await ethers.getContractFactory("Token");
  
//Deploy contract
  const token = await Token.deploy();
  await token.deployed();
  console.log(`Token Deployed to: ${token.address}` );

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  
  //process.exit(1);
});
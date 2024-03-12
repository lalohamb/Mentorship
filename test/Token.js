const {ethers} = require(`hardhat`);
const {expect} = require(`chai`);

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether') 

}

describe(`Token`,() => {
//Test goes inside here
	let token 

	beforeEach(async () => {
		//fetch name 
  		const Token = await ethers.getContractFactory(`Token`);
   		token = await Token.deploy();
	})
	
    //check that nam is correct
    it("Has a correct name", async () => {
    	//fetch name 
  		const Token = await ethers.getContractFactory(`Token`);
   		let token = await Token.deploy();
   		//read name
    	const name = await token.name();
   		//check name is correct
		expect(name).to.equal =("Hood Coin");
		console.log(`${name}`);
	})

    it("Has a correct symbol", async () => {
    	//read name
    	//const symbol = await token.symbol();
   		//check name is correct
		expect(await token.symbol()).to.equal("HOOD");
		//console.log(`${symbol}`);
	})

 it("Has a correct decimals", async () => {
    	//read name
    	//const decimals = await token.decimals();
   		//check name is correct
		expect(await token.decimals()).to.equal(`18`);
		//console.log(`${decimals}`);
	})

 it("Has a correct totalSupply", async () => {
    	//read name
    	const value = tokens('1000000')
    	//const value = ethers.utils.parseUnits('1000000', 'ether') 
    	//totalSupply = await token.totalSupply();
   		//check name is correct
		expect(await token.totalSupply()).to.equal(value);
		//console.log(`${totalSupply}`);
	})
})
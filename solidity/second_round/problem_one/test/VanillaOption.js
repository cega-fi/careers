const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("VanillaOption", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployTestERC20Fixture() {
    const TestERC20 = await ethers.getContractFactory("TestERC20");
    const erc20 = await TestERC20.deploy(1e12, "USD Stablecoin", "USDC", 6);

    return { erc20 };
  }

  function deployOracleWithParams(decimals) {
    return async function deployOracleFixture() {
      const Oracle = await ethers.getContractFactory("Oracle");
      const oracle = await Oracle.deploy(decimals, "Oracle for underlying asset in deposit asset (USDC)");

      return { oracle };
    }
  }

  async function deployOneWeekVanillaOptionFixture() {
    const ONE_WEEK_IN_DAYS = 7;

    // Contracts are deployed using the first signer/account by default
    const [owner, mm1, mm2, user1, user2] = await ethers.getSigners();

    const { erc20 } = await loadFixture(deployTestERC20Fixture);
    await erc20.mintTo(owner, 1e9);
    await erc20.mintTo(mm1, 1e9);
    await erc20.mintTo(mm2, 1e9);
    await erc20.mintTo(user1, 1e9);
    await erc20.mintTo(user2, 1e9);

    const { oracle } = await loadFixture(deployOracleWithParams(8));

    const optionName = "SHORTPUT";
    const optionSymbol = "SPUT";

    const VanillaOption = await ethers.getContractFactory("VanillaOption");
    const vanillaOption = await VanillaOption.deploy(optionName, optionSymbol, erc20, oracle, ONE_WEEK_IN_DAYS, [mm1, mm2]);

    const signers = {
      owner, mm1, mm2, user1, user2,
    };

    return { vanillaOption, erc20, oracle, signers };
  }

  describe("Deployment", function () {
    beforeEach(async function () {
      const { vanillaOption, erc20, oracle, signers } = await loadFixture(deployOneWeekVanillaOptionFixture);
      this.vanillaOption = vanillaOption;
      this.erc20 = erc20;
      this.oracle = oracle;

      this.signers = signers;
    });

    it("Should set the right name", async function () {
      expect(await this.vanillaOption.name()).to.equal("SHORTPUT");
    });

    it("Should set the right symbol", async function () {
      expect(await this.vanillaOption.symbol()).to.equal("SPUT");
    });

    it("Should set the right decimals", async function () {
      expect(await this.vanillaOption.decimals()).to.equal((await this.erc20.decimals()) + 12n);
    });
  });

  describe("#deposit", function () {
    beforeEach(async function () {
      const { vanillaOption, erc20, signers } = await loadFixture(deployOneWeekVanillaOptionFixture);
      this.vanillaOption = vanillaOption;
      this.erc20 = erc20;

      this.signers = signers;
    });

    it("Should change the erc20 token balance", async function () {
      const amountToDeposit = 1e6;
      await this.erc20.connect(this.signers.user1).approve(this.vanillaOption, amountToDeposit);

      await expect(
        this.vanillaOption.connect(this.signers.user1).deposit(amountToDeposit, this.signers.user1.address)
      ).to.changeTokenBalances(
        this.erc20,
        [this.signers.user1, this.vanillaOption],
        [-amountToDeposit, amountToDeposit],
      );
    });

    it("Should mint vault tokens to the user", async function () {
      const amountToDeposit = 1;
      const decimalsShift = 12; // Decimals offset of the VanillaOption contract
      await this.erc20.connect(this.signers.user1).approve(this.vanillaOption, amountToDeposit);

      await expect(
        this.vanillaOption.connect(this.signers.user1).deposit(amountToDeposit, this.signers.user1.address)
      ).to.changeTokenBalances(
        this.vanillaOption,
        [this.signers.user1, this.vanillaOption],
        [amountToDeposit * (10 ** decimalsShift), 0],
      );

      expect(await this.vanillaOption.totalAssets()).to.eq(amountToDeposit);
      expect(await this.vanillaOption.totalSupply()).to.eq(amountToDeposit * (10 ** decimalsShift));
    });
  });

  describe("#tradeVault", function () {
  });

  describe("#settleVault", function () {
  })

  describe("#redeem", function () {
    // OPTIONAL
  });
});

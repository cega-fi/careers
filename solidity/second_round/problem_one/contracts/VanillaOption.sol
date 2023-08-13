// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC4626.sol
import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";

import './Oracle.sol';

contract VanillaOption is ERC20, ERC4626 {
    enum VaultStage { PreTrade, Trading, Settlement, PostSettlement }

    uint256 tradeTenorInDays;
    mapping(address => bool) whitelistedMarketMakers;
    Oracle underlyingAssetOracle;

    VaultStage currentStage = VaultStage.PreTrade;

    /**
     * @dev Contract variables (add any if needed)
     */
    // e.g. uint256 tradeStartInSecs;

    constructor(
      string memory _name,
      string memory _symbol,
      ERC20 _depositAsset,
      Oracle _underlyingAssetOracle,
      uint256 _tradeTenorInDays,
      address[] memory _whitelistedMarketMakers
    ) ERC4626(_depositAsset) ERC20(_name, _symbol) {
      underlyingAssetOracle = _underlyingAssetOracle;
      tradeTenorInDays = _tradeTenorInDays;

      for (uint256 i = 0; i < _whitelistedMarketMakers.length; i++) {
        whitelistedMarketMakers[_whitelistedMarketMakers[i]] = true;
      }
    }

    /**
     * @dev Main methods to implement
     */

    // function tradeVault

    // function settleVault


    /**
     * @dev Helper methods (add any if needed)
     */

    // function myHelperMethod

    /**
     * @dev Boilerplate function overrides to get you started
     */

    function decimals() public view override(ERC20, ERC4626) returns(uint8) {
      return ERC4626.decimals();
    }

    function _decimalsOffset() internal pure override returns (uint8) {
        return 12;
    }

    function deposit(uint256 assets, address receiver) public override returns (uint256) {
        require(currentStage == VaultStage.PreTrade, "Can only deposit pre-trade");
        return super.deposit(assets, receiver);
    }

    function redeem(
        uint256 shares,
        address receiver,
        address owner
    ) public override returns (uint256) {
        require(currentStage == VaultStage.PostSettlement, "Can only redeem post-settlement");
        return super.redeem(shares, receiver, owner);
    }

    function withdraw(
        uint256 assets,
        address receiver,
        address owner
    ) public override returns (uint256) {
        require(currentStage == VaultStage.PostSettlement, "Can only withdraw post-settlement");
        return super.withdraw(assets, receiver, owner);
    }
}

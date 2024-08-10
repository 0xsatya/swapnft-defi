// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CNftStorage.sol";

/// @dev Keep in sync with CNftInterface.sol.
abstract contract CNftInterface is CNftStorage {
    /**
     * @notice Event emitted when cNFTs are minted
     */
    event Mint(address minter, uint[] mintIds, uint[] mintAmounts);

    /**
     * @notice Event emitted when tokens are redeemed
     */
    event Redeem(address redeemer, uint[] redeemIds, uint[] redeemAmounts);

    /**
     * @notice Event emitted when arbitrary contract is called
     */
    event Call(address to, uint256 value, bytes data);

    function seize(address liquidator, address borrower, uint256[] calldata seizeIds, uint256[] calldata seizeAmounts) external virtual;
}
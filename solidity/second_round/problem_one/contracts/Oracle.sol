// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Oracle {
    struct RoundData {
        int256 answer;
        uint256 startedAt;
        uint256 updatedAt;
        uint80 answeredInRound;
    }

    event OracleCreated(uint8 decimals, string description);
    event RoundDataAdded(int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
    event RoundDataUpdated(uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);

    address public owner;
    uint8 public decimals;
    string public description;
    uint256 public version = 1;
    RoundData[] public oracleData;
    uint80 public nextRoundId;

    /**
     * @notice Creates a new oracle for a given asset / data source pair
     * @param _decimals is the number of decimals for the asset
     * @param _description is the asset
     */
    constructor(uint8 _decimals, string memory _description) {
        owner = msg.sender;
        decimals = _decimals;
        description = _description;
        emit OracleCreated(_decimals, _description);
    }

    modifier onlyOwner() {
      require(msg.sender == owner, "Only owner can call this function");
      _;
    }

    /**
     * @notice Adds the pricing data for the next round
     * @param _roundData is the data to be added
     */
    function addNextRoundData(RoundData calldata _roundData) public onlyOwner {
        require(_roundData.startedAt <= _roundData.updatedAt, "Updated at must be larger than started at");
        if (nextRoundId != 0) {
            (, , , uint256 updatedAt, ) = latestRoundData();
            require(updatedAt <= _roundData.startedAt, "New data cannot be older than previous data");
        }

        oracleData.push(_roundData);
        nextRoundId++;
        emit RoundDataAdded(_roundData.answer, _roundData.startedAt, _roundData.updatedAt, _roundData.answeredInRound);
    }

    /**
     * @notice Updates the pricing data for a given round
     * @param _roundData is the data to be updated
     */
    function updateRoundData(uint80 roundId, RoundData calldata _roundData) public onlyOwner {
        oracleData[roundId] = _roundData;
        emit RoundDataUpdated(
            roundId,
            _roundData.answer,
            _roundData.startedAt,
            _roundData.updatedAt,
            _roundData.answeredInRound
        );
    }

    /**
     * @notice Gets the pricing data for a given round Id
     * @param _roundId is the id of the round
     */
    function getRoundData(
        uint80 _roundId
    )
        public
        view
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (
            _roundId,
            oracleData[_roundId].answer,
            oracleData[_roundId].startedAt,
            oracleData[_roundId].updatedAt,
            oracleData[_roundId].answeredInRound
        );
    }

    /**
     * @notice Gets the pricing data for the latest round
     */
    function latestRoundData()
        public
        view
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        uint80 _roundId = nextRoundId - 1;
        return (
            _roundId,
            oracleData[_roundId].answer,
            oracleData[_roundId].startedAt,
            oracleData[_roundId].updatedAt,
            oracleData[_roundId].answeredInRound
        );
    }
}

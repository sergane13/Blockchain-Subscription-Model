export const accessContractAddress = "0x539157677698134E5f35fE69da84c5F984A09210"
export const paymentContractAddress = "0xB0235AF4895cE6707fCc104ADE2c8c6C6b3F5765"

export const accessAbi = [
    "function giveAccess(uint256 _service, address _client, uint248 _expirationDate) external",
    "function retrieveAccess(uint256 _service, address _client) external",
    "function verifyAccess(uint256 _service, address _client) external",
    "function setPaymentContract(address _newPaymentContract) external ",
    "function getAccess(uint256 _service, address _client) external view returns(bool)",
    "function getExpirationDate(uint256 _service, address _client) external view returns(uint256)",
    "function getOwner() external view returns(address)"
]

export const paymentAbi = [
    "function createService(uint232 _price, uint8 _freq) external",
    "function startService(uint256 _id) external",
    "function stopService(uint256 _id) external",
    "function payService(uint256 _id) external payable",
    "function payServiceFrom(uint256 _id, address _client) external payable",
    "function withdrawFunds() external",
    "function getNumberOfServices() external view returns(uint256)",
    "function getService(uint256 _id) external view returns(bool, uint248, uint8)",
    "function getOwner() external view returns(address)" 
]
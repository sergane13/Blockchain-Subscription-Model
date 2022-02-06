export const accessContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const paymentContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

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
import injectedProvider from "../components/connectors.js"
import { ethers } from "ethers"

export const accessContractAddress = "0x00"
export const paymentContractAddres = "0x00"

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
    "function createService(uint232 _price, PaymentFreq _freq) external",
    "function startService(uint256 _id) external",
    "function stopService(uint256 _id) external",
    "function payService(uint256 _id) external payable",
    "function payServiceFrom(uint256 _id, address _client) external payable",
    "function withdrawFunds() external",
    "function getNumberOfServices() external view returns(uint256)",
    "function getService(uint256 _id) external view"
]

// get contract with metamask provider
export function getContract(addressContract, contractAbi) {
    const provider = new ethers.providers.Web3Provider(injectedProvider);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(addressContract, contractAbi, signer);
    return contract;
  }
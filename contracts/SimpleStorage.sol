// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint256 public storedData;


  // constructor(uint256 _num) public {
  //   storedDate = 
  // }

  function getStoredData() public view returns (uint256) { 
    return storedData;
  }


  function setStoredData(uint256 x) public {
    storedData = x;
  }


}

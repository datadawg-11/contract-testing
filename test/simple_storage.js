const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts) {

  // Test 1
  it("should assert true", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });

  // Test 2
  it("has an initial value of 0", async () => {
    // get the contract that has been deployed
    const ssInstance = await SimpleStorage.deployed(); 

    // verify it has an initial value of 0 
    const storedData =  await ssInstance.getStoredData.call(); 
    assert.equal(storedData, 0, `Initial state should be zero`); 
    });

    // Test 3
    describe("Functionality", () => { 
      it("should store the value 42", async () => { 
        // grab the contract we need
        const ssInstance = await SimpleStorage.deployed(); 

        const setExpected = 42;
        // change the number! 
        await ssInstance.setStoredData(setExpected, { from: accounts[0] }); 

        const storedData = await ssInstance.getStoredData.call();

        assert.equal(storedData, setExpected, `${setExpected} was not stored`)
      })
    });


});

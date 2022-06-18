const Temperature = artifacts.require("Temperature");

contract("GasLimit", () => {
  it("Should do delivery if temperature is less than 30", async () => {
    const temp = await Temperature.deployed();
    const result = await temp.checkTemp(25);
    assert(result === "Do delivery to B and pay to A");
  });
  it("Should not do delivery if temperature is greater than 30", async () => {
    const temp = await Temperature.deployed();
    const result = await temp.checkTemp(31);
    assert(result === "Do not do delivery to B and do not pay to A");
  });
});

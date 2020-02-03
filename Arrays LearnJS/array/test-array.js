beforeEach(function () {
  sinon.stub(window, "prompt");
});

afterEach(function () {
  prompt.restore();
})

describe("sumInput", function () {
  it("if empty string, return 0", function () {
    mockPrompt([""]);
    assertResultEqual(0);
  });

  it("if null, return 0", function () {
    mockPrompt([null]);
    assertResultEqual(0);
  });

  it("if not a number, return 0", function () {
    mockPrompt(["abc"]);
    assertResultEqual(0);
  });

  it("if get number and empty string, return number", function () {
    mockPrompt(["1", ""]);
    assertResultEqual(1);
  });

  it("if get number and null, return number", function () {
    mockPrompt(["1", null]);
    assertResultEqual(1);
  });

  it("if get number and not a number, return number", function () {
    mockPrompt(["1", "abc"]);
    assertResultEqual(1);
  });

  it("if get two numbers and empty string, return sum of numbers", function () {
    mockPrompt(["1", "2", ""]);
    assertResultEqual(3);
  });

  it("if get many numbers and empty string, return sum of numbers", function () {
    mockPrompt(["3", "7", "9", ""]);
    assertResultEqual(19);
  });
});

function assertResultEqual(expectedNumber) {
  assert.strictEqual(sumInput(), expectedNumber);
}

function mockPrompt(mockValues) {
  for (let i = 0; i < mockValues.length; i++) {
    prompt.onCall(i).returns(mockValues[i]);
  }
}
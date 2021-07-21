const timeoutTest = 5_000

function simulateDelayedTest(done) {
  setTimeout(() => done(), timeoutTest)
}

describe('My Tests', function() {
  this.timeout(timeoutTest + 500) // ensure tests don't timeout

  it('should create gateway 1: File', simulateDelayedTest)
  it('should create gateway 2: Tape', simulateDelayedTest)
  it('should create gateway 3: Foo',  simulateDelayedTest)
  it('should create gateway 4: Bar',  simulateDelayedTest)
  it('should create gateway 5: Baz',  simulateDelayedTest)
  it('should create gateway 6: Zee',  simulateDelayedTest)
})
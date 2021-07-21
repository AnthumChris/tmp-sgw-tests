const timeoutTest = 5_000

function simulateParallelTest(done) {
  setTimeout(() => done(), timeoutTest)
}

describe('My Tests', function() {
  this.timeout(timeoutTest + 500) // ensure tests don't timeout

  it('should create gateway 1: File', simulateParallelTest)
  it('should create gateway 2: Tape', simulateParallelTest)
  it('should create gateway 3: Foo',  simulateParallelTest)
  it('should create gateway 4: Bar',  simulateParallelTest)
  it('should create gateway 5: Baz',  simulateParallelTest)
  it('should create gateway 6: Zee',  simulateParallelTest)
})
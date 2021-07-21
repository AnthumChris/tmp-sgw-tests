const timeoutTest = 2000

function simulateDelayedTest(done) {
  setTimeout(() => done(), timeoutTest)
}

describe('My Tests', function() {
  this.timeout(timeoutTest + 500) // ensure tests don't timeout

  it('should create File gateway', simulateDelayedTest)
  it('should create Tape gateway', simulateDelayedTest)
  it('should create Foo gateway',  simulateDelayedTest)
  it('should create Bar gateway',  simulateDelayedTest)
  it('should create Bax gateway',  simulateDelayedTest)
})
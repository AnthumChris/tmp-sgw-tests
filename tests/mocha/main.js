import Tests from '../Tests.js'

describe('Delays', function() {
  // ensure tests don't timeout
  this.timeout(Tests.DELAY_MS + 500)
  it('Delay 1', Tests.delay)
  it('Delay 2', Tests.delay)
  it('Delay 3', Tests.delay)
  it('Delay 4', Tests.delay)
  it('Delay 5', Tests.delay)
})

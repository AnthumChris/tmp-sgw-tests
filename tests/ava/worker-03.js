import test from 'ava'
import Tests from '../Tests.js'

test('Delay 1', t => t.notThrowsAsync(Tests.delay))
test('Delay 2', t => t.notThrowsAsync(Tests.delay))
test('Delay 3', t => t.notThrowsAsync(Tests.delay))
test('Delay 4', t => t.notThrowsAsync(Tests.delay))
test('Delay 5', t => t.notThrowsAsync(Tests.delay))

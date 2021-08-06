const DELAY_MS = 5_000

async function delay() {
  return new Promise(resolve => {
    setTimeout(resolve, DELAY_MS)
  })
}

const Tests = {
  delay,
  DELAY_MS,
}

export default Tests

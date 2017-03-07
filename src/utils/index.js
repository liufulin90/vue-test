/**
 * const testAsync = async () => {
 *   console.log(1)
 *   await sleep(2000)
 *   console.log(2)
 * }
 *
 * @param timeout
 * @returns {Promise}
 */
const sleep = (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

export {
  sleep
}
export default function getRandomUserId() {
  /** NOTE: return a random integer in the range [1, 10]
   * as shown here:
   * https://stackoverflow.com/a/4960020
   */
  return Math.floor(Math.random() * 10) + 1
}
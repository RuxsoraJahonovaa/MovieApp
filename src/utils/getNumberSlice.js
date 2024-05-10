export function extractNumbers(str) {
  return str.match(/\d+/g).map(Number);
}

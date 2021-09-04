declare global {
  interface Array<T extends unknown> {
    getLen(): number;
  }
}
Array.prototype.getLen = function () {
  return this.length;
};
Array.prototype.a = function () {
  return "?";
};

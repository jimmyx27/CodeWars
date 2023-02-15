String.prototype.isUpperCase = function () {
  if (this.toString() !== this.toUpperCase()) {
    return false;
  } else {
    return true;
  }
};

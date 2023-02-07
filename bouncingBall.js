function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    current = h * bounce;
    while (current > window) {
      current *= bounce;
      count += 2;
    }
    return count;
  } else {
    return -1;
  }
}

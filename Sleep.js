class Sleep {
  msleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
  }

  sleep(n) {
    this.msleep(n * 1000);
  }
}

module.exports = Sleep;

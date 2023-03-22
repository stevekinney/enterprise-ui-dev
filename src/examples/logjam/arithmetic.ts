const Arithmetic = {
  add(a: number, b: number) {
    return a + b;
  },

  multiply(a: number, b: number) {
    let result = 0;

    while (b--) {
      result = this.add(result, a);
    }

    return result;
  },

  double(a: number) {
    return this.multiply(a, 2);
  },
};

export default Arithmetic;

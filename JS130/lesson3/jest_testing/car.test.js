const Car = require('./car');

describe("This Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  }); // creates a car object in each test (reduces redundancy) - beforeEach is called before
  // running each test (9 tests, means beforeEach will run 9 times)

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test.skip("bad wheels", () => { // test.skip allows us to skip a particular test (xtest also works)
    expect(car.wheels).toBe(3);
  })

  test('two new cars are equal objects', () => {
    let car2 = new Car();
    expect(car).toEqual(car2);
  })

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raise an error when called drive on it', () => {
    expect(() => car.drive()).toThrow();
  });

  // can also test for exact5 error type that you're expecting
  test('raise a TypeError when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);
    
    expect(arr).toContain(car);
  }); // to contain also works with strings (matches substrings) and other "iterable" sets. 

  test('string contains "car"', () => {
    let man = "His scars have healed";
    expect(man).toContain("car");
  })

  // sometimes we want to assert the opposite of a match (can do that with 'not')
  test('car has wheels', () => {
    expect(car.wheels).not.toBeUndefined();
  });
});


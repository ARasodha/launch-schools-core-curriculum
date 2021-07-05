// Exceptions

class DividingByZeroError extends Error {};

function div(first, second) {
  if (second === 0) {
    throw new DividingByZeroError("Dividing by zero!");
  }
  return first / second;
}

function divideOneBy(divisor) {
  if (divisor !== 0) {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DividingByZeroError) {
      console.log(`${error.message} ignored`);
    } else {
      throw error;
    }
  }
}


divideOneBy(1); // 1
divideOneBy(0); // Divide by zero! ignored


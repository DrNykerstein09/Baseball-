function* uniqueRandomNumbersInRange(start, end) {
  const numbers = new Set();
  while (numbers.size < end - start) {
    const newNumber = Math.floor(Math.random() * (end - start)) + start;
    if (!numbers.has(newNumber)) {
      numbers.add(newNumber);
      yield newNumber;
    }
  }
}
const generator = uniqueRandomNumbersInRange(1, 10);
console.log(uniqueRandomNumbersInRange(1, 10));
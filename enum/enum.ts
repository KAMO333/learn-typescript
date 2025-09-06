enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Dec:
    case Month.Jan:
    case Month.Feb:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(1)); // true
console.log(isItSummer(11)); // true
console.log(isItSummer(5)); // false

// Enums are a way of giving more friendly names to sets of numeric values.

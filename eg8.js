//That one was my fisrt idea, so I tried to create a logic to let me know if the typed year was leap. The Years and Days I typed straight away on the console.

var normalYear = 365;

function Year(year, days) {
  this.year = year;
  this.days = days;
}

function leapYear(year) {
  if (year.days === 365) {
    console.log("Normal Year.");
  } else {
    console.log("Leap Year.");
  }
}

//Then, I spoke with bia and she helped me in a easy way.

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

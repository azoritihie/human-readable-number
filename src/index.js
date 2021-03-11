module.exports = function toReadable (number) {
    const units = [
           "",
           "one",
           "two",
           "three",
           "four",
           "five",
           "six",
           "seven",
           "eight",
           "nine",
           "ten",
           "eleven",
           "twelve",
           "thirteen",
           "fourteen",
           "fifteen",
           "sixteen",
           "seventeen",
           "eighteen",
           "nineteen"
       ];
   
       const dozens = [
           "",
           "",
           "twenty",
           "thirty",
           "forty",
           "fifty",
           "sixty",
           "seventy",
           "eighty",
           "ninety"
       ]; 
     if (number === 0) return 'zero';
     if (number < 20) return units[number];
     let doz = Math.floor(number/10);
     if (number < 100 & (number % 10) === 0) return dozens[doz];
     if (number < 100 & (number % 10) !==0) return `${dozens[doz]} ${units[number % 10]}`
     if (number > 99 & (number % 100) === 0) return `${units[number/100]} hundred`;
     if (number > 99 & (number % 10) === 0) {
        if ((number % 100) === 10) {
            return `${units[Math.floor(number/100)]} hundred ${units[10]}`  
           }
       let rest = number/10;
       rest = rest % 10;
       return `${units[Math.floor(number/100)]} hundred ${dozens[rest]}`}
   
       if (number > 99 & (number % 10) !== 0) {
        if ((number % 100) > 20) {
         let rest = Math.floor(number % 100 / 10);
         restUnits = number % 10;
         return `${units[Math.floor(number/100)]} hundred ${dozens[rest]} ${units[restUnits]}`;
      } else 
         return `${units[Math.floor(number/100)]} hundred ${units[number % 100]}`;
      }
   }
   

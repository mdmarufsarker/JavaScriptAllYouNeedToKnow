let date = new Date();
console.log(date);

console.log(date.toDateString()); // 2023-12-31T16:51:10.081Z
console.log(date.toTimeString()); // Sun Dec 31 2023
console.log(date.toLocaleString()); // 22:51:10 GMT+0600 (Bangladesh Standard Time)
console.log(date.getFullYear()); // 12/31/2023, 10:51:10 PM
console.log(date.getMonth()); // 11
console.log(date.getDate()); // 31
console.log(date.getHours()); // 22
console.log(date.getMinutes()); // 51
console.log(date.getSeconds()); // 10
console.log(date.getMilliseconds()); // 81
console.log(date.getTime()); // 1704189470081
console.log(date.getDay()); // 0
console.log(date.getUTCMilliseconds()); // 81
console.log(date.getUTCSeconds()); // 10
console.log(date.getUTCMinutes()); // 51
console.log(date.getUTCHours()); // 16
console.log(date.getUTCDate()); // 31
console.log(date.getUTCMonth()); // 11
console.log(date.getUTCFullYear()); // 2023
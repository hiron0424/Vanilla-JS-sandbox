
for (var i = 1, result = 0; i <= 100; i++) {
  result += i;
  if (result > 1000) { break; }
}
console.log('合計値が1000を超えるのは' + i);
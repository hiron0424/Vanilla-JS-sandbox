for (let i = 8; i < 10; i++) {
  console.log('iの値は' + i);
}

// for...in命令
let data = { apple:300, banana:100, orange:90, kiwi:200 };
for (let key in data) {
  console.log(key + '=' + data[key]);
}

//for...of命令
let people = [ 'john', 'mike', 'angela' ];
Array.prototype.hoge = function () {}
for (let name of people) {
  console.log(name);
}
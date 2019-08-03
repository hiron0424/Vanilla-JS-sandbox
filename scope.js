let scope = 'Global Valiable';

function getValue() {
  let scope = 'Local Valiable';
  return scope;
}

console.log(getValue());
console.log(scope);

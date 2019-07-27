var rank = 'C';
if (rank === 'A') {
  console.log('Aランクです。');
} else if (rank === 'B') {
  console.log('Bランクです。');
} else if (rank ==='C') {
  console.log('Cランクです。');
} else {
  console.log('ランク外です。');
}

console.log('以下がswitch構文')
var new_rank = 'D'
switch (new_rank) {
  case 'A':
    console.log('Aランクですよ！');
    break;
  case 'B':
    console.log('Bランクですよ！');
    break;
  case 'C':
    console.log('Cランクですよ！');
    break;
  default:
    console.log('残念、ランク外です。');
    break;
}
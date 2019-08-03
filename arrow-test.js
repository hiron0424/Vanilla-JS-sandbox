window.onload = () => {
  var current = new Date();
  var result = document.getElementById('result');
  var btn = document.getElementById('btn');
  btn.onclick = () => result.textContent = current;
};
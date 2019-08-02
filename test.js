window.onload = function() {
  var current = new Date();
  var result = document.getElementById('result');
  var btn = document.getElementById('btn');
  btn.onclick = function() {
    result.textContent = current;
  }
}

function langs() {
  o = ""
  l = document.getElementById("l").value
  c = document.getElementById("c").value
  if (l == "ti! (placeholderlang)") { ti() }
  else if (l == "EC") { ec() }
  document.getElementById("o").innerHTML = "output:<br>" + o
}
function ti() {
  if (c == "ti!") { o += "Hello, world!\n" } 
  else { o += "[]\n" }
}
function ec() { o = "Implementation is currently incomplete\n" }

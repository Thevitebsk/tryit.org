function langs() {
  o = ""
  l = document.getElementById("l").value
  c = document getElementById("c").value
  if (l == "ti! (placeholderlang)") { ti() }
  else if (l == "track!") { track() }
  document.getElementById("o").innerHTML = "output:<br>" + o
}
function ti() {
  if (c == "ti!") { o += "Hello, world!\n" } 
  else { o += "[]\n" }
}
function track() { o = "Language is currently incomplete\n" }

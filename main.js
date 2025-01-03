function langs(){
  l = document.getElementById("l").value
  if (l == "ti! (placeholderlang)") { ti() }
  else if (l == "track!") { track() }
  document.getElementById("o").innerHTML = "output:<br>" + o
}
function ti() {
  o = ""
  c = document.getElementById("c").value
  if (c == "ti!") { o += "Hello, world!\n" } else { o += "[]\n" }
}
function track() {}

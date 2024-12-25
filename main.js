function langs(){
  l = document.getElementById("l").value
  if (l == "ti! (placeholderlang)") { ti() }
}
function ti() {
  o = ""
  c = document.getElementById("c").value
  if (c == "ti!") { o += "Hello, world!\n" }
  document.getElementById("o").innerHTML = "output:<br>" + o
}

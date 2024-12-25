function lang(){
  l = document.getElementById("l").value
  if (l == "ti! (placeholderlang)") { ti() }
}
function ti() {
  o = ""
  c = document.getElementById("code").value
  if (c == "ti!") { o += "Hello, world!\n" }
  document.getElementById("output").innerHTML = "output:\n" + o
}

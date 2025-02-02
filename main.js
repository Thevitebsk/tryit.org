function langs() {
  o = "" ; p = 0
  l = document.getElementById("l").value
  c = document.getElementById("c").value
  if (l == "ti! (placeholderlang)") { ti() }
  else if (l == "+*-") { paml() }
  perma();document.getElementById("o").innerHTML = "output:<br>" + o
}
function ti() {
  if (c == "ti!") { o += "Hello, world!\n" } 
  else { o += "[]\n" }
}
function paml() {
  a = b = tv = 0
  while (p<c.length) {
         if (c[p]=="+") { a++ }
    else if (c[p]=="*") { tv=a ; a=b ; b=tv ; tv=0 }
    else if (c[p]=="-") { a-- }
    else if (c[p]=="a") { o += a + " " }
    else if (c[p]=="b") { o += b + " " }
    p++
  }
}

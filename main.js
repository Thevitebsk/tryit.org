function langs() {
  o = "" ; p = 0
  l = document.getElementById("l").value
  c = document.getElementById("c").value
  if (l == "ti! (placeholderlang)") { ti() }
  else if (l == "+*-") { pam() }
  document.getElementById("o").innerHTML = "output:<br>" + o
}
function ti() {
  if (c == "ti!") { o += "Hello, world!\n" } 
  else { o += "[]\n" }
}
function pam() {
  a = b = 0
  while (p<c.lenght){
         if (c[p]=="+") {a++}
    else if (c[p]=="*") {a,b=a,b}
    else if (c[p]=="-") {a--}
    else if (c[p]=="a") {o += a+"\n"}
    else if (c[p]=="b") {o += b+"\n"}
  }
}

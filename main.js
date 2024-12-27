function langs(){
  l = document.getElementById("l").value
  if (l == "ti! (placeholderlang)") { ti() }
}
function ti() {
  o = ""
  c = document.getElementById("c").value
  if (c == "ti!") { o += "Hello, world!\n" } else { o += "[]\n" }
  document.getElementById("o").innerHTML = "output:<br>" + o
}
function Perma(code, input, lang) {
            baseUrl = window.location.origin + window.location.pathname; // Full base URL
            params = new URLSearchParams({
                code: encodeURIComponent(code),
                input: encodeURIComponent(input),
                lang: encodeURIComponent(lang)
            });
            return `${baseUrl}?${params.toString()}`;
        }

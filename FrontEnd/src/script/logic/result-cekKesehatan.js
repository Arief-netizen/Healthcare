var inputCekKesehatan = {},
  args = location.search.substr(1).split(/&/);

for (var i = 0; i < args.length; ++i) {
  var tmp = args[i].split(/=/);
  if (tmp[0] != "") {
    inputCekKesehatan[decodeURIComponent(tmp[0])] = decodeURIComponent(
      tmp.slice(1).join("").replace("+", " ")
    );
  }
}
console.log(inputCekKesehatan);

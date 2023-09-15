module.exports = function check(str, bracketsConfig) {
  let open_brackets = [];
  let brackets_pair = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    open_brackets.push(bracketsConfig[i][0]);
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets_pair.push(bracketsConfig[i][1]);
  }
  function OpenBrackets(str) {
    return open_brackets.includes(str);
  }
  function CloseBrackets(str) {
    return brackets_pair.includes(str);
  }
  function BracketsOk(str, str2) {
    let topElement = open_brackets.indexOf(str);
    let currentSymbol = brackets_pair.indexOf(str2);
    if (topElement == currentSymbol) return true;
    return false;
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (OpenBrackets(str[i]) && CloseBrackets(str[i + 1]) && BracketsOk(str[i], str[i + 1])) {
      str = str.replace(str[i] + str[i + 1], "");
      i = -1;
    }
  }
  if (str.length == 0) return true;
  return false;
}
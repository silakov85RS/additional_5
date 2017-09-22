module.exports = function check(str, bracketsConfig) {
  openingBrackets = [];
  closingBrackets = [];
  temp = bracketsConfig.reduce(function (a, b) {
    return a.concat(b);
  });

  for (i = 0; i < temp.length; i++) {
    if ((i + 2) % 2 == 0) {
      openingBrackets.push(temp[i]);
    } else {
      closingBrackets.push(temp[i]);
    }
  }

  if (str.length % 2 > 0)
    return false;

  while (str.length >= 0) {
    for (x = str.length; x >= 0; x--) {
      for (y = closingBrackets.length; y >= 0; y--) {
        if (str[x] == closingBrackets[y]) {
          if (str[x - 1] == openingBrackets[y]) {
            a = x + 1;
            b = x - 1;
            pare = str.slice(b, a);
            str = str.replace(pare, '');
          } else {
            continue;
          }
        } else if (str[x] == closingBrackets[y] && str[x] == openingBrackets[y]) {
          if (str[x + 1] == closingBrackets[y] && str[x] == openingBrackets[y]) {
            a1 = x + 2;
            b1 = x;
            pare = str.slice(b1, a1);
            str = str.replace(pare, '');
          }
        }
      }
    };

    return (str.length === 0);
  };
};

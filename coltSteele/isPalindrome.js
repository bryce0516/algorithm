// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  console.log(str);
  if (str.length === 1) {
    console.log(1);
    return true;
  }
  if (str.length === 2) {
    console.log(2);
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    console.log(3, str.slice(1, -1));
    return isPalindrome(str.slice(1, -1));
  }
  return false;
  // add whatever parameters you deem necessary - good luck!
}

isPalindrome("amanaplanacanalpanama");

const str = "Salam Necesen";

function isItDifferent(string) {
  // Letters
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÜÖĞÇŞƏİ".split("");
  const lowerLetters = "abcdefghijklmnopqrstuvwxyzüöğçşəı".split("");
  //   Numbers of Letters in sentence
  let lowNumber = 0;
  let capNumber = 0;
  //   find numbers of letters
  string.split("").map((x) => {
    if (capitalLetters.find((element) => element == x)) {
      capNumber++;
    } else if (lowerLetters.find((element) => element == x)) {
      lowNumber++;
    }
  });
  // Check statement
  if (capNumber == 0 || lowNumber == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isItDifferent(str));

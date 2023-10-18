function reverse(s, j, i) {
  while (j < i) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    j++;
    i--;
  }
}

function reverseWords(sentence) {
  let s = sentence.split("");
  let j = 0;
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === " ") {
      reverse(s, j, i - 1);
      j = i + 1;
    }
  }

  return s.join("");
}

let input = "I am a developer";
console.log(reverseWords(input));

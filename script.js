// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedString) {
  let decodedString = '';

  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Convert the character code to a number between 0 and 25
      const charCode = char.charCodeAt(0) - 65;
      
      // Apply the ROT13 shift of 13 places
      const decodedCharCode = (charCode + 13) % 26;
      
      // Convert the character code back to uppercase letter
      const decodedChar = String.fromCharCode(decodedCharCode + 65);
      
      decodedString += decodedChar;
    } else {
      // Pass non-alphabetic characters through
      decodedString += char;
    }
  }

  return decodedString;
}

// Example usage:
// const encodedString = 'LBH QVQ VG!';
// const decodedString = rot13(encodedString);
// console.log(decodedString);


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;

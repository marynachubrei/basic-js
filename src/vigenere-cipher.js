const CustomError = require("../extensions/custom-error");

// class VigenereCipheringMachine {
//   constructor(flag = true) {
//     this.flag = flag;
    
// }

// encrypt(message, key) {
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (!message || !key) {
//         throw new Error('error');
//     }

//     let mPos;
//     let kPos;
//     let keyCounter = 0;
//     let result = [];

//     message = message.toUpperCase();
//     key = key.toUpperCase();

//     for (let i = 0; i < message.length; i++) {
//         mPos = alphabet.indexOf(message[i]);

//         if (mPos === -1) {
//             result.push(message[i]);
//             continue;
//         }

//         kPos = alphabet.indexOf(key[keyCounter % key.length]);
//         result.push(alphabet[(mPos + kPos) % alphabet.length]);
//         keyCounter++;
//     }

//     return this.flag ? result.join("") : result.reverse().join("");
// }

// decrypt(message, key) {
//   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (!message || !key) {
//         throw new Error('error');
//     }

//     let mPos;
//     let kPos;
//     let keyCounter = 0;
//     let result = [];

//     key = key.toUpperCase();

//     for (let i = 0; i < message.length; i++) {
//         mPos = alphabet.indexOf(message[i]);

//         if (mPos === -1) {
//             result.push(message[i]);
//             continue;
//         }

//         kPos = alphabet.indexOf(key[keyCounter % key.length]);
//         result.push(this.alphabet[(mPos - kPos + alphabet.length) % alphabet.length]);
//         keyCounter++;
//     }

//     return this.type ? result.join("") : result.reverse().join("");
// }
// }

class VigenereCipheringMachine {
  constructor(type = true) {
      this.type = type;
      
  }

  encrypt(message, key) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (!message || !key) {
          throw new Error('Error');
      }

      let mPos
      let kPos;
      let keyCounter = 0;
      let result = [];

      message = message.toUpperCase();
      key = key.toUpperCase();

      for (let i = 0; i < message.length; i++) {
          mPos = alphabet.indexOf(message[i]);

          if (mPos === -1) {
              result.push(message[i]);
              continue;
          }

          kPos = alphabet.indexOf(key[keyCounter % key.length]);
          result.push(alphabet[(mPos + kPos) % 26]);
          keyCounter++;
      }

      return this.type ? result.join("") : result.reverse().join("");
  }

  decrypt(message, key) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (!message || !key) {
          throw new Error('Error');
      }

      let mPos
      let kPos
      let keyCounter = 0;
      let result = [];

      key = key.toUpperCase();

      for (let i = 0; i < message.length; i++) {
          mPos = alphabet.indexOf(message[i]);

          if (mPos === -1) {
              result.push(message[i]);
              continue;
          }

          kPos = alphabet.indexOf(key[keyCounter % key.length]);
          result.push(alphabet[(mPos - kPos + 26) % 26]);
          keyCounter++;
      }

      return this.type ? result.join("") : result.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
  }
  checkIsCharacterLatin(character) {
    return character.charCodeAt() > 64 && character.charCodeAt() < 91
      || character.charCodeAt() > 96 && character.charCodeAt() < 123
      ? true
      : false
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let n = 26;
    let encryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (this.checkIsCharacterLatin(message[i])) {
        if (keyIndex >= key.length) {
          keyIndex = 0;
        };
        const messageCharacter = message[i].toUpperCase();
        const keyCharacter = key[keyIndex].toUpperCase();
        const encryptedCharacter = String.fromCharCode((messageCharacter.charCodeAt() + keyCharacter.charCodeAt()) % n + 65);
        encryptedMessage += encryptedCharacter;
        keyIndex += 1;
      } else {
        encryptedMessage += message[i];
      }
    }
    if (this.isDirectMachine) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let n = 26;
    let decryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i += 1) {
      if (this.checkIsCharacterLatin(encryptedMessage[i])) {

        if (keyIndex >= key.length) {
          keyIndex = 0;
        };
        const encryptedCharacter = encryptedMessage[i].toUpperCase();
        const keyCharacter = key[keyIndex].toUpperCase();
        const charCode = (encryptedCharacter.charCodeAt() - keyCharacter.charCodeAt())
        const decryptedCharacter = String.fromCharCode((charCode < 0 ? charCode + n : charCode) + 65);
        decryptedMessage += decryptedCharacter;
        keyIndex += 1;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }
    if (this.isDirectMachine) {
      return decryptedMessage;
    } else {
      return decryptedMessage.split('').reverse().join('');
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};

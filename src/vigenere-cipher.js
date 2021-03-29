//const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }

    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    encrypt(message, key) {

        let originalKey = key;
        let originalMessage = message;
        const indexKey = [];
        const encryption = [];
        const resultOfEncryption = [];

        while (originalKey.length > originalKey.length) {
            originalKey = originalKey + key
        }

        while (originalKey.length < originalKey.length) {
            let originalKeyArray = originalKey.split("");
            originalKeyArray.splice(-1, 1)
            originalKey = originalKeyArray.join("")
        }

        for (let i = 0; i < originalKey.length; i++) { // массив с индексами key
            this.alphabet.forEach((element, index) => {
                if (element === originalKey[i].toUpperCase()) {
                    indexKey.push(index)
                }
            });
        }

        let j = 0;
        for (let i = 0; i < originalMessage.length; i++) {
            let wordInMessage = originalMessage[i].match(/[a-z]/gi);

            if (wordInMessage) {
                this.alphabet.forEach((el, index, arr) => {
                    if (String(wordInMessage).toUpperCase() === el) {
                        if ((index + indexKey[j % key.length]) >= 26) {
                            let sum = index + indexKey[j % key.length];
                            let res = sum - 26
                            encryption.push(res)
                            j++;
                        } else if ((index + indexKey[j % key.length]) < 26) {
                            encryption.push(index + indexKey[j % key.length])
                            j++;
                        }
                    }
                })
            }

            if (wordInMessage === null) {
                encryption.push(originalMessage[i]);
            }
        }

        for (let i = 0; i < encryption.length; i++) {
            this.alphabet.forEach((el, index, arr) => {
                if (typeof encryption[i] === "number" && encryption[i] === index) {
                    resultOfEncryption.push(el)
                }
            })

            if (typeof encryption[i] !== "number") {
                resultOfEncryption.push(encryption[i]);
            }
        }

        if (this.mode === false) {
            let response = resultOfEncryption.join("").toString()
            return response.split("").reverse().join("")
        } else {
            return resultOfEncryption.join("").toString()
        }
    }


    decrypt(message, key) {
        let originalKeys = key;
        let originalMessages = message;
        const indexKeys = [];
        const encryptionArray = [];
        const resultOfEncryptions = [];

        while (originalMessages.length > originalKeys.length) {
            originalKeys = originalKeys + key
        }

        while (originalMessages.length < originalKeys.length) {
            let originalKeyArray = originalKeys.split("");
            originalKeyArray.splice(-1, 1)
            originalKeys = originalKeyArray.join("")
        }

        for (let i = 0; i < originalKeys.length; i++) {
            this.alphabet.forEach((element, index) => {
                if (element === originalKeys[i].toUpperCase()) {
                    indexKeys.push(index)
                }
            });
        }

        let j = 0;
        for (let i = 0; i < originalMessages.length; i++) {
            let wordInMessage = originalMessages[i].match(/[a-z]/gi);

            if (wordInMessage) {
                this.alphabet.forEach((el, index, arr) => {
                    if (String(wordInMessage).toUpperCase() === el) {
                        if ((index - indexKeys[j % key.length]) < 0) {
                            let dif = index + 26 - indexKeys[j % key.length];
                            let res = dif
                            encryptionArray.push(res)
                            j++;
                        } else if ((index - indexKeys[j % key.length]) >= 0) {
                            encryptionArray.push(index - indexKeys[j % key.length])
                            j++;
                        }
                    }
                })
            }

            if (wordInMessage === null) {
                encryptionArray.push(originalMessages[i]);
            }
        }

        for (let i = 0; i < encryptionArray.length; i++) {
            this.alphabet.forEach((el, index, arr) => {
                if (typeof encryptionArray[i] === "number" && encryptionArray[i] === index) {
                    resultOfEncryptions.push(el)
                }
            })
            if (typeof encryptionArray[i] !== "number") {
                resultOfEncryptions.push(encryptionArray[i]);
            }
        }

        if (this.mode === false) {
            let response = resultOfEncryptions.join("").toString()
            return response.split("").reverse().join("")
        } else {
            return resultOfEncryptions.join("").toString()
        }
    }
}


module.exports = VigenereCipheringMachine;

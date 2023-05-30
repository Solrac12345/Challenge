function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = encryptMessage(inputText);
    document.getElementById("outputText").value = outputText;

    var BannerFirst = document.getElementById("Banner-first");
    var BannerSecond = document.getElementById("Banner-second");

    BannerFirst.style.display = "none";
    BannerSecond.style.display = "block"; 
    BannerSecond.style.justifyContent = "unset"; 
    
  }
  
  function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = decryptMessage(inputText);
    document.getElementById("outputText").value = outputText;
  }
  
  function encryptMessage(message) {
    var encrypted = message.replace(/e/g, "enter");
    encrypted = encrypted.replace(/i/g, "imes");
    encrypted = encrypted.replace(/a/g, "ai");
    encrypted = encrypted.replace(/o/g, "ober");
    encrypted = encrypted.replace(/u/g, "ufat");
    return encrypted;
  }
  
  function decryptMessage(encryptedMessage) {
    var decrypted = encryptedMessage.replace(/ufat/g, "u");
    decrypted = decrypted.replace(/ober/g, "o");
    decrypted = decrypted.replace(/ai/g, "a");
    decrypted = decrypted.replace(/imes/g, "i");
    decrypted = decrypted.replace(/enter/g, "e");
    return decrypted;
  }
  
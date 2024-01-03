function checkForSpam(message) {
  // Перетворюємо рядок на нижній регістр для порівняння
  const lowerCaseMessage = message.toLowerCase();
  
  // Перевіряємо, чи містить рядок заборонені слова
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

// Перевірка функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
console.log(checkForSpam("[SPAM] lol i'm good")) // true 
console.log(checkForSpam("Trade the new Rengoko Vampire"))// true
console.log(checkForSpam("MAxi is a gay"))// false
 CSSAnimation()
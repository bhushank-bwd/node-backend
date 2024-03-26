export const getInitials = (str, initialsCount = 2) => {
  let initials = "";
  let wordArray = str.split(" ");
  if (wordArray.length == 1) initials = wordArray[0].slice(0, initialsCount);
  else {
    for (var i = 0; i < initialsCount; i++) {
      if (wordArray[i]) {
        initials += wordArray[i].slice(0, 1);
      }
    }
  }
  return initials;
};
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
export const reverseString = (str, reverse = "char") => {
  if (reverse === "char") return str.split("").reverse().join("");
  else {
    let wordArray = str.split(" ");
    return wordArray.reverse().join(" ");
  }
};
export const removeSpecialCharacter = (str) => {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
};
export const extractNumbers = (str) => {
  let numbers = str.match(/\d+/g) || []; // Return empty array if no matches
  return numbers.map(Number);
};
export const extractText = (str) => {
  return str.match(/\D+/g) || []; // Return empty array if no matches
};

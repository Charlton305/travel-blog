// Display page category name
const processHash = (string) => {
  if (string.length === 0) return string; // Check for empty string
  let capitalised = string.charAt(0).toUpperCase() + string.slice(1);
  let newString = capitalised.replace(/-/g, ' ');
  return newString
}
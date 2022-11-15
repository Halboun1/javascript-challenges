// All challenges are from Codewars





// ------------------ CHALLENGE 1 ------------------ //
// The Hashtag Generator //
// The marketing team is spending way too much time typing in hashtags.
// let's help them with our own Hashtag Generator!
// Here's the deal:
    // it must start with hashtag(#)
    // All words must have their first letter capitalized.
    // if the final result is longer than 140 chars it must return false.
    // if the input or the result is an empty string it must return false.
    // EXAMPLES.
        // "Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// SOLUTION
function generateHashtag (str) {
    if(str.trim() === '') {
      return false;
    }
      const stringWithCamelCase = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
  
    return stringWithHashtag.length > 140 ? false : stringWithHashtag;
    
  }
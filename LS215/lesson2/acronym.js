// Acronym
// My Solution:
function acronym(string) {
  return string.split(/[, \s:\-]+/g).map(word => word[0].toUpperCase()).join('');
}

// Lesson Solution:
function acronym(string) {
  return string.replace(/-/g, ' ')
               .split(' ')
               .map(word => word[0].toUpperCase())
               .join('');
}

// Test Cases:
console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"

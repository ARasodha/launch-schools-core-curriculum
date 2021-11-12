// Sentiment Analysis 1
/*
Input: string
Output: string
Rules
- sentiment analysis aka opinion mining attempts to take information from a text
and convert it into something concrete
- use two arrays. one that contains words to connote a positive sentiment and the
other with words that connote a negative sentiment'
- given the counts of positive and negative words in our text, we can compute
a sentiment score as the difference between the two counts
  - + word count, - word count and 0 = neutral 
- implement a function that takes some text as an argument and logs some infromation
about whether the text has a positive, negative or neutral sentiment
Algorithm

- iterate over input text
  - filter out escape sequences and punctuation, set word to lowercase - create new
   array of words called `filteredWords`
    - create helper function removePunc, takes a word and removes any punctuation
    from the word and returns the word
- create `positiveCount` and `negativeCount` and set them both to 0
- iterate over the input text and if the word is in the 
positive array, increment positiveCount by 1 and same for the negative words and
negativeCount
- create helper function getSentiment that takes the pos count and neg count
and logs 5 statements to the console when invoked 
  - the positive word count, the positive words
  - the negative word count, the negative words
  - the sentiment verdict 
*/
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';
let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// My Solution:
function sentiment(text) {
  let filteredText = text.split(/[ \-\n]/g).filter(text => text.toLowerCase())
                                          .map(word => removePunc(word));

  let posWords = filteredText.filter(word => positiveWords.includes(word));
  let negWords = filteredText.filter(word => negativeWords.includes(word));
  
  getSentiment(posWords, negWords);
}

function removePunc(word) {
  return word.split('').filter(char => isLetter(char)).join('');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function getSentiment(posWords, negWords) {
  console.log(`There are ${posWords.length} words in the text.`);
  console.log(`Positive sentiments: ${posWords.join(', ')}\n`);
  console.log(`There are ${negWords.length} words in the text.`);
  console.log(`Positive sentiments: ${negWords.join(', ')}\n`);

  let verdict;
  if (posWords.length > negWords.length) {
    verdict = 'Positive';
  } else if (posWords.length < negWords.length) {
    verdict = 'Negative';
  } else {
    verdict = 'Neutral';
  }

  console.log(`The sentiment of the text is ${verdict}.`);
}

// Lesson Solution:
function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g); // returns array of matched
  // words

  let positives = wordList.filter(word => positiveWords.indexOf(word) >= 0);
  let negatives = wordList.filter(word => negativeWords.indexOf(word) >= 0);

  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('');
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  let textSentiment; 
  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}

// Test Case:
sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.
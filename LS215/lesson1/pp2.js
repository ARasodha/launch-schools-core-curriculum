// Practice Problem 2: Processing Release
/*
Input: array of objects
Output: array of objects
Rules
- write a function named `processReleaseData` that process the array of objects
with movie release data
- the function should generate an array of objects that contain only the `id`
and `title` key/value pairs
- you may assume that the `id` and `title`, when existing, is an integer greater
than `0` and a non-empty string respectively.
- keep only releases that have both `id` and `title` properties present
- keep only the `id` and `title` data for each release 
Algorithm
- create a result empty array
- iterate over input array
  - on each round of iteration create a new empty object
  - check each object on iteration for a value for `id` and `title`
    - if the are both present, add the key/value pair for both of those properties
    to the new empty object and push it to the result array
- after the loop has terminated, return the result array
*/
// My Solution:
function processReleaseData(data) {
  let result = [];
  for (let idx = 0; idx < data.length; idx++) {
    let object = {};
    if (checkId(data[idx].id) && data[idx].title) {
      object.id = data[idx].id;
      object.title = data[idx].title;
      result.push(object);
    }
  }

  return result;
}

// Further Exploration:
function checkId(id) {
  if (id === undefined) return false;
  return Number(id) >= 0;
}

// Lesson Solution:
function processReleaseData(data) {
  return data.filter(release => release.id && release.title)
             .map(release => {
               return {
                 id: release.id,
                 title: release.title,
               };
             });
}
// Test
let newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));
// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
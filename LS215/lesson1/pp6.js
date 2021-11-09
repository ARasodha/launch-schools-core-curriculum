// Practice Problem 6:
/*
Input: object
Output: object
Rules
- each term has four exams and several exercises
- every exam has a fixed max score of 100
- the total max point value for all the exercises combined is always 100, regardless
of how many exercises the student completed
- to determine a students grade, determine the students average from the four exams,
then sum all the exercise scores. Then apply the weights to compute the students
final percent grade (exams 65%, exercises 35%)
- implement a function `generateClassRecordSummary` that takes a single argument
of a `studentScores` object and return a class record summary object

Algorithm
- determine student grades:
  - iterate over each student in `studentScores`
    - for each student determine the exams average and exercises total (seperate)
      - use helper function's `getAvg` and `getSum`
    - pass both numbers to `determinePercentage` why calcualtes total percentage 
    after applying weights
    - pass the percentage to `generateClassRecord` summary and added it to
    an empty result array
    - iterate over result array and format each grade into a string and add 
    corresponding letter grade
      - use `letterGrade` helper function
- determine exam averages:
  - get all of a single exams results in an array
    - use Math.max and Math.min for min and maximum results, use getAvg function for
    average
*/
// My Solution
function generateClassRecordSummary(scores) {
  let grades  = determinePercentage(scores).map(letterGrade);
  let examStats = examInfo(scores);
  return {
    studentGrades: grades,
    exams: examStats,
  };
}

function determinePercentage(scores) {
  let result = [];
  let students = Object.keys(scores);

  for (let idx = 0; idx < students.length; idx++) {
    let exams = scores[students[idx]].scores.exams;
    let exercises = scores[students[idx]].scores.exercises;
    result.push(addWeight(getAvg(exams), getSum(exercises)));
  }

  return result;
}

function getAvg(array) {
  return array.reduce((accum, val) => accum + val) / array.length;
}

function getSum(array) {
  return array.reduce((accum, val) => accum + val);
}

function addWeight(average, sum) {
  average = average * .65;
  sum = sum * .35;
  return Math.round(average + sum);
}

function letterGrade(average) {
  if (average >= 93 && average <= 100) {
    return `${String(average)} (A)`;
  } else if (average >= 85 && average <= 92) {
    return `${String(average)} (B)`;
  } else if (average >= 77 && average <= 84) {
    return `${String(average)} (C)`;
  } else if (average >= 69 && average <= 76) {
    return `${String(average)} (D)`;
  } else if (average >= 60 && average <= 68) {
    return `${String(average)} (E)`;
  } else {
    return `${String(average)} (F)`;
  }
}

function examInfo(scores) {
  let result = [];
  let students = Object.keys(scores);
  let examIndex = 0;

  while (examIndex != 4) {
    let results = [];
    for (let idx = 0; idx < students.length; idx++) {
      let exam = scores[students[idx]].scores.exams[examIndex];
      results.push(Number(exam));
    }
    result.push({
      average: getAvg(results).toFixed(2),
      minimum: Math.min(...results),
      maximum: Math.max(...results),
    });
    examIndex++;
  }

  return result;
}

// Lesson Solution

// Test
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// 
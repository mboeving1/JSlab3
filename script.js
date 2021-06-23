"use strict";

//Declare a variable named submissions that is initialized to an array with the following objects:

let submissions = [
  {
    givenName: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },

  {
    givenName: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },

  {
    givenName: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },

  {
    givenName: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

//Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function addSubmission(submissions, newName, newScore, newDate) {
  let submission = {
    givenName: newName,
    score: newScore,
    date: newDate,
    passed: newScore > 60,
  };

  submissions.push(submission);
}

// addSubmission(submissions, "Scott", 99, "2021-01-01"); //

// console.log(submissions);

// Declare a function named deleteSubmissionByIndex
// parameters: array, index
// functionality: remove the object from the array at the specified index using splice

function deleteSubmissionByIndex(array, index) {
  submissions.splice(array, index);
}

//deleteSubmissionByIndex(submissions, 1); // Jane is gone.

//console.log(submissions);

//Declare a function named deleteSubmissionByName
//Parameters: array, name
//functionality: remove the object from the array that has the provided name. Use findIndex and splice

function deleteSubmissionByName(_array, name) {
  var index = submissions.findIndex((element) => element.givenName === name);

  submissions.splice(index, 1);
}

//deleteSubmissionByName(submissions, "Joe");

console.log(submissions);

//Declare a function named editSubmission
//parameters: array, index, score
//Functionality: update and object's score in the array at the specified index.
//Use conditionals to set the value for the passed property to true if the score is greater than
//or equal to 60 and false otherwise.

function editSubmission(array, index, score) {
  submissions[index].score = score;
  submissions[index].passed = score >= 60;
}

editSubmission(submissions, 1, 1); //will edit Joe's score to 1

//Declare a function named findSubmissionByName
//Parameter(s): array, name
//Functionality: return the object in the array that has the provided name. Use the find method

function findSubmissionByName(array, name) {
  var object = submissions.find((element) => element.name === name);

  console.log(object);
}

findSubmissionByName(submissions, "Jack");//should return Jack object

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestScore(array) {
  var min_value = array[0];
  
  array.forEach((element) => {
    if (element < min_value) {
      min_value = element
  }console.log(min_value);
});
}

  
//Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

function findAverageScore(array) {
  let total = 0;

  for (let i of array) {
    total = total + i.score;
  }
  console.log(total / array.length);
}
findAverageScore(submissions);



//Declare a function named filterPassing
//Parameter(s): array
//Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

function filterPassing(array) {
  const pass = submissions.filter((submissions) => submissions.score >= 60);
  console.log(pass);
}
filterPassing(submissions);

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array) {
  const pass = submissions.filter((submissions) => submissions.score >= 90);
  console.log(pass);
}

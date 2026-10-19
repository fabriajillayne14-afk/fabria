/**
*  Name : Jillayne O Fabria 
*  Subject : IT Programming 1
*  Section and Course : BSIT 1M 
*/



// Function to assess the grade based on the score
const scores = [0, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
function assessGrade(score) {
if  (score < 0 || score > 100) 
           return 'Invalid score';


// Determine the grade based on the score
if (score >= 95) return 'Excellent';
      else if (score >= 85)
           return 'Very Good';
      else if (score >= 75) 
           return 'Passing';
      else return 'Failing';

};

// Function to compute the final grade based on midterm and final term scores
function computeFinalGrade(midterm, finalTerm) {
    // Validate the input scores
    if (midterm < 0 || midterm > 100 || finalTerm < 0 || finalTerm > 100) {
        return 'Invalid score';
    }
    // Calculate the final grade as the average of the two scores
    const finalGrade = (midterm + finalTerm) / 2;
    return assessGrade(finalGrade);
};

// Test the assessGrade function with different scores
for (const score of scores) {
    console.log(Score: ${score}, Grade Assessment: ${assessGrade(score)});
};


// Test the computeFinalGrade function with different midterm and final term scores
console.log('GRADE ASSESSMENT TEST');
console.log('Final Grade Assessment:');
console.log('Midterm: 85, Final Term: 90, Final Grade: ' + computeFinalGrade(85, 90)); // Output: "Very Good"
console.log('Midterm: 75, Final Term: 80, Final Grade: ' + computeFinalGrade(75, 80)); // Output: "Passing"
console.log('Midterm: 60, Final Term: 70, Final Grade: ' + computeFinalGrade(60, 70));// Output: "Failing"
Jillayne

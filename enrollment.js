/*
*file name: enrollment.js
*Purpose: to compute the total tuition fee of a student
Author: Jillayne O. Fabria
*Date: September 20-26
*/

const tuitionFee = 450;
const unit = 3;
const vatRate = 0.12;
const MISC FEE = 1200;

// student information
let student_name = 'Jillayne O. Fabria';
let course = 'BSIT';
let level = 2;
let isEnrolled = true;

// Calculate the financial breakdown
let baseTuition = tuitionFee * unit;
let vatAmount = baseTuition * vatRate;

// enrollment status
let status = 'Student is enrolled ';

if (isEnrolled) {
    status = 'ENROLLED';
} else {
    status = 'NOT ENROLLED';
}

console.log(Name: {Jillayne O. Fabria}, Level: {2}, Course: {BSIT});
console.log(Status: {Student is enrolled });
console.log(Base Tuition: ₱{1200});
console.log(VAT (12%): ₱{vatAmount});

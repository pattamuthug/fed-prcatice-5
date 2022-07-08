// if grad is A the marks is between the 91 to 100
// else if grad is B the marks is between the 81 to 90
//else if grad is C the marks is between the 71 to 80
//else if grad is fail the marks are below 71

let math = 50;
let science = 60;
let tamil = 90;
let english = 80;
let social = 100;
let total = (math + science + tamil + english + social);
let avg = (total / 5);

console.log("average:", avg);

if (avg >= 91 && avg <= 100) {
    console.log("Grade is A");
}
else if (avg >= 81 && avg <= 90) {
    console.log("Grade is B");
}
else if (avg >= 71 && avg <= 80) {
    console.log("Grade is C");
}
else {
    console.log("Grade is Fail");
}
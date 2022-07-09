let num = prompt("Enter the number");
numberOfDigits = num.length;
let temp = num;
let rem = 0;

while(temp>0){

    lastdigit = temp % 10;
    temp = temp-lastdigit;
    temp = temp/10;
    rem = (rem) + (lastdigit ** numberOfDigits);
}
if (num == rem){
    console.log(num,"is a armstrong number");
}
else{
    console.log(num,"is not a armstrong number");
}


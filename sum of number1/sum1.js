let number = prompt("enter the number");
let temp = number;
let rem = 0;

while(temp>0){

    lastdigit = temp % 10;
    temp = temp-lastdigit;
    temp = temp/10;
    rem = rem + lastdigit;

}
console.log(rem);
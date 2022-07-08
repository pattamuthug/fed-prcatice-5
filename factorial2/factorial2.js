let a = prompt("Enter the number");
for(i=1; i<=a; i++){
    fact=1;
    for(j=i; j>=1; j--){
        fact*=j;
    }
    console.log(fact);
}

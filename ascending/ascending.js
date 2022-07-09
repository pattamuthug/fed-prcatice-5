var a = 4;
var b = 3;
var c = 2;

let l;
let m;
let s;
if(a>b && a>c){
    l = a;
}
else if (b>a && b>c){
    l = b;
}
else{
    l = c;
}
if(a<b && a<c){
    s = a;
}
else if(b<a && b<c){
    s = b;
}
else{
    s = c;
}
m = (a+b+c)-(l+s)
console.log("ascending order:",s,m,l);
console.log("descending order:",l,m,s);
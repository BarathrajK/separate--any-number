let a = 7;
let b = [];
for(i=1;i<100;i++){
    if(i%a ==0)
    continue;
    if(i%10 ==a)
    continue;
    if(Math.floor(i/10)==a)
    continue;
    b.push(i)
}
document.write(b)
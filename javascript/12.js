var number=0;
var n=1;
while(number===0){

var count=0;
var trinum= (n*(n+1))/2;

for(i=1;i<=Math.sqrt(trinum);i++){
if(trinum%i===0){             //finds multiples, if a multiple is found and it is less than the
count+=2;                              //square root then there is a another one greater than the root
}
}

if(count>500){
number=trinum;
break;
}

n+=1;
console.log(count,trinum,n);
}
console.log(number);
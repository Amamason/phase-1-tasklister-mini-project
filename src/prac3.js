// forEach


const friends = ['Rachel', 'Joey', 'Monica','Phoebe','Chandler','Ross'];

for (let i=0; i<=friends.length; i++){
    console.log(friends[i]);
}

friends.forEach(function(item) {
console.log(item);
});


//map
let numbers = [1,2,3,4];
let roots = numbers.map(function(item){
    return Math.sqrt(item);
});
//return new array with sq rt numbers. orig array untouched
console.log(roots);



//filter
const numbers2 = [1,2,3,4];
const evens = numbers.filter(function(item){
    return item % 2 ===0;
});
console.log(evens);


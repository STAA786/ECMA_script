const FindSquar = (num) => {
let square = [];
num.forEach((element)=>{
    square.push(element**2);
});
return square;
}
console.log(FindSquar([5,2,7,9,10]))
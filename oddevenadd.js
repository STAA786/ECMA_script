const collectionSumEven=(numbers)=>{
    let Sumeven =0;
    let Sumodd=0;
    

numbers.forEach( element => {
    element % 2 == 0
    ?( Sumeven= Sumeven+element)
    :(Sumodd=Sumodd+element);
    
});
    return `Sum of Even Number=${(Sumeven)} and sum of Odd Number=${Sumodd}
    total Sum=${Sumeve+Sumodd}`;
}
console.log(collectionSumEven([10,25,23,27,29,22,24,26]));
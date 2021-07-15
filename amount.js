const Millagecost = (distance,Milage,fuel ) => Math.round(distance/Milage)*fuel;
console.log(`My cost is${Millagecost(300,53,100)}`);

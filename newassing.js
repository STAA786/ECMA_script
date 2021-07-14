
const AreaOfRect= (b, w) => b * w;
const AreaOfTraingle= (b, h) => (1/2) * b * h;
const AreaOfCir=(r) => (22/7) * r* r;

console.log(`AreaOfRect is ${AreaOfRect(20,10)} sq. unit`)
console.log(`Area of traingle is ${AreaOfTraingle(11,26)} sq. unit`);
console.log(`AreaOfCircle is ${AreaOfCir(5)} sq. unit`);

const x= 12;
const b= 27;
const h= 14;
const r= 7;
const r2= 5;
console.log(`Area of Diagram V is  ${AreaOfRect(b-r1,h) + AreaOfTraingle(b-r1,x) + AreaOfCir(r1)/2 - AreaOfCir(r2)}`);
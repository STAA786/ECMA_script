const AreaOfRect= (b, w) => b * w;
const AreaOfTraingle= (b, h) => (1/2) * b * h;
const AreaOfCir=(r) => (22/7) * r* r;

console.log(`AreaOfRect is ${AreaOfRect(20,10)} sq. unit)`)
console.log(`Area of traingle is ${AreaOfTraingle(10,20)}sq. unit`)
console.log(`AreaOfCircle is ${AreaOfCir(50)} sq. unit`);




const x=10;
const b=15;
const h=30;
const r1=7;
const r2=5;


console.log(`Area of Diagram III is ${AreaOfTraingle(x,b) + AreaOfTraingle(b,h -x)}`);
console.log(`Area of Diagram V is  ${AreaOfRect(b-r1,h) + AreaOfTraingle(b-r1,x) + AreaOfCir(r1)/2 - AreaOfCir(r2)}`);

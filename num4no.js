const BigNumberMultOpg = (num1 , num2 , num3, num4)=>{
  let BigNum=num1>num2 ? num1:num2;
BigNum=(BigNum>num3) ? BigNum:num3;
BigNum=(BigNum>num4) ? BigNum:num4;
return BigNum;
}

console.log(`Big Number is ${BigNumberMultOpg(23,56,75,21)}`);
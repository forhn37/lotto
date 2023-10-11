let lottoArray = [];

for(let i=0; i<6; i++) {
  let test = Math.floor(Math.random() *(45 -1)) +1
  lottoArray[i] = test;
}
console.log(lottoArray);
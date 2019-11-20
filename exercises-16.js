function totalDigitRekursif(angka) {
  // you can only write your code here!
  var total=0;
  var angkaNew=angka.toString();
  // for(var i=0; i<angkaNew.length; i++){
  //       total+=Number(angkaNew[i])
  // }
  if(angkaNew.length===1){
    return Number(angkaNew); 
  }else{
    return Number(angkaNew[0])+totalDigitRekursif(Number(angkaNew.slice(1)));
  }
  // return total;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
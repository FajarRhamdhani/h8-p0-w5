function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var total=1;
  var angkaNew=angka.toString();
  for (var i=0; i<angkaNew.length; i++){
    if(angkaNew.length===1){
    total=Number(angkaNew[i]);
    }else if(angkaNew.length>1){
    total*=Number(angkaNew[i]);
    }
  }
  if(String(total).length>1){
    return kaliTerusRekursif(total)
  }else{
    return total
  }
  
  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
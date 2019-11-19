console.log(min(2,8));

function min(a,b){
  if (a < b) return a;
  else return b;
}

 function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
  
  console.log(isEven(50));

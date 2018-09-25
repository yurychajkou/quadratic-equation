module.exports = function solveEquation(equation) {
 
  let arrA = equation.split(" ");
  let arrB = arrA[3].split(" ");
  let arrC = arrA[7].split(" ");
      
  let a = parseInt([arrA[0], 10]);
  let b = parseInt([arrA[4], 10]);
  let c = parseInt([arrA[8], 10]);
  
  if (arrB == "-"){
    b=-b
    };
    if (arrC == "-"){
    c=-c
    };
  
  let d = b*b-4*a*c;
  let x1 = 0;
  let x2 = 0;
  
 // if (d > 0) {
   x1 = (-b + Math.sqrt(d))/(2*a);
   x2 = (-b - Math.sqrt(d))/(2*a);
  //};
/* if (d < 0) {
    x1 = x2 = - (b/2*a);
    };*/
let arrRoot = [Math.round(x1), Math.round(x2)];
function compareRoots(a, b) {
  return  a-b;
}
arrRoot.sort(compareRoots)
return arrRoot;
}

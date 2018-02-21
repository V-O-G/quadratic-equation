module.exports = function solveEquation(equation) {
  var editEquation = equation.replace(/ /g, '');
    var findNumbers = editEquation.match(/[+-]?\d+/g).map(Number);
    var a = findNumbers[0]/Math.abs(findNumbers[0]);
    var b = findNumbers[2]/Math.abs(findNumbers[0]);
    var c = findNumbers[3]/Math.abs(findNumbers[0]);
    var D1 = Math.pow(b,2);
    var D2 = 4*a*c;
    var D = D1-D2;
    if(D<0){return 0}
    if(D===0){
        var res1 = -b/2*a;
        return res1;
    }
    else{
        var res2 = [];
        var sqrtD = Math.sqrt(D);
        var res2_1 = (-b+sqrtD)/2*a;
        var res2_2 = (-b-sqrtD)/2*a;
        res2.push(res2_1);
        res2.push(res2_2);
        if(res2[0]>res2[1]){
            [res2[0],res2[1]]=[res2[1],res2[0]];
        }
        return res2;
    }
}

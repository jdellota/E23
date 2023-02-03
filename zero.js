function endZeros(a) {
    var splitNumber = String(a).split("").reverse();
    ;
    var zeroCounter = 0;
    for (var i = 0; i < splitNumber.length; i++) {
        if (splitNumber[i] == "0") {
            zeroCounter++;
        }
        else {
            break;
        }
    }
    return zeroCounter;
}
console.log(endZeros(1001000));

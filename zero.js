//import assert from "assert";
function endZeros(a) {
    var splitNumber = String(a).split("");
    var zeroCounter = 0;
    for (var i = 1; i < splitNumber.length; i++) {
        if (splitNumber[i] == "0") {
            zeroCounter++;
        }
    }
    return zeroCounter;
}
console.log(endZeros(0));
// These "asserts" are used for self-checking
// assert.strictEqual(endZeros(1), 0);
// assert.strictEqual(endZeros(0), 1);
// assert.strictEqual(endZeros(10), 1);
// assert.strictEqual(endZeros(100), 2);
// assert.strictEqual(endZeros(1000), 3);

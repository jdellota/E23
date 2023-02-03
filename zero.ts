

function endZeros(a: number): number {
    let splitNumber =String(a).split("").reverse();;
    let zeroCounter: number=0;
    for(let i=0;i<splitNumber.length;i++){
        if(splitNumber[i]=="0"){
            zeroCounter++;
        }
        else{
            break;
        }
    }
    return zeroCounter;
}


console.log(endZeros(1001000));


const palindromeVerify = (num) => {
    const verifyNumber = String(num)
    const invertedNumber = verifyNumber.split('').reverse().join('');
    return verifyNumber === invertedNumber ? verifyNumber : undefined;
}

const verificationNumbers = (init) => {
    if(init < 10) {
        return 10;
    }
    return init
}

const palindromeList = (init, final) => {
    const arr = []

    for(let i = verificationNumbers(init); +i <= +final; i++) {
        !!palindromeVerify(i) ? arr.push(+palindromeVerify(i)) : ''
    }
    return arr;
}

module.exports = palindromeList;
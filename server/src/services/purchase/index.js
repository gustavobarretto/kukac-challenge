const purchaseCalculator = (productValue, payment) => {
    const change = +payment - +productValue;
    if(change % 100 === 0) {
        return { "change": change, "notes100": change/100, "notes10": 0, "notes1": 0 }
    }
    const notes = String(change/100.0).split('.')
    return { "change": +change, "notes100": +notes[0], "notes10": +notes[1][0] || 0, "notes1": +notes[1][1] || 0}
}

module.exports = purchaseCalculator;


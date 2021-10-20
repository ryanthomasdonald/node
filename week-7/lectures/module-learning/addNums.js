const sum = (...args) => {
    let s = 0;
    args.forEach(el => {
        s += el;
    });
    return s;
};

module.exports = sum;
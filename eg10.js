function factorial(n){
    var fac = 1;
    if (n === 0 || n === 1)
        return fac
    else if(n > 1) {
    for (let i = n; i >= 1; i--) {
        fac = fac * i;
    }
    }
    return fac;
}

fuction findFibonnaci(n) {
    if (n <= 1) {
        return n;
    }
    return findFibonnaci(n - 1) + findFibonnaci(n - 2);
}
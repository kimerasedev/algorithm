function solution(n, numlist) {
    return numlist.filter(num => num%n === 0);
}

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]); // [6, 9, 12]
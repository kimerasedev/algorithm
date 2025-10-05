function solution(n) {
    const result = [];
    for (let i = 1; i <= n; i += 2) {
        result.push(i);
    }
    return result;
}

solution(10); // [1, 3, 5, 7, 9]
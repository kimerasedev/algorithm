function solution(n) {
    let sum = 0;
    for (const i of [...String(n)]) {
        sum += Number(i);
    }
    
    return sum;
}
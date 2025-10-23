function solution(n) {
    const sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)){
        return 1;
    } else {
        return 2;
    }
}

solution(144); // 1
solution(976); // 2
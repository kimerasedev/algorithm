function solution(hp) {
    let count = 0;
    const powers = [5,3,1]; // 장군, 병정, 일개미
    
    for (let p of powers) {
        count += Math.floor(hp / p)
        hp %= p; // 남은 체력
    }
    
    return count;
}

solution(23); // 5
solution(999); // 201
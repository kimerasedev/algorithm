function solution(array) {
  const sorted = [...array].sort((a, b) => a-b);
    const result = sorted[Math.floor(sorted.length / 2)];
    
    return result;
}

solution([1,2, 7, 10, 11]); // 7
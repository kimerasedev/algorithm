function solution(array, n) {
    const filtered = array.filter(num => num === n);
    
    return filtered.length;
}
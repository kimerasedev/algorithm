function solution(s1, s2) {
   const filter = s1.filter(item => s2.includes(item));
    
    return filter.length;
}
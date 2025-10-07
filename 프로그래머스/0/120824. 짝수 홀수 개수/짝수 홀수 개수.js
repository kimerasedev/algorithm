function solution(num_list) {
    let even = 0; // 짝수
    let odd = 0; // 홀수 
    
    for (let num of num_list) {
        if(num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    
    return [even, odd];
}
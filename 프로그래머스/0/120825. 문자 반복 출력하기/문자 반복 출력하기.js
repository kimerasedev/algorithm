function solution(my_string, n) {
    let result = "";
    
    for (let str of my_string) {
        for (let i = 0; i < n; i++) {
            result += str;
        }
    }
    
    return result;
}
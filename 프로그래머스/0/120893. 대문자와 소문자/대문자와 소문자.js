function solution(my_string) {
    let result = "";
    
    for (let str of my_string) {
        // 대문자 -> 소문자로 변환
        if (str === str.toUpperCase()) {
            result += str.toLowerCase();
        }
        // 소문자 -> 대문자로 변환
        else {
            result += str.toUpperCase();
        }
    }
    
    return result;
}

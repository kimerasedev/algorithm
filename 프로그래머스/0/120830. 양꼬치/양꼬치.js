// 양꼬치 12000원, 음료수 2000원
// 10인분에 음료수 1개 서비스

function solution(n, k) {
    return (n * 12000) + (k * 2000) - Math.floor(n/10) * 2000;
}

solution(10, 3); // 124000
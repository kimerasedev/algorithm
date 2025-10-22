function solution(dot) {
    const [x,y] = dot;
    
    switch (true) {
        case x > 0 && y > 0:
            return 1;
        case x < 0 && y > 0:
            return 2;
        case x < 0 && y < 0:
            return 3;
        case x > 0 && y < 0:
            return 4;
    }
}

solution([2, 4]); // 1
solution([-7, 9]); // 2
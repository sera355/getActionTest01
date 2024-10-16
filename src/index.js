// computes a factorial of a given positive integer
function factorial(n) { //n을 받아서 factorial을 계산하는 함수 

    if( n < 0 ) {
        throw new Error('n must be a positive integer');
    }


    if( n === 0 ) {
        return 1;
    }

    return n * factorial(n - 1); //recursive 함수
}

module.exports = factorial; //factorial 함수를 내부에서 쓰기 위해 임포트함.
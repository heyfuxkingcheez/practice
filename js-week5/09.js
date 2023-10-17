// 클로저(closure)
const x =1; // 전역scope

function outerFunc() {
    const x =10; // outer scope
    function innerFunc() {
        // x는 어디서 참조할까요? -> in -> out // 10
        // 함수가 선언된 렉시컬 환경 ! 
        // 함수가 선언될 당시의 외부 변수 등의 정보!
        console.log(x);
    }

    innerFunc();

}

outerFunc();
function test1() {
    console.log('요소에 이벤트 발생');
    // return undefined; <- 보이지 않지만 항상 이렇게 들어가있음.
    // 그래서 test1(); 할시 보이지 않은 undefined값이 반환. 따라서 test1;로 호출.
}

window.onload = function(){ // html페이지 로딩이 완료된 이후에 코드를 실행하고자 할 때
                            // - window.onload사용
 // document.querySelector("#btn2").onclick = test1();
    document.querySelector("#btn2").onclick = test1;
    document.querySelector("#btn2").onclick = function(){
        console.log('하이');
    }; // onclick속성에 대입되는 이벤트홀더는 1개. 따라서 2번이 실행

       // 이벤트 1개만 실행 onclick
       // 이벤트 여러개 실행 addEventListener을 사용

    document.querySelector("#btn3").addEventListener("click", function(){
    console.log("btn3 clicked!");});
    document.querySelector("#btn3").addEventListener("click", function(){
    console.log("222 btn3 clicked!");}); // 이벤트 속성 여러개 실행

    /*
        Event객체
         - 발생한 이벤트 관련 모든 정보를 가지고 있는 객체
         - 이벤트가 발생한 요소, 발생한 이벤트의 유형, html내부의 위치정보 등
         - 이벤트발생시 브라우저는 이벤트 핸들러 함수의 첫번째 매개변수로
           항상 이벤트 객체를 주입

        Event target객체
         - 이벤트가 발생한 객체
         - 이벤트 객체의 target 속성의 값
    */
   document.querySelector(".box").onmouseover = function(e){ //onmouseover <-마우스 호버
        console.log(e);
        console.log(e.target);

        e.target.innerHTML = "하이";
        this.innerHTML = "하이2";
   };

   document.querySelector(".box").onmouseout =
    function(e){
        e.target.innerHTML = "잘가";
    }

    /*
        KeyEvent // 보통 keyup이벤트 많이 사용
         keydown - keypress - keyup(input에 값이 기록되는 순간)
                              input
    */
   document.querySelector("#userInput")
   .addEventListener("keyup",function(e){
        console.log(e);
        document.querySelector(".text-wrapper").innerHTML
        = e.target.value;
   });

   /* submit event */
   document.querySelector("form").onsubmit = function(e){
    /*
        사용자가 입력한 값이 유효한 값인지 유효성 검사를
        진행하기 위한 목적으로 작성한다.
    */
    console.log(e);
    // 1. 아이디 검사
    const userId = document.querySelector("#userId");
    if(userId.value.length < 4){
        console.log('유효한 아이디를 입력하세요');
        userId.focus(); // focus 강제로 발생시킬 수 있음.
        // return false; // submit이벤트 막기 (제출X)
        e.preventDefault(); // submit이벤트 막기 (제출X)
        //console.log('12'); // <- 뒤쪽 코드는 실행 ?
        // 기본 이벤트 실행 방지 속성.
        // 기본 이벤트 ? 각 태그마다 내장되어 있는 이벤트 기능
        // ex) submit버튼태그 : submit이벤트 / a태그 : click이벤트 
    }
    
    // 2. 비밀번호 검사
    const pwd = document.querySelector("#pwd");
    if(pwd.value.length < 4){
        console.log("유효한 비밀번호를 입력하세요...!");
        pwd.select();
        e.preventDefault();
    }

    // 유효성 검사 모두 통과시 true반환 
    return true;
   };
}

function displayMsg(e, boxx){ // this 랑 e.target 은 다름. (gpt한테 물어보기)
    console.log(e.target, boxx.dataset.text); // data-test 안에 들어간 속성을 꺼내는 방법
    // data-khj="현주"에서 값을 꺼낼 시 => boxx.dataset.khj

    // 상위요소로의 이벤트 전파를 막는 함수 (같은 이벤트만 전파. onclick은 onclick만 전파.
    // 그러니까, onclick 이랑 onmouse? 이렇게 있으면 onclick까지만 전파됌)
    e.stopPropagation();
} 


